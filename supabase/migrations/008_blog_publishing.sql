-- Articles published without a deploy (scripts/publish-resource.mjs -> /api/blog/publish).
-- Applied on 2026-11-20 through the Supabase Management API.
alter table public.blog_posts
  add column if not exists image_tall text,
  add column if not exists video_preview text,
  add column if not exists tiktok text,
  add column if not exists free_guide boolean not null default false;

-- one article per slug and language (the publish endpoint upserts on it)
create unique index if not exists blog_posts_locale_slug_key on public.blog_posts (locale, slug);

-- Public bucket for covers, slides, PDFs and 5-second previews (created via the Storage API):
--   id 'blog-media', public, 25 MB per file, image/webp, image/png, image/jpeg, application/pdf, video/mp4.
-- Writes only with the secret key (server side); RLS on blog_posts is unchanged:
--   blog_public_read (published = true) and blog_admin_all (profiles.role = 'admin').
