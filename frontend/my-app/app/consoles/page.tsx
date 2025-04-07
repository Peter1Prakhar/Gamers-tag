import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Filter, Search, SlidersHorizontal, Grid, List, Star } from "lucide-react"

export default function ConsolesPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Gaming Consoles</h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-zinc-600 dark:text-gray-400 max-w-3xl">
              Shop the latest gaming consoles from PlayStation, Xbox, Nintendo and more. Find bundles, limited editions,
              and accessories to enhance your gaming experience.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search consoles..."
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-red-600"
              />
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <span className="relative z-10">Filter</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
              <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
              <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
              <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
            </Button>
          </div>

          {/* Console Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Console Brands
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["PlayStation", "Xbox", "Nintendo", "PC Gaming"].map((category) => (
                <Link href={`/consoles/${category.toLowerCase().replace(/\s+/g, "-")}`} key={category}>
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

          {/* Product Filters and Sort */}
          <div className="bg-white dark:bg-zinc-900 p-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-red-600" />
              <span className="font-medium">Filter By:</span>
              <select className="bg-zinc-100 dark:bg-zinc-800 border-none p-2 text-sm">
                <option>All Consoles</option>
                <option>Standard Editions</option>
                <option>Limited Editions</option>
                <option>Bundles</option>
              </select>
              <select className="bg-zinc-100 dark:bg-zinc-800 border-none p-2 text-sm">
                <option>Price: All</option>
                <option>Under $300</option>
                <option>$300 - $500</option>
                <option>$500+</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">Sort By:</span>
                <select className="bg-zinc-100 dark:bg-zinc-800 border-none p-2 text-sm">
                  <option>New Releases</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Selling</option>
                  <option>Top Rated</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 bg-zinc-100 dark:bg-zinc-800">
                  <Grid className="h-5 w-5 text-red-600" />
                </button>
                <button className="p-1 bg-zinc-100 dark:bg-zinc-800">
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Consoles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "PlayStation 5", type: "Standard Edition", price: 499.99, rating: 4.9, isNew: false },
              { title: "PlayStation 5 Digital", type: "Digital Edition", price: 399.99, rating: 4.8, isNew: false },
              { title: "Xbox Series X", type: "Standard Edition", price: 499.99, rating: 4.8, isNew: false },
              { title: "Xbox Series S", type: "Digital Edition", price: 299.99, rating: 4.7, isNew: false },
              { title: "Nintendo Switch OLED", type: "OLED Model", price: 349.99, rating: 4.9, isNew: false },
              { title: "Nintendo Switch", type: "Standard Edition", price: 299.99, rating: 4.7, isNew: false },
              { title: "Steam Deck", type: "512GB Model", price: 649.99, rating: 4.6, isNew: true },
              { title: "PlayStation 5 Pro", type: "Limited Edition", price: 599.99, rating: 5.0, isNew: true },
              {
                title: "Xbox Series X Halo Edition",
                type: "Limited Edition",
                price: 549.99,
                rating: 4.9,
                isNew: false,
              },
            ].map((console, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-red-600 transition-colors relative"
              >
                {console.isNew && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 z-10">NEW</div>
                )}
                <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>
                <div className="relative h-48 w-full overflow-hidden">
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(console.rating) ? "text-yellow-500 fill-yellow-500" : "text-zinc-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-500">{console.rating}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{console.title}</h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-sm mb-3">{console.type}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-medium">${console.price}</span>
                    <Link href={`/consoles/${console.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none text-sm px-3 py-1 h-auto relative overflow-hidden">
                        <span className="relative z-10">Add to Cart</span>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                        <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                        <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                        <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

