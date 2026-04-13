'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  createPost, updatePost, deletePost, togglePublish,
  generateArticleAI, getItalyTrends
} from '../actions/blog'
import type { BlogSection, BlogPostRow } from '../types'
import {
  Plus, Trash2, ArrowUp, ArrowDown, Save, Globe, Eye, EyeOff,
  Sparkles, TrendingUp, Upload, Youtube, Type, List,
  AlertTriangle, Megaphone, Image as ImageIcon, Heading2, Heading3,
  Loader2, ChevronDown, ChevronUp, X
} from 'lucide-react'

interface Props {
  post?: BlogPostRow
  locale?: string
}

const SECTION_TYPES = [
  { type: 'h2', label: 'Titolo H2', icon: Heading2 },
  { type: 'h3', label: 'Titolo H3', icon: Heading3 },
  { type: 'paragraph', label: 'Paragrafo', icon: Type },
  { type: 'list', label: 'Lista', icon: List },
  { type: 'image', label: 'Immagine', icon: ImageIcon },
  { type: 'video', label: 'Video YouTube', icon: Youtube },
  { type: 'callout', label: 'Callout', icon: AlertTriangle },
  { type: 'cta', label: 'Call to Action', icon: Megaphone },
]

function emptySection(type: string): BlogSection {
  switch (type) {
    case 'h2': return { type: 'h2', heading: '', content: '' }
    case 'h3': return { type: 'h3', heading: '', content: '' }
    case 'paragraph': return { type: 'paragraph', content: '' }
    case 'list': return { type: 'list', heading: '', items: [''] }
    case 'image': return { type: 'image', url: '', alt: '', caption: '' }
    case 'video': return { type: 'video', youtubeId: '', caption: '' }
    case 'callout': return { type: 'callout', content: '' }
    case 'cta': return { type: 'cta', heading: '', content: '' }
    default: return { type: 'paragraph', content: '' }
  }
}

