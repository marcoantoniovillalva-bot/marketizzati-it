import { redirect } from 'next/navigation'
import NextLink from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getAllPostsAdmin } from '@/features/blog/actions/blog'
import { Plus, Eye, EyeOff, Edit3, Clock } from 'lucide-react'

export default async function AdminBlogPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (profile?.role !== 'admin') redirect('/dashboard')

  let posts: Awaited<ReturnType<typeof getAllPostsAdmin>> = []
  try { posts = await getAllPostsAdmin() } catch { /* table not yet created */ }

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-surface-border bg-white p-8 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Blog CMS</p>
          <h1 className="mt-2 font-heading text-display-sm">Gestione Articoli</h1>
          <p className="mt-2 text-sm text-foreground-secondary">{posts.length} articolo{posts.length !== 1 ? 'i' : ''} totale</p>
        </div>
        <NextLink
          href="/it/admin/blog/new"
          className="flex items-center gap-2 px-5 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors"
        >
          <Plus size={18} /> Nuovo articolo
        </NextLink>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-surface-border bg-white p-12 text-center">
          {posts.length === 0 && (
            <div className="space-y-3">
              <p className="text-foreground-secondary">Nessun articolo ancora.</p>
              <p className="text-sm text-foreground-muted">
                Assicurati di aver creato la tabella <code className="bg-surface px-1 rounded">blog_posts</code> in Supabase.
              </p>
              <a
                href="https://supabase.com/dashboard/project/luhfsvgbpnaxdeydxtrn/sql/new"
                target="_blank"
                rel="noopener"
                className="inline-block mt-2 text-sm text-accent underline"
              >
                Apri SQL Editor →
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map(post => (
            <div key={post.id} className="rounded-2xl border border-surface-border bg-white p-5 flex items-center gap-4">
              {post.image && (
                <img src={post.image} alt={post.image_alt} className="w-20 h-14 object-cover rounded-xl shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${post.published ? 'bg-green-100 text-green-700' : 'bg-surface text-foreground-muted'}`}>
                    {post.published ? 'Pubblicato' : 'Bozza'}
                  </span>
                  <span className="text-xs text-foreground-muted">{post.category}</span>
                </div>
                <p className="font-semibold truncate">{post.title}</p>
                <p className="text-xs text-foreground-muted flex items-center gap-1 mt-1">
                  <Clock size={11} />
                  {new Date(post.date).toLocaleDateString('it-IT')} · {post.read_time} min
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {post.published && (
                  <a
                    href={`/it/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener"
                    className="p-2 text-foreground-muted hover:text-accent transition-colors"
                  >
                    <Eye size={16} />
                  </a>
                )}
                <NextLink
                  href={`/it/admin/blog/${post.id}`}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium border border-surface-border rounded-xl hover:border-accent hover:text-accent transition-colors"
                >
                  <Edit3 size={14} /> Modifica
                </NextLink>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
