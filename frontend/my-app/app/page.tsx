import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Truck, CreditCard, RotateCcw, ShieldCheck, ChevronRight, Tag } from "lucide-react"
import GlitchText from "@/components/GlitchText"

export default function HomePage() {
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
          src="/image1.jpg"
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
              <span className="relative z-10">NEW RELEASES • PRE-ORDER NOW</span>
              <span className="absolute top-0 right-0 border-t-8 border-r-8 border-t-transparent border-r-transparent"></span>
              <span className="absolute bottom-0 left-0 border-b-8 border-l-8 border-b-transparent border-l-transparent"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Level Up Your <span className="text-red-600">
              <GlitchText
                    speed={1}
                    enableShadows={true}
                    enableOnHover={true}
                    className="text-2xl md:text-4xl"
                    >
                    Gaming
                    </GlitchText>  
              </span> Experience
            </h1>
            <p className="text-lg text-zinc-700 dark:text-gray-300 max-w-lg">
              Shop the latest games, consoles, and accessories. From AAA titles to limited edition collectibles, find
              everything you need to enhance your gaming setup.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/games">
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none px-8 py-6 relative overflow-hidden group">
                  <span className="relative z-10">Shop Games</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                  <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                  <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                </Button>
              </Link>
              <Link href="/consoles">
                <Button
                  variant="outline"
                  className="text-zinc-900 dark:text-white border-zinc-900 dark:border-white hover:bg-zinc-900/10 dark:hover:bg-white/10 rounded-none px-8 py-6 relative overflow-hidden"
                >
                  <span className="relative z-10">Shop Consoles</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-900 dark:bg-white"></span>
                  <span className="absolute inset-y-0 right-0 w-0.5 bg-zinc-900 dark:bg-white"></span>
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-zinc-900 dark:bg-white"></span>
                  <span className="absolute inset-y-0 left-0 w-0.5 bg-zinc-900 dark:bg-white"></span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-red-600"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-red-600"></div>
          </div>
        </div>
      </div>

      {/* HUD Elements */}
      <div className="absolute bottom-4 left-4 hidden md:block">
        <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-gray-400">
          <div className="w-2 h-2 bg-green-500"></div>
          <span>CUSTOMER SUPPORT: ONLINE</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 hidden md:block">
        <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-gray-400 border border-zinc-300 dark:border-zinc-700 px-2 py-1">
          <span>FREE SHIPPING ON ORDERS OVER $50</span>
          <Tag className="h-3 w-3 text-red-600" />
        </div>
      </div>
    </section>
  )
}

function MainSection() {
  return (
    <>
      {/* Featured Products Section */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div className="relative">
              <h2 className="text-3xl font-bold">New Releases</h2>
              <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-red-600"></div>
            </div>
            <Link href="/games">
              <Button variant="link" className="text-red-600 hover:text-red-500 flex items-center gap-1 rounded-none">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cyberpunk 2078", category: "Action RPG", price: 59.99 },
              { title: "Galactic Warfare", category: "FPS", price: 69.99 },
              { title: "Legend of Heroes", category: "Adventure", price: 49.99 },
              { title: "Racing Evolution", category: "Racing", price: 54.99 },
            ].map((game, index) => (
              <div
                key={index}
                className="group bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-red-600 transition-colors relative"
              >
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 z-10">NEW</div>
                <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={`/image2.jpg`}  
                    alt={`${game.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{game.title}</h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-sm mb-3">{game.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-medium">${game.price}</span>
                    <Link href={`/games/game-${index + 1}`}>
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
      </section>

      {/* Features Section */}
      <section className="py-16 bg-zinc-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="relative text-center mb-12">
            <h2 className="text-3xl font-bold inline-block">
              Why Choose <span className="text-red-600">GAMESTORE</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-red-600"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-6 border-t-2 border-red-600 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600 -mt-0.5 -ml-0.5"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600 -mt-0.5 -mr-0.5"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600 -mb-0.5 -ml-0.5"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600 -mb-0.5 -mr-0.5"></div>
              <Truck className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
              <p className="text-zinc-600 dark:text-gray-400">
                Get your gaming gear delivered quickly with our expedited shipping options and global delivery network.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 border-t-2 border-red-600 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600 -mt-0.5 -ml-0.5"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600 -mt-0.5 -mr-0.5"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600 -mb-0.5 -ml-0.5"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600 -mb-0.5 -mr-0.5"></div>
              <CreditCard className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
              <p className="text-zinc-600 dark:text-gray-400">
                Shop with confidence using our secure payment gateway with multiple payment options.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 border-t-2 border-red-600 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600 -mt-0.5 -ml-0.5"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600 -mt-0.5 -mr-0.5"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600 -mb-0.5 -ml-0.5"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600 -mb-0.5 -mr-0.5"></div>
              <RotateCcw className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
              <p className="text-zinc-600 dark:text-gray-400">
                Not satisfied? Return your products within 30 days for a full refund with our hassle-free return policy.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 border-t-2 border-red-600 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600 -mt-0.5 -ml-0.5"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600 -mt-0.5 -mr-0.5"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600 -mb-0.5 -ml-0.5"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600 -mb-0.5 -mr-0.5"></div>
              <ShieldCheck className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Authentic Products</h3>
              <p className="text-zinc-600 dark:text-gray-400">
                Every game and accessory is 100% authentic with manufacturer warranty and official support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Level Up Your Gaming Setup?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Join thousands of gamers and enjoy exclusive deals, early access to new releases, and members-only
            discounts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/auth/sign-up">
              <Button className="bg-black hover:bg-zinc-800 text-white rounded-none px-8 py-6 relative overflow-hidden">
                <span className="relative z-10">Create Account</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
              </Button>
            </Link>
            <Link href="/support">
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
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="relative mb-10">
            <h2 className="text-3xl font-bold">Shop By Category</h2>
            <div className="absolute -bottom-2 left-0 w-1/4 h-0.5 bg-red-600"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "PlayStation", image: "PlayStation" },
              { name: "Xbox", image: "Xbox" },
              { name: "Nintendo", image: "Nintendo" },
              { name: "PC Gaming", image: "PC Gaming" },
            ].map((category, index) => (
              <Link href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                <div className="group relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 aspect-square">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600 z-10"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600 z-10"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600 z-10"></div>

                  <Image
                    src={`/image4.jpeg`}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

