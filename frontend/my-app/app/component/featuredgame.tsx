"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pointer } from "@/components/magicui/pointer";
import { ChevronRight } from "lucide-react";

export default function FeaturedGames() {
  return (
    <section className="py-16 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="relative">
            <h2 className="text-3xl font-bold">Featured Games</h2>
            <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-red-600"></div>
          </div>
          <Button variant="link" className="text-red-600 hover:text-red-500 flex items-center gap-1 rounded-none">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((game) => (
            <Card
              key={game}
              className="group overflow-hidden border-none bg-gradient-to-br from-zinc-50 to-zinc-200 shadow-lg transition-all hover:shadow-xl dark:from-black dark:to-zinc-900 relative"
            >
              {/* MagicUI Pointer (Inside the Card) */}
              <Pointer className="fill-red-500 absolute inset-0 group-hover:pointer-events-none" />

              {/* Game Details */}
              <CardHeader className="relative pb-2">
                <CardTitle className="text-xl font-bold">Game Title {game}</CardTitle>
                <CardDescription className="text-sm text-zinc-600 dark:text-gray-400">
                  Action, Adventure
                </CardDescription>
              </CardHeader>

              {/* Image & Button */}
              <CardContent className="relative flex flex-col h-64 items-center justify-between p-6">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Game ${game}`}
                    alt={`Game ${game}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Add to Cart Button */}
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none text-sm px-3 py-1 h-auto relative overflow-hidden z-10 pointer-events-auto">
                  <span className="relative z-10">Add to Cart</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
