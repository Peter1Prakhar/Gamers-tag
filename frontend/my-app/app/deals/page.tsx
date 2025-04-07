import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tag, Clock, Percent } from "lucide-react"

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Deals & Discounts</h1>
            <div className="h-1 w-24 bg-red-600 mb-8"></div>
            <p className="text-zinc-600 dark:text-gray-400 max-w-3xl">
              Discover amazing deals and discounts on our premium products. Limited time offers you don&apost want to miss!
            </p>
          </div>

          {/* Flash Sale Banner */}
          <div className="bg-red-600 text-white p-8 mb-12 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">FLASH SALE</h2>
                <p className="text-xl mb-6">Up to 70% off on selected items. Hurry, limited time only!</p>
                <div className="flex gap-4 mb-6">
                  <div className="bg-white text-red-600 p-3 w-16 text-center">
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-xs">HOURS</div>
                  </div>
                  <div className="bg-white text-red-600 p-3 w-16 text-center">
                    <div className="text-2xl font-bold">36</div>
                    <div className="text-xs">MINS</div>
                  </div>
                  <div className="bg-white text-red-600 p-3 w-16 text-center">
                    <div className="text-2xl font-bold">59</div>
                    <div className="text-xs">SECS</div>
                  </div>
                </div>
                <Link href="/flash-sale">
                  <Button className="bg-white text-red-600 hover:bg-zinc-100 rounded-none relative overflow-hidden">
                    <span className="relative z-10">Shop Flash Sale</span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600"></span>
                    <span className="absolute inset-y-0 right-0 w-0.5 bg-red-600"></span>
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-red-600"></span>
                    <span className="absolute inset-y-0 left-0 w-0.5 bg-red-600"></span>
                  </Button>
                </Link>
              </div>
              <div className="relative h-[200px] md:h-[300px]">
                <Image
                  src="/image2.jpg"
                  alt="Flash Sale"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Deal Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Deal Categories
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Clearance", "Buy One Get One", "End of Season", "Bundle Deals"].map((category) => (
                <Link href={`/deals/${category.toLowerCase().replace(/\s+/g, "-")}`} key={category}>
                  <div className="bg-white dark:bg-zinc-900 p-6 text-center hover:border-red-600 border border-transparent transition-colors relative">
                    <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

                    {category === "Clearance" && <Tag className="h-8 w-8 text-red-600 mx-auto mb-2" />}
                    {category === "Buy One Get One" && <Percent className="h-8 w-8 text-red-600 mx-auto mb-2" />}
                    {category === "End of Season" && <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />}
                    {category === "Bundle Deals" && <Tag className="h-8 w-8 text-red-600 mx-auto mb-2" />}

                    <h3 className="font-bold">{category}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Deals */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Featured Deals
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((deal) => (
                <div
                  key={deal}
                  className="group bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-red-600 transition-colors relative"
                >
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 z-10">
                    {deal % 2 === 0 ? "30% OFF" : "50% OFF"}
                  </div>
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>
                  <div className="relative h-48 w-full overflow-hidden">
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">Premium Product {deal}</h3>
                    <p className="text-zinc-600 dark:text-gray-400 text-sm mb-3">Limited time offer</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 font-medium">${(49.99 - deal * 5).toFixed(2)}</span>
                        <span className="text-zinc-500 line-through text-sm">${(79.99 - deal * 2).toFixed(2)}</span>
                      </div>
                      <Link href={`/products/deal-${deal}`}>
                        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none text-sm px-3 py-1 h-auto relative overflow-hidden">
                          <span className="relative z-10">Shop Now</span>
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
              <Link href="/deals/all">
                <Button variant="outline" className="rounded-none border-red-600 text-red-600 hover:bg-red-600/10">
                  View All Deals
                </Button>
              </Link>
            </div>
          </div>

          {/* Coupon Codes */}
          <div>
            <h2 className="text-2xl font-bold mb-6 relative inline-block">
              Coupon Codes
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { code: "SUMMER25", discount: "25% off on summer collection", expires: "July 31, 2025" },
                { code: "NEWUSER10", discount: "10% off on your first order", expires: "No expiration" },
                { code: "FREESHIP50", discount: "Free shipping on orders over $50", expires: "August 15, 2025" },
                { code: "BUNDLE15", discount: "15% off when you buy 2 or more items", expires: "September 1, 2025" },
              ].map((coupon, index) => (
                <div key={index} className="bg-white dark:bg-zinc-900 p-6 border border-dashed border-red-600 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <div className="text-xl font-bold text-red-600 mb-2">{coupon.code}</div>
                      <p className="text-zinc-600 dark:text-gray-400 mb-1">{coupon.discount}</p>
                      <p className="text-sm text-zinc-500">Expires: {coupon.expires}</p>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden whitespace-nowrap">
                      <span className="relative z-10">Copy Code</span>
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
        </div>
      </main>
    </div>
  )
}