export function PostEditor({ post, locale = 'it' }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [title, setTitle] = useState(post?.title ?? '')
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [description, setDescription] = useState(post?.description ?? '')
  const [date, setDate] = useState(post?.date?.slice(0, 10) ?? new Date().toISOString().slice(0, 10))
  const [readTime, setReadTime] = useState(post?.read_time ?? 5)
  const [category, setCategory] = useState(post?.category ?? 'Marketing Digitale')
  const [keywords, setKeywords] = useState((post?.keywords ?? []).join(', '))
  const [image, setImage] = useState(post?.image ?? '')
  const [imageAlt, setImageAlt] = useState(post?.image_alt ?? '')
  const [sections, setSections] = useState<BlogSection[]>(
    (post?.sections as BlogSection[]) ?? [{ type: 'intro', content: '' }]
  )
  const [published, setPublished] = useState(post?.published ?? false)

  const [aiKeyword, setAiKeyword] = useState('')
  const [trends, setTrends] = useState<string[]>([])
  const [trendsLoading, setTrendsLoading] = useState(false)
  const [aiLoading, setAiLoading] = useState(false)
  const [uploadingIdx, setUploadingIdx] = useState<number | null>(null)
  const [coverUploading, setCoverUploading] = useState(false)
  const [coverError, setCoverError] = useState('')
  const [coverSuccess, setCoverSuccess] = useState(false)
  const [saveError, setSaveError] = useState('')
  const [showAiPanel, setShowAiPanel] = useState(false)

  const supabase = createClient()

  // ── Slug auto-generate ───────────────────────────────────────────────────
  function autoSlug(t: string) {
    return t.toLowerCase()
      .replace(/[àáâã]/g, 'a').replace(/[èéêë]/g, 'e')
      .replace(/[ìíîï]/g, 'i').replace(/[òóôõ]/g, 'o')
      .replace(/[ùúûü]/g, 'u').replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 80)
  }

  // ── Cover image upload ───────────────────────────────────────────────────
  async function uploadCoverImage(file: File) {
    setCoverUploading(true)
    setCoverError('')
    setCoverSuccess(false)
    try {
      const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
      const path = `covers/${Date.now()}.${ext}`
      const { data, error } = await supabase.storage
        .from('blog-images')
        .upload(path, file, { upsert: true, contentType: file.type || 'image/jpeg' })
      if (error) {
        setCoverError(`Errore upload: ${error.message}`)
      } else if (data) {
        const { data: urlData } = supabase.storage.from('blog-images').getPublicUrl(data.path)
        setImage(urlData.publicUrl)
        setImageAlt(file.name.replace(/\.[^.]+$/, ''))
        setCoverSuccess(true)
        setTimeout(() => setCoverSuccess(false), 3000)
      }
    } catch (e) {
      setCoverError(e instanceof Error ? e.message : 'Errore sconosciuto')
    }
    setCoverUploading(false)
  }

  // ── Section image upload ─────────────────────────────────────────────────
  async function uploadSectionImage(idx: number, file: File) {
    setUploadingIdx(idx)
    const ext = file.name.split('.').pop()
    const path = `sections/${Date.now()}.${ext}`
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(path, file, { upsert: true })
    if (!error && data) {
      const { data: urlData } = supabase.storage.from('blog-images').getPublicUrl(data.path)
      updateSection(idx, { url: urlData.publicUrl, alt: file.name.replace(/\.[^.]+$/, '') })
    }
    setUploadingIdx(null)
  }

  // ── Section helpers ──────────────────────────────────────────────────────
  function addSection(type: string) {
    setSections(s => [...s, emptySection(type)])
  }

  function removeSection(idx: number) {
    setSections(s => s.filter((_, i) => i !== idx))
  }

  function moveSection(idx: number, dir: -1 | 1) {
    setSections(s => {
      const arr = [...s]
      const swap = idx + dir
      if (swap < 0 || swap >= arr.length) return arr;
      [arr[idx], arr[swap]] = [arr[swap], arr[idx]]
      return arr
    })
  }

  function updateSection(idx: number, patch: Partial<BlogSection>) {
    setSections(s => s.map((sec, i) => i === idx ? { ...sec, ...patch } as BlogSection : sec))
  }

  function updateListItem(sectionIdx: number, itemIdx: number, value: string) {
    setSections(s => s.map((sec, i) => {
      if (i !== sectionIdx || sec.type !== 'list') return sec
      const items = [...sec.items]
      items[itemIdx] = value
      return { ...sec, items }
    }))
  }

  function addListItem(sectionIdx: number) {
    setSections(s => s.map((sec, i) => {
      if (i !== sectionIdx || sec.type !== 'list') return sec
      return { ...sec, items: [...sec.items, ''] }
    }))
  }

  function removeListItem(sectionIdx: number, itemIdx: number) {
    setSections(s => s.map((sec, i) => {
      if (i !== sectionIdx || sec.type !== 'list') return sec
      return { ...sec, items: sec.items.filter((_, j) => j !== itemIdx) }
    }))
  }

  // ── Trends ───────────────────────────────────────────────────────────────
  async function loadTrends() {
    setTrendsLoading(true)
    const t = await getItalyTrends()
    setTrends(t)
    setTrendsLoading(false)
  }

  // ── AI generation ────────────────────────────────────────────────────────
  async function handleGenerate() {
    if (!aiKeyword.trim()) return
    setAiLoading(true)
    setSaveError('')
    try {
      const result = await generateArticleAI(aiKeyword, trends)
      setTitle(result.title)
      setSlug(autoSlug(result.title))
      setDescription(result.description)
      setCategory(result.category)
      setKeywords(result.keywords.join(', '))
      setSections([{ type: 'intro', content: '' }, ...result.sections])
      setShowAiPanel(false)
    } catch (e: unknown) {
      setSaveError(e instanceof Error ? e.message : 'Errore generazione AI')
    }
    setAiLoading(false)
  }

  // ── Save ─────────────────────────────────────────────────────────────────
  function buildPayload() {
    return {
      title: title.trim(),
      slug: slug.trim(),
      description: description.trim(),
      date,
      read_time: readTime,
      category,
      keywords: keywords.split(',').map(k => k.trim()).filter(Boolean),
      image,
      image_alt: imageAlt,
      sections,
      locale,
    }
  }

  function handleSave() {
    setSaveError('')
    if (!title || !slug) { setSaveError('Titolo e slug sono obbligatori'); return }
    startTransition(async () => {
      try {
        if (post?.id) {
          await updatePost(post.id, buildPayload())
        } else {
          const res = await createPost(buildPayload())
          if (res?.id) router.replace(`/it/admin/blog/${res.id}`)
        }
      } catch (e: unknown) {
        setSaveError(e instanceof Error ? e.message : 'Errore salvataggio')
      }
    })
  }

  function handleTogglePublish() {
    if (!post?.id) return
    startTransition(async () => {
      await togglePublish(post.id, !published)
      setPublished(p => !p)
    })
  }

  function handleDelete() {
    if (!post?.id || !confirm('Eliminare questo articolo?')) return
    startTransition(async () => {
      await deletePost(post.id)
      router.replace('/it/admin/blog')
    })
  }

  // ── Section renderer ─────────────────────────────────────────────────────
  function renderSection(sec: BlogSection, idx: number) {
    const controls = (
      <div className="flex items-center gap-1 ml-auto shrink-0">
        <button onClick={() => moveSection(idx, -1)} disabled={idx === 0} className="p-1 hover:text-accent disabled:opacity-30 transition-colors">
          <ArrowUp size={14} />
        </button>
        <button onClick={() => moveSection(idx, 1)} disabled={idx === sections.length - 1} className="p-1 hover:text-accent disabled:opacity-30 transition-colors">
          <ArrowDown size={14} />
        </button>
        <button onClick={() => removeSection(idx)} className="p-1 hover:text-red-500 transition-colors">
          <Trash2 size={14} />
        </button>
      </div>
    )

    const sectionLabel = SECTION_TYPES.find(t => t.type === sec.type)?.label ?? sec.type

    return (
      <div key={idx} className="border border-surface-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 bg-surface text-xs font-medium text-foreground-muted border-b border-surface-border">
          <span className="uppercase tracking-wide">{sectionLabel}</span>
          {controls}
        </div>
        <div className="p-4 space-y-3">
          {(sec.type === 'h2' || sec.type === 'h3') && (
            <>
              <input
                value={sec.heading}
                onChange={e => updateSection(idx, { heading: e.target.value })}
                placeholder={`${sec.type.toUpperCase()} — Titolo sezione`}
                className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm font-semibold bg-white focus:outline-none focus:border-accent"
              />
              <textarea
                value={sec.content}
                onChange={e => updateSection(idx, { content: e.target.value })}
                placeholder="Contenuto del paragrafo..."
                rows={4}
                className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm bg-white focus:outline-none focus:border-accent resize-none"
              />
            </>
          )}
          {(sec.type === 'intro' || sec.type === 'paragraph') && (
            <textarea
              value={sec.content}
              onChange={e => updateSection(idx, { content: e.target.value })}
              placeholder="Testo paragrafo..."
              rows={5}
              className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm bg-white focus:outline-none focus:border-accent resize-none"
            />
          )}
          {(sec.type === 'callout') && (
            <textarea
              value={sec.content}
              onChange={e => updateSection(idx, { content: e.target.value })}
              placeholder="Testo callout (consiglio importante, avviso...)"
              rows={3}
              className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm bg-white focus:outline-none focus:border-accent resize-none"
            />
          )}
          {sec.type === 'cta' && (
            <>
              <input
                value={sec.heading}
                onChange={e => updateSection(idx, { heading: e.target.value })}
                placeholder="Titolo CTA"
                className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm font-semibold bg-white focus:outline-none focus:border-accent"
              />
              <textarea
                value={sec.content}
                onChange={e => updateSection(idx, { content: e.target.value })}
                placeholder="Descrizione CTA"
                rows={3}
                className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm bg-white focus:outline-none focus:border-accent resize-none"
              />
            </>
          )}
          {sec.type === 'list' && (
            <>
              <input
                value={sec.heading ?? ''}
                onChange={e => updateSection(idx, { heading: e.target.value })}
                placeholder="Titolo lista (opzionale)"
                className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm bg-white focus:outline-none focus:border-accent"
              />
              <div className="space-y-2">
                {sec.items.map((item, ii) => (
                  <div key={ii} className="flex gap-2">
                    <input
                      value={item}
                      onChange={e => updateListItem(idx, ii, e.target.value)}
                      placeholder={`Elemento ${ii + 1}`}
                      className="flex-1 px-3 py-2 border border-surface-border rounded-lg text-sm bg-white focus:outline-none focus:border-accent"
                    />
                    <button onClick={() => removeListItem(idx, ii)} className="p-2 hover:text-red-500 transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addListItem(idx)}
                  className="text-xs text-accent hover:underline flex items-center gap-1"
                >
                  <Plus size={12} /> Aggiungi elemento
                </button>
              </div>
            </>
          )}
          {sec.type === 'image' && (
            <>
              <label className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-surface-border rounded-xl cursor-pointer hover:border-accent transition-colors">
                {sec.url ? (
                  <img src={sec.url} alt={sec.alt} className="w-full max-h-48 object-cover rounded-lg" />
                ) : (
                  <>
                    {uploadingIdx === idx ? (
                      <Loader2 size={24} className="animate-spin text-accent" />
                    ) : (
                      <Upload size={24} className="text-foreground-muted" />
                    )}
                    <span className="text-sm text-foreground-muted">Carica immagine</span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={e => { const f = e.target.files?.[0]; if (f) uploadSectionImage(idx, f) }}
                />
              </label>
              {sec.url && (
                <button onClick={() => updateSection(idx, { url: '' })} className="text-xs text-red-500 hover:underline">
                  Rimuovi immagine
                </button>
              )}
              <input
                value={sec.alt}
                onChange={e => updateSection(idx, { alt: e.target.value })}
                placeholder="Alt text (SEO)"
                className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm bg-white focus:outline-none focus:border-accent"
              />
              <input
                value={sec.caption ?? ''}
                onChange={e => updateSection(idx, { caption: e.target.value })}
                placeholder="Didascalia (opzionale)"
                className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm bg-white focus:outline-none focus:border-accent"
              />
            </>
          )}
          {sec.type === 'video' && (
            <>
              <input
                value={sec.youtubeId}
                onChange={e => {
                  const raw = e.target.value
                  const match = raw.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/)
                  updateSection(idx, { youtubeId: match ? match[1] : raw })
                }}
                placeholder="URL YouTube o ID video (es. dQw4w9WgXcQ)"
                className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm bg-white focus:outline-none focus:border-accent"
              />
              {sec.youtubeId && (
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${sec.youtubeId}`}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              )}
              <input
                value={sec.caption ?? ''}
                onChange={e => updateSection(idx, { caption: e.target.value })}
                placeholder="Didascalia video (opzionale)"
                className="w-full px-3 py-2 border border-surface-border rounded-lg text-sm bg-white focus:outline-none focus:border-accent"
              />
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
      {/* Main editor */}
      <div className="space-y-6">
        {/* AI Panel */}
        <div className="border border-surface-border rounded-2xl overflow-hidden">
          <button
            onClick={() => setShowAiPanel(p => !p)}
            className="w-full flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-violet-50 to-pink-50 hover:from-violet-100 hover:to-pink-100 transition-colors text-left"
          >
            <Sparkles size={20} className="text-violet-500 shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-sm">Genera articolo con AI</p>
              <p className="text-xs text-foreground-muted">Inserisci una keyword e l&apos;AI scrive l&apos;articolo completo</p>
            </div>
            {showAiPanel ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showAiPanel && (
            <div className="p-5 space-y-4 border-t border-surface-border">
              {/* Trends */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={15} className="text-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">Trending in Italia ora</span>
                  <button
                    onClick={loadTrends}
                    disabled={trendsLoading}
                    className="ml-auto text-xs text-accent hover:underline flex items-center gap-1"
                  >
                    {trendsLoading && <Loader2 size={12} className="animate-spin" />}
                    Carica trend
                  </button>
                </div>
                {trends.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {trends.slice(0, 12).map(t => (
                      <button
                        key={t}
                        onClick={() => setAiKeyword(t)}
                        className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <input
                  value={aiKeyword}
                  onChange={e => setAiKeyword(e.target.value)}
                  placeholder="es. consulenza marketing digitale"
                  className="flex-1 px-3 py-2 border border-surface-border rounded-xl text-sm focus:outline-none focus:border-accent"
                  onKeyDown={e => e.key === 'Enter' && handleGenerate()}
                />
                <button
                  onClick={handleGenerate}
                  disabled={aiLoading || !aiKeyword.trim()}
                  className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl disabled:opacity-50 transition-colors"
                >
                  {aiLoading ? <Loader2 size={15} className="animate-spin" /> : <Sparkles size={15} />}
                  Genera
                </button>
              </div>
              <p className="text-xs text-foreground-muted">⚠️ La generazione sovrascrive titolo, slug, descrizione e sezioni.</p>
            </div>
          )}
        </div>

        {/* Basic fields */}
        <div className="border border-surface-border rounded-2xl p-6 space-y-4">
          <h2 className="font-semibold text-sm uppercase tracking-wide text-foreground-muted">Informazioni articolo</h2>

          <input
            value={title}
            onChange={e => { setTitle(e.target.value); if (!post?.id) setSlug(autoSlug(e.target.value)) }}
            placeholder="Titolo articolo"
            className="w-full px-4 py-3 border border-surface-border rounded-xl text-lg font-semibold bg-white focus:outline-none focus:border-accent"
          />

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs text-foreground-muted mb-1 block">Slug URL</label>
              <input
                value={slug}
                onChange={e => setSlug(e.target.value)}
                placeholder="url-articolo"
                className="w-full px-3 py-2 border border-surface-border rounded-xl text-sm font-mono bg-white focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="text-xs text-foreground-muted mb-1 block">Tempo lettura (min)</label>
              <input
                type="number"
                value={readTime}
                onChange={e => setReadTime(Number(e.target.value))}
                min={1}
                max={60}
                className="w-24 px-3 py-2 border border-surface-border rounded-xl text-sm bg-white focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="text-xs text-foreground-muted mb-1 block">Data</label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="px-3 py-2 border border-surface-border rounded-xl text-sm bg-white focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Meta description (140-155 caratteri, include la keyword principale)"
            rows={3}
            className="w-full px-4 py-3 border border-surface-border rounded-xl text-sm bg-white focus:outline-none focus:border-accent resize-none"
          />
          <p className="text-xs text-foreground-muted text-right">{description.length}/155</p>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs text-foreground-muted mb-1 block">Categoria</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-surface-border rounded-xl text-sm bg-white focus:outline-none focus:border-accent"
              >
                {['Marketing Digitale', 'Social Media', 'Web & Tecnologia', 'Advertising', 'SEO', 'Automazione'].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-foreground-muted mb-1 block">Keywords SEO (separate da virgola)</label>
            <input
              value={keywords}
              onChange={e => setKeywords(e.target.value)}
              placeholder="keyword1, keyword2, keyword3"
              className="w-full px-3 py-2 border border-surface-border rounded-xl text-sm bg-white focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        {/* Cover image */}
        <div className="border border-surface-border rounded-2xl p-6 space-y-3">
          <h2 className="font-semibold text-sm uppercase tracking-wide text-foreground-muted">Immagine di copertina</h2>
          <label className="relative flex flex-col items-center gap-3 p-6 border-2 border-dashed border-surface-border rounded-xl cursor-pointer hover:border-accent transition-colors">
            {image && !coverUploading && (
              <img src={image} alt={imageAlt} className="w-full max-h-64 object-cover rounded-lg" />
            )}
            {coverUploading ? (
              <div className="flex flex-col items-center gap-2 py-4">
                <Loader2 size={32} className="animate-spin text-accent" />
                <span className="text-sm text-accent font-medium">Caricamento in corso...</span>
              </div>
            ) : !image ? (
              <>
                <Upload size={28} className="text-foreground-muted" />
                <span className="text-sm text-foreground-muted">Clicca per caricare immagine copertina</span>
              </>
            ) : (
              <span className="text-xs text-foreground-muted mt-1">Clicca per sostituire l&apos;immagine</span>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => { const f = e.target.files?.[0]; if (f) uploadCoverImage(f) }}
            />
          </label>
          {coverError && (
            <p className="text-xs text-red-500 flex items-center gap-1">
              <span>⚠️</span> {coverError}
            </p>
          )}
          {coverSuccess && (
            <p className="text-xs text-green-600 flex items-center gap-1">
              <span>✓</span> Immagine caricata con successo
            </p>
          )}
          {image && !coverUploading && (
            <div className="flex gap-2">
              <input
                value={imageAlt}
                onChange={e => setImageAlt(e.target.value)}
                placeholder="Alt text immagine (SEO)"
                className="flex-1 px-3 py-2 border border-surface-border rounded-xl text-sm bg-white focus:outline-none focus:border-accent"
              />
              <button onClick={() => { setImage(''); setImageAlt(''); setCoverError('') }} className="px-3 py-2 text-sm text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-colors">
                Rimuovi
              </button>
            </div>
          )}
        </div>

        {/* Sections */}
        <div className="border border-surface-border rounded-2xl p-6 space-y-4">
          <h2 className="font-semibold text-sm uppercase tracking-wide text-foreground-muted">Contenuto articolo</h2>

          {sections.map((sec, idx) => renderSection(sec, idx))}

          {/* Add section */}
          <div className="pt-2">
            <p className="text-xs text-foreground-muted mb-3">Aggiungi sezione:</p>
            <div className="flex flex-wrap gap-2">
              {SECTION_TYPES.map(({ type, label, icon: Icon }) => (
                <button
                  key={type}
                  onClick={() => addSection(type)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs border border-surface-border rounded-xl hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        {/* Publish */}
        <div className="border border-surface-border rounded-2xl p-5 space-y-3">
          <h3 className="font-semibold text-sm">Pubblicazione</h3>

          <div className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium ${published ? 'bg-green-50 text-green-700' : 'bg-surface text-foreground-muted'}`}>
            {published ? <Eye size={15} /> : <EyeOff size={15} />}
            {published ? 'Pubblicato' : 'Bozza'}
          </div>

          {saveError && (
            <p className="text-xs text-red-500">{saveError}</p>
          )}

          <button
            onClick={handleSave}
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl disabled:opacity-60 transition-colors"
          >
            {isPending ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
            Salva
          </button>

          {post?.id && (
            <button
              onClick={handleTogglePublish}
              disabled={isPending}
              className={`w-full flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-xl disabled:opacity-60 transition-colors border ${
                published
                  ? 'border-orange-200 text-orange-600 hover:bg-orange-50'
                  : 'border-green-200 text-green-600 hover:bg-green-50'
              }`}
            >
              {published ? <><EyeOff size={15} /> Metti in bozza</> : <><Globe size={15} /> Pubblica</>}
            </button>
          )}

          {post?.id && published && (
            <a
              href={`/it/blog/${post.slug}`}
              target="_blank"
              rel="noopener"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-accent border border-accent/30 rounded-xl hover:bg-accent/5 transition-colors"
            >
              <Eye size={14} /> Vedi articolo
            </a>
          )}
        </div>

        {/* Danger */}
        {post?.id && (
          <div className="border border-red-100 rounded-2xl p-5">
            <h3 className="font-semibold text-sm text-red-600 mb-3">Zona pericolosa</h3>
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition-colors disabled:opacity-60"
            >
              <Trash2 size={14} /> Elimina articolo
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
