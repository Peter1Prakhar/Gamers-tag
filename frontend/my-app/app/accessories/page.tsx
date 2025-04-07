import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Filter, Search, SlidersHorizontal, Grid, List, Star } from "lucide-react"

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Gaming Accessories</h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-zinc-600 dark:text-gray-400 max-w-3xl">
              Enhance your gaming experience with our wide selection of controllers, headsets, charging stations, and
              more for all gaming platforms.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search accessories..."
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

          {/* Accessory Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Accessory Types
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Controllers",
                "Headsets",
                "Storage",
                "Charging",
                "Cables",
                "VR Accessories",
                "Gaming Chairs",
                "Keyboards",
                "Mice",
                "Monitors",
                "Streaming",
                "Protective Cases",
              ].map((category) => (
                <Link href={`/accessories/${category.toLowerCase().replace(/\s+/g, "-")}`} key={category}>
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
                <option>All Platforms</option>
                <option>PlayStation</option>
                <option>Xbox</option>
                <option>Nintendo</option>
                <option>PC</option>
              </select>
              <select className="bg-zinc-100 dark:bg-zinc-800 border-none p-2 text-sm">
                <option>Price: All</option>
                <option>Under $25</option>
                <option>$25 - $50</option>
                <option>$50 - $100</option>
                <option>$100+</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">Sort By:</span>
                <select className="bg-zinc-100 dark:bg-zinc-800 border-none p-2 text-sm">
                  <option>New Arrivals</option>
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

          {/* Accessories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "DualSense Controller",
                type: "Controller",
                platform: "PlayStation 5",
                price: 69.99,
                rating: 4.8,
                isNew: false,
              },
              {
                title: "Xbox Elite Controller",
                type: "Controller",
                platform: "Xbox Series X/S",
                price: 179.99,
                rating: 4.9,
                isNew: false,
              },
              {
                title: "Pro Gaming Headset",
                type: "Headset",
                platform: "Multi-Platform",
                price: 99.99,
                rating: 4.7,
                isNew: true,
              },
              {
                title: "2TB External SSD",
                type: "Storage",
                platform: "Multi-Platform",
                price: 229.99,
                rating: 4.8,
                isNew: false,
              },
              {
                title: "Dual Controller Charging Dock",
                type: "Charging",
                platform: "PlayStation 5",
                price: 29.99,
                rating: 4.6,
                isNew: false,
              },
              {
                title: "Gaming Keyboard RGB",
                type: "Keyboard",
                platform: "PC",
                price: 149.99,
                rating: 4.7,
                isNew: false,
              },
              { title: "Gaming Mouse", type: "Mouse", platform: "PC", price: 79.99, rating: 4.8, isNew: true },
              { title: "VR Headset", type: "VR", platform: "PlayStation 5", price: 349.99, rating: 4.9, isNew: true },
              {
                title: "Gaming Chair",
                type: "Furniture",
                platform: "Universal",
                price: 299.99,
                rating: 4.5,
                isNew: false,
              },
              {
                title: "Switch Pro Controller",
                type: "Controller",
                platform: "Nintendo Switch",
                price: 69.99,
                rating: 4.7,
                isNew: false,
              },
              {
                title: 'Gaming Monitor 27"',
                type: "Monitor",
                platform: "Multi-Platform",
                price: 349.99,
                rating: 4.8,
                isNew: false,
              },
              {
                title: "Streaming Microphone",
                type: "Streaming",
                platform: "Multi-Platform",
                price: 129.99,
                rating: 4.6,
                isNew: false,
              },
            ].map((accessory, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-red-600 transition-colors relative"
              >
                {accessory.isNew && (
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
                          className={`h-4 w-4 ${i < Math.floor(accessory.rating) ? "text-yellow-500 fill-yellow-500" : "text-zinc-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-500">{accessory.rating}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{accessory.title}</h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-sm mb-1">{accessory.type}</p>
                  <p className="text-zinc-500 dark:text-gray-500 text-xs mb-3">{accessory.platform}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-medium">${accessory.price}</span>
                    <Link href={`/accessories/${accessory.title.toLowerCase().replace(/\s+/g, "-")}`}>
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

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <Button variant="outline" className="rounded-none border-zinc-300 dark:border-zinc-700 w-10 h-10 p-0">
              &lt;
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none w-10 h-10 p-0">1</Button>
            <Button variant="outline" className="rounded-none border-zinc-300 dark:border-zinc-700 w-10 h-10 p-0">
              2
            </Button>
            <Button variant="outline" className="rounded-none border-zinc-300 dark:border-zinc-700 w-10 h-10 p-0">
              3
            </Button>
            <Button variant="outline" className="rounded-none border-zinc-300 dark:border-zinc-700 w-10 h-10 p-0">
              4
            </Button>
            <Button variant="outline" className="rounded-none border-zinc-300 dark:border-zinc-700 w-10 h-10 p-0">
              &gt;
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

