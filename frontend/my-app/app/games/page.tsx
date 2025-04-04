import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Filter, Search } from "lucide-react"

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Browse Games</h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-zinc-600 dark:text-gray-400 max-w-3xl">
              Discover the latest and greatest games across all platforms and genres.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search games..."
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

          {/* Game Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Categories
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Action",
                "Adventure",
                "RPG",
                "Strategy",
                "Sports",
                "Racing",
                "Puzzle",
                "Simulation",
                "FPS",
                "MOBA",
                "Battle Royale",
                "Card Games",
              ].map((category) => (
                <Link href={`/games/category/${category.toLowerCase().replace(" ", "-")}`} key={category}>
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

          {/* Featured Games */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Featured Games
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((game) => (
                <div
                  key={game}
                  className="group bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-red-600 transition-colors relative"
                >
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 z-10">FEATURED</div>
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Game ${game}`}
                      alt={`Game ${game}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">Featured Game Title {game}</h3>
                    <p className="text-zinc-600 dark:text-gray-400 text-sm mb-3">Action, Adventure</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-medium">$59.99</span>
                      <Link href={`/games/game-${game}`}>
                        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none text-sm px-3 py-1 h-auto relative overflow-hidden">
                          <span className="relative z-10">View Game</span>
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

          {/* New Releases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              New Releases
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[5, 6, 7, 8].map((game) => (
                <div
                  key={game}
                  className="group bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-red-600 transition-colors relative"
                >
                  <div className="absolute top-0 right-0 bg-green-600 text-white text-xs px-2 py-1 z-10">NEW</div>
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Game ${game}`}
                      alt={`Game ${game}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">New Game Title {game}</h3>
                    <p className="text-zinc-600 dark:text-gray-400 text-sm mb-3">RPG, Strategy</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-medium">$49.99</span>
                      <Link href={`/games/game-${game}`}>
                        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none text-sm px-3 py-1 h-auto relative overflow-hidden">
                          <span className="relative z-10">View Game</span>
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

          {/* All Games */}
          <div>
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              All Games
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[9, 10, 11, 12, 13, 14, 15, 16].map((game) => (
                <div
                  key={game}
                  className="group bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-red-600 transition-colors relative"
                >
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Game ${game}`}
                      alt={`Game ${game}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">Game Title {game}</h3>
                    <p className="text-zinc-600 dark:text-gray-400 text-sm mb-3">Simulation, Sports</p>
                    <div className="flex justify-between items-center">
                      <span className="text-red-600 font-medium">$39.99</span>
                      <Link href={`/games/game-${game}`}>
                        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none text-sm px-3 py-1 h-auto relative overflow-hidden">
                          <span className="relative z-10">View Game</span>
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
            <div className="mt-8 text-center">
              <Button variant="outline" className="rounded-none border-red-600 text-red-600 hover:bg-red-600/10">
                Load More Games
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

