import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Latest News</h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-zinc-600 dark:text-gray-400 max-w-3xl">
              Stay up to date with the latest gaming news, updates, and announcements from the GAMEZONE community.
            </p>
          </div>

          {/* Featured News */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Featured Story
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>
              
              <div className="relative h-[300px]">
                <Image 
                  src="/placeholder.svg?height=600&width=800&text=Featured News" 
                  alt="Featured news" 
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-sm">BREAKING</div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-sm text-zinc-500 dark:text-gray-400 mb-2">April 4, 2025</div>
                <h3 className="text-2xl font-bold mb-4">Major Update Coming to Popular Battle Royale Game</h3>
                <p className="text-zinc-600 dark:text-gray-400 mb-6">
                  The developers behind the hit battle royale game have announced a massive update that will introduce new weapons, maps, and gameplay mechanics. Players can expect the update to drop next month with a special in-game event to celebrate the launch.
                </p>
                <div className="mt-auto">
                  <Link href="/news/major-update-battle-royale">
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden">
                      <span className="relative z-10">Read Full Story</span>
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

          {/* Latest News Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Latest News
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
                      src={`/placeholder.svg?height=300&width=500&text=News ${item}`} 
                      alt={`News ${item}`} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-zinc-500 dark:text-gray-400 mb-2">April ${item}, 2025</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">News Title ${item}</h3>
                    <p className="text-zinc-600 dark:text-gray-400 mb-4 line-clamp-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link href={`/news/article-${item}`} className="text-red-600 hover:text-red-500 flex items-center gap-1 text-sm font-medium">
                      Read More <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="rounded-none border-red-600 text-red-600 hover:bg-red-600/10">
                Load More News
              </Button>
            </div>
          </div>

          {/* News Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              News Categories
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Game Updates', 'Esports', 'Industry News', 'Reviews'].map((category) => (
                <Link href={`/news/category/${category.toLowerCase().replace(' ', '-')}`} key={category}>
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
