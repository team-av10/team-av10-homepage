import { client, postQuery, urlFor } from '@/lib/sanity'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'

interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  thumbnail: any
  minutesRead: number
  excerpt: string
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postQuery)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-400 to-slate-900 mt-28">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover insights, tutorials, and stories from our team
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-white/20"
              >
                {post.thumbnail && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={urlFor(post.thumbnail).url()}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-300 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.minutesRead} min read</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}...
                  </p>
                  
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="inline-flex items-center text-purple-800 hover:text-purple-300 transition-colors"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 