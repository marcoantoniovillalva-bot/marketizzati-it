-- YouTube video of each article (same slug in every language). Written by /api/blog/video, which
-- marketizzati-flow calls after publishing a Short; read by the blog (published articles show the YouTube player).
create table if not exists public.blog_videos (
  slug text primary key,
  youtube_id text not null check (youtube_id ~ '^[A-Za-z0-9_-]{11}$'),
  title text,
  updated_at timestamptz not null default now()
);

alter table public.blog_videos enable row level security;

drop policy if exists blog_videos_public_read on public.blog_videos;
create policy blog_videos_public_read on public.blog_videos for select using (true);
-- no insert/update/delete policies: only the server (secret key) writes
