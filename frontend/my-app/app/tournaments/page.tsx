import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, Users, DollarSign } from "lucide-react"

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Tournaments</h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-zinc-600 dark:text-gray-400 max-w-3xl">
              Compete against the best players from around the world in our official tournaments and win exclusive
              prizes.
            </p>
          </div>

          {/* Featured Tournament */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Featured Tournament
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Championship Tournament"
                    alt="Championship Tournament"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-sm">FEATURED</div>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">World Championship 2025</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-gray-400">
                      <Calendar className="h-5 w-5 text-red-600" />
                      <span>June 15-20, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-gray-400">
                      <Users className="h-5 w-5 text-red-600" />
                      <span>128 Teams</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-gray-400">
                      <DollarSign className="h-5 w-5 text-red-600" />
                      <span>$1,000,000 Prize Pool</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-gray-400">
                      <Trophy className="h-5 w-5 text-red-600" />
                      <span>Grand Finals in Las Vegas</span>
                    </div>
                  </div>
                  <p className="text-zinc-600 dark:text-gray-400 mb-6">
                    The biggest tournament of the year is back! Compete against the best teams from around the world for
                    a chance to win the prestigious World Championship title and a share of the $1,000,000 prize pool.
                  </p>
                  <div className="mt-auto">
                    <Link href="/tournaments/world-championship-2025">
                      <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden">
                        <span className="relative z-10">Register Now</span>
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
          </div>

          {/* Upcoming Tournaments */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Upcoming Tournaments
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((tournament) => (
                <div
                  key={tournament}
                  className="flex flex-col md:flex-row gap-6 bg-white dark:bg-zinc-900 p-6 border-l-4 border-red-600 relative"
                >
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>
                  <div className="md:w-1/4">
                    <div className="relative h-40 w-full">
                      <Image
                        src={`/placeholder.svg?height=200&width=300&text=Tournament ${tournament}`}
                        alt={`Tournament ${tournament}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/4">
                    <h3 className="text-xl font-bold mb-2">Regional Championship {tournament}</h3>
                    <p className="text-zinc-600 dark:text-gray-400 mb-4">
                      Compete against the best players in your region for a chance to qualify for the World
                      Championship.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-gray-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-red-600" />
                        May {10 + tournament}, 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-red-600" />
                        64 Teams
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-red-600" />
                        $50,000 Prize
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/4 flex items-center justify-center">
                    <Link href={`/tournaments/regional-championship-${tournament}`}>
                      <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none w-full md:w-auto relative overflow-hidden">
                        <span className="relative z-10">Register Now</span>
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                        <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                        <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                        <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tournament Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Tournament Categories
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Battle Royale", "FPS", "MOBA", "Racing"].map((category) => (
                <Link href={`/tournaments/category/${category.toLowerCase().replace(" ", "-")}`} key={category}>
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

