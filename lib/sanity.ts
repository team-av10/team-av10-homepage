import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'mu9ojgd6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: unknown) {
  return builder.image(source)
}

export const postQuery = `
  *[_type == "post"] {
    _id,
    title,
    slug,
    thumbnail,
    minutesRead,
    "excerpt": pt::text(mainArticle[0...200])
  } | order(publishedAt desc)
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    thumbnail,
    additionalImages,
    minutesRead,
    mainArticle
  }
` 