import type { BlogPost } from '../types'

/**
 * Article cover, art-directed: 4:5 on phones when the post has a tall version, 16:10 from 640px up.
 * Plain <picture> because next/image cannot switch files per breakpoint.
 */
export function CoverImage({ post, priority = false, className = '' }: { post: Pick<BlogPost, 'image' | 'imageTall' | 'imageAlt'>; priority?: boolean; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-brand-cream ${post.imageTall ? 'aspect-[4/5] sm:aspect-[16/10]' : 'aspect-[16/10]'} ${className}`}>
      <picture>
        {post.imageTall && <source media="(max-width: 639px)" srcSet={post.imageTall} />}
        <img
          src={post.image}
          alt={post.imageAlt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </picture>
    </div>
  )
}
