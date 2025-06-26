import { client, postBySlugQuery, urlFor } from '@/lib/sanity'
import { PortableText } from '@/components/ui/portable-text'
import { Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  thumbnail: any
  additionalImages: any[]
  minutesRead: number
  mainArticle: any
}

interface Props {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post: Post = await client.fetch(postBySlugQuery, { slug: params.slug })

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 mt-28">
      <div className="container mx-auto px-4 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-300 mb-8">
              <Clock className="w-5 h-5 mr-2" />
              <span>{post.minutesRead} min read</span>
            </div>

            {post.thumbnail && (
              <div className="relative h-96 rounded-xl overflow-hidden mb-8">
                <img
                  src={urlFor(post.thumbnail).url()}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <PortableText value={post.mainArticle} />
            </div>
          </div>

          {/* Additional Images */}
          {post.additionalImages && post.additionalImages.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.additionalImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={urlFor(image).url()}
                      alt={`${post.title} - Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  )
} 