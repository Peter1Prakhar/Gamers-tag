import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, User, Tag } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-zinc-600 dark:text-gray-400 max-w-3xl">
              Discover the latest trends, shopping tips, product reviews, and more from our expert team.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Featured Post
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Featured Blog"
                  alt="Featured blog post"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-sm">FEATURED</div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-gray-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>April 4, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>By Admin</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">10 Essential Products Every Home Needs This Summer</h3>
                <p className="text-zinc-600 dark:text-gray-400 mb-6">
                  Summer is just around the corner, and it&aposs time to prepare your home for the hot season. From cooling
                  solutions to outdoor entertainment, we&aposve compiled a list of must-have products that will make your
                  summer more enjoyable and comfortable.
                </p>
                <div className="mt-auto">
                  <Link href="/blog/essential-summer-products">
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden">
                      <span className="relative z-10">Read Full Article</span>
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                      <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                      <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                      <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Posts Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Latest Posts
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white dark:bg-zinc-900 group relative">
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-600"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-600"></div>

                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Blog ${item}`}
                      alt={`Blog post ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>April ${item}, 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        <span>Shopping</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                      Blog Post Title ${item}
                    </h3>
                    <p className="text-zinc-600 dark:text-gray-400 mb-4 line-clamp-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                    <Link
                      href={`/blog/post-${item}`}
                      className="text-red-600 hover:text-red-500 flex items-center gap-1 text-sm font-medium"
                    >
                      Read More <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="rounded-none border-red-600 text-red-600 hover:bg-red-600/10">
                Load More Posts
              </Button>
            </div>
          </div>

          {/* Blog Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Blog Categories
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Shopping Tips", "Product Reviews", "Trends & Style", "Buying Guides"].map((category) => (
                <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`} key={category}>
                  <div className="bg-white dark:bg-zinc-900 p-4 text-center hover:border-red-600 border border-transparent transition-colors relative">
                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-600"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-600"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-600"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-600"></div>
                    <h3 className="font-bold">{category}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

