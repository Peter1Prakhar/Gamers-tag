"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GamepadIcon as GameController, Trophy, Users, Zap, Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./component/theme-toggle"
import FeaturedGames from "./component/featuredgame"

export default function GamingLandingPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <HeroSection />
      <MainSection />
    </div>
  )
}
function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Gaming background"
          fill
          className="object-cover opacity-40 dark:opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-100/90 to-zinc-100/70 dark:from-black dark:via-black/90 dark:to-black/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-red-600 px-4 py-1 text-sm font-medium text-white relative">
              <span className="relative z-10">NEW SEASON AVAILABLE</span>
              <span className="absolute top-0 right-0 border-t-8 border-r-8 border-t-transparent border-r-transparent"></span>
              <span className="absolute bottom-0 left-0 border-b-8 border-l-8 border-b-transparent border-l-transparent"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Dominate The <span className="text-red-600">Gaming</span> World
            </h1>
            <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-lg">
              Join the ultimate gaming platform where legends are born. Compete in tournaments, connect with gamers, and
              elevate your gaming experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none px-8 py-6 relative overflow-hidden group">
                <span className="relative z-10">Play Now</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
              </Button>
              <Button
                variant="outline"
                className="text-zinc-900 dark:text-white border-zinc-900 dark:border-white hover:bg-zinc-900/10 dark:hover:bg-white/10 rounded-none px-8 py-6 relative overflow-hidden"
              >
                <span className="relative z-10">Browse Games</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-900 dark:bg-white"></span>
                <span className="absolute inset-y-0 right-0 w-0.5 bg-zinc-900 dark:bg-white"></span>
                <span className="absolute inset-x-0 top-0 h-0.5 bg-zinc-900 dark:bg-white"></span>
                <span className="absolute inset-y-0 left-0 w-0.5 bg-zinc-900 dark:bg-white"></span>
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-red-600"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-600"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Featured game character"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* HUD Elements */}
      <div className="absolute bottom-4 left-4 hidden md:block">
        <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-gray-400">
          <div className="w-2 h-2 bg-green-500"></div>
          <span>ONLINE: 2,543</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 hidden md:block">
        <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-gray-400 border border-zinc-300 dark:border-zinc-700 px-2 py-1">
          <span>SERVER STATUS: ONLINE</span>
          <div className="w-2 h-2 bg-green-500"></div>
        </div>
      </div>
    </section>
  )
}

function MainSection() {
  return (
    <main>
      <FeaturedGames/>
      {/* Features Section */}
      <section className="py-16 bg-zinc-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-12">
            <h2 className="text-3xl font-bold inline-block">
              Why Choose <span className="text-red-600">GAMEZONE</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-red-600"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-6 border-t-2 border-red-600 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600 -mt-0.5 -ml-0.5"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600 -mt-0.5 -mr-0.5"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600 -mb-0.5 -ml-0.5"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600 -mb-0.5 -mr-0.5"></div>
              <Trophy className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Competitive Tournaments</h3>
              <p className="text-zinc-600 dark:text-gray-400">
                Participate in daily tournaments and win exclusive prizes and recognition in the gaming community.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 border-t-2 border-red-600 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600 -mt-0.5 -ml-0.5"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600 -mt-0.5 -mr-0.5"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600 -mb-0.5 -ml-0.5"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600 -mb-0.5 -mr-0.5"></div>
              <Users className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Active Community</h3>
              <p className="text-zinc-600 dark:text-gray-400">
                Connect with millions of gamers worldwide, join clans, and make new friends who share your passion.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 border-t-2 border-red-600 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600 -mt-0.5 -ml-0.5"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600 -mt-0.5 -mr-0.5"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600 -mb-0.5 -ml-0.5"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600 -mb-0.5 -mr-0.5"></div>
              <Zap className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Exclusive Content</h3>
              <p className="text-zinc-600 dark:text-gray-400">
                Get access to exclusive game content, early releases, and special in-game items only available on our
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Level Up Your Gaming Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Join thousands of gamers and start your journey today. The first month is on us!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-black hover:bg-zinc-800 text-white rounded-none px-8 py-6 relative overflow-hidden">
              <span className="relative z-10">Create Account</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
              <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
              <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
              <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-black text-black hover:bg-black/10 rounded-none px-8 py-6 relative overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black"></span>
              <span className="absolute inset-y-0 right-0 w-0.5 bg-black"></span>
              <span className="absolute inset-x-0 top-0 h-0.5 bg-black"></span>
              <span className="absolute inset-y-0 left-0 w-0.5 bg-black"></span>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="relative mb-10">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <div className="absolute -bottom-2 left-0 w-1/4 h-0.5 bg-red-600"></div>
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((event) => (
              <div
                key={event}
                className="flex flex-col md:flex-row gap-6 bg-zinc-50 dark:bg-black p-6 border-l-4 border-red-600 relative"
              >
                <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>
                <div className="md:w-1/4">
                  <div className="relative h-40 w-full">
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=Event ${event}`}
                      alt={`Event ${event}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/4">
                  <h3 className="text-xl font-bold mb-2">Championship Tournament {event}</h3>
                  <p className="text-zinc-600 dark:text-gray-400 mb-4">
                    Join the biggest tournament of the year with players from around the globe competing for the grand
                    prize.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-gray-300">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-600"></span>
                      Date: June 15, 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-600"></span>
                      Prize Pool: $100,000
                    </span>
                  </div>
                </div>
                <div className="md:w-1/4 flex items-center justify-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none w-full md:w-auto relative overflow-hidden">
                    <span className="relative z-10">Register Now</span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                    <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                    <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

