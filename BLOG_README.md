# Blog Functionality

This project now includes a complete blog system integrated with Sanity CMS.

## Features

- **Blog Listing Page** (`/blog`) - Displays all blog posts in a responsive grid
- **Individual Blog Post Pages** (`/blog/[slug]`) - Shows full blog post content
- **Responsive Design** - Works on all device sizes
- **Loading States** - Skeleton loading for better UX
- **Error Handling** - 404 pages for missing posts
- **Rich Text Rendering** - Supports all Sanity block content types

## Sanity Schema

The blog uses the following Sanity schema structure:

```typescript
// post.ts
{
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
    { name: 'additionalImages', title: 'Additional Images', type: 'array', of: [{type: 'image'}] },
    { name: 'minutesRead', title: 'Minutes Read', type: 'number', options: { list: [1, 2, 7] } },
    { name: 'mainArticle', title: 'Main Article', type: 'blockContent' }
  ]
}
```

## Files Created

- `lib/sanity.ts` - Sanity client configuration and queries
- `components/ui/portable-text.tsx` - PortableText component for rendering Sanity content
- `app/blog/page.tsx` - Blog listing page
- `app/blog/[slug]/page.tsx` - Individual blog post page
- `app/blog/loading.tsx` - Loading component for blog listing
- `app/blog/[slug]/loading.tsx` - Loading component for individual posts
- `app/blog/not-found.tsx` - 404 page for missing blog posts

## Dependencies Added

- `@sanity/client` - Sanity client for data fetching
- `@sanity/image-url` - Image URL builder for Sanity images
- `next-sanity` - Next.js integration for Sanity
- `@portabletext/react` - React component for rendering Portable Text
- `@tailwindcss/line-clamp` - Tailwind plugin for text truncation

## Usage

1. **Blog Listing**: Navigate to `/blog` to see all blog posts
2. **Individual Posts**: Click on any blog post to view the full article
3. **Navigation**: Blog link is available in the main navigation

## Styling

The blog uses the same design system as the rest of the application:
- Dark theme with purple accents
- Glassmorphism effects
- Responsive grid layout
- Hover animations
- Custom prose styles for rich text content

## Sanity Project

- **Project ID**: `mu9ojgd6`
- **Dataset**: `production`
- **API Version**: `2024-01-01`

Make sure your Sanity project has the correct schema and content for the blog to work properly. 