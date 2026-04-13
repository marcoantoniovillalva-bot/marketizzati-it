import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getPostByIdAdmin } from '@/features/blog/actions/blog'
import { PostEditor } from '@/features/blog/admin/PostEditor'
import NextLink from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (profile?.role !== 'admin') redirect('/dashboard')

  const post = await getPostByIdAdmin(id)
  if (!post) notFound()

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <NextLink href={`/${locale}/admin/blog`} className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground mb-4 transition-colors">
          <ArrowLeft size={15} /> Tutti gli articoli
        </NextLink>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Blog CMS</p>
        <h1 className="mt-2 font-heading text-display-sm">Modifica articolo</h1>
        <p className="mt-1 text-sm text-foreground-muted font-mono">/blog/{post.slug}</p>
      </div>
      <PostEditor post={post} locale={locale} />
    </div>
  )
}
