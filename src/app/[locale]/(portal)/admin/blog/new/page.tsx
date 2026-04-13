import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { PostEditor } from '@/features/blog/admin/PostEditor'
import NextLink from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function NewBlogPostPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (profile?.role !== 'admin') redirect('/dashboard')

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-surface-border bg-white p-8">
        <NextLink href={`/${locale}/admin/blog`} className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground mb-4 transition-colors">
          <ArrowLeft size={15} /> Tutti gli articoli
        </NextLink>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Blog CMS</p>
        <h1 className="mt-2 font-heading text-display-sm">Nuovo articolo</h1>
      </div>
      <PostEditor locale={locale} />
    </div>
  )
}
