import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Award } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Community</h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-zinc-600 dark:text-gray-400 max-w-3xl">
              Connect with millions of gamers worldwide, join clans, and make new friends who share your passion.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white dark:bg-zinc-900 p-6 text-center relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-600"></div>
              <div className="text-3xl font-bold text-red-600 mb-2">2.5M+</div>
              <div className="text-zinc-600 dark:text-gray-400">Active Players</div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 text-center relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-600"></div>
              <div className="text-3xl font-bold text-red-600 mb-2">50K+</div>
              <div className="text-zinc-600 dark:text-gray-400">Clans</div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 text-center relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-600"></div>
              <div className="text-3xl font-bold text-red-600 mb-2">1.2M+</div>
              <div className="text-zinc-600 dark:text-gray-400">Forum Posts</div>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-6 text-center relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-red-600"></div>
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-zinc-600 dark:text-gray-400">Daily Events</div>
            </div>
          </div>

          {/* Featured Clans */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Featured Clans
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((clan) => (
                <div key={clan} className="bg-white dark:bg-zinc-900 p-6 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=Clan ${clan}`}
                        alt={`Clan ${clan} logo`}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Elite Squad {clan}</h3>
                      <div className="flex items-center gap-2 text-zinc-600 dark:text-gray-400 text-sm">
                        <Users className="h-4 w-4 text-red-600" />
                        <span>250 Members</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-gray-400 mb-4">
                    One of the top competitive clans in the region with multiple tournament wins and a strong community
                    focus.
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-5 w-5 text-red-600" />
                    <span className="text-sm">3x Regional Champions</span>
                  </div>

                  <Link href={`/community/clan-${clan}`}>
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none w-full relative overflow-hidden">
                      <span className="relative z-10">View Clan</span>
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                      <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                      <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                      <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/community/clans">
                <Button variant="outline" className="rounded-none border-red-600 text-red-600 hover:bg-red-600/10">
                  View All Clans
                </Button>
              </Link>
            </div>
          </div>

          {/* Forums */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Popular Forum Topics
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="bg-white dark:bg-zinc-900 p-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((topic) => (
                  <Link href={`/community/forums/topic-${topic}`} key={topic}>
                    <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <div className="flex items-start gap-3">
                        <MessageSquare className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Tips for improving your aim in FPS games</h3>
                          <div className="text-sm text-zinc-500 dark:text-gray-400">
                            Started by User{topic} • 2 days ago
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-sm">
                        <div className="font-medium">{20 + topic * 5}</div>
                        <div className="text-zinc-500 dark:text-gray-400">Replies</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link href="/community/forums">
                  <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden">
                    <span className="relative z-10">Visit Forums</span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                    <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                    <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Community Events */}
          <div>
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Upcoming Community Events
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((event) => (
                <div key={event} className="bg-white dark:bg-zinc-900 p-6 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

                  <h3 className="text-xl font-bold mb-2">Community Game Night {event}</h3>
                  <p className="text-zinc-600 dark:text-gray-400 mb-4">
                    Join us for a fun night of gaming with the community. All skill levels welcome!
                  </p>
                  <div className="text-sm text-zinc-500 dark:text-gray-400 mb-4">
                    April {10 + event}, 2025 • 8:00 PM EST
                  </div>
                  <Link href={`/community/events/game-night-${event}`}>
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none w-full relative overflow-hidden">
                      <span className="relative z-10">Join Event</span>
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                      <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                      <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                      <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/community/events">
                <Button variant="outline" className="rounded-none border-red-600 text-red-600 hover:bg-red-600/10">
                  View All Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

