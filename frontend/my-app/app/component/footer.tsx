import Link from "next/link"
import { GamepadIcon as GameController, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <GameController className="h-6 w-6 text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-0 border border-red-600 rotate-45"></div>
              </div>
              <span className="font-bold text-xl tracking-tight">
                GAMER'S<span className="text-red-600"> TAG</span>
              </span>
            </Link>
            <p className="text-zinc-600 dark:text-gray-400 mb-4">
              Your one-stop destination for all gaming needs. From the latest games to premium accessories, level up
              your gaming experience with us.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block">
              Shop
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-red-600"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/games"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/consoles"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Consoles
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/merchandise"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Merchandise
                </Link>
              </li>
              <li>
                <Link
                  href="/deals"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Deals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block">
              Customer Service
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-red-600"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/support/help-center"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/support/faq"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-red-600"></span>
            </h3>
            <p className="text-zinc-600 dark:text-gray-400 mb-4">
              Subscribe to get updates on new releases, restocks, and exclusive deals.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 px-4 py-2 w-full focus:outline-none focus:border-red-600"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden">
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-zinc-600 dark:text-gray-400 text-sm">We accept:</p>
              <div className="flex gap-2 mt-2">
                <div className="bg-white dark:bg-zinc-800 p-1 h-8 w-12 flex items-center justify-center">
                  <span className="text-xs font-bold">VISA</span>
                </div>
                <div className="bg-white dark:bg-zinc-800 p-1 h-8 w-12 flex items-center justify-center">
                  <span className="text-xs font-bold">MC</span>
                </div>
                <div className="bg-white dark:bg-zinc-800 p-1 h-8 w-12 flex items-center justify-center">
                  <span className="text-xs font-bold">AMEX</span>
                </div>
                <div className="bg-white dark:bg-zinc-800 p-1 h-8 w-12 flex items-center justify-center">
                  <span className="text-xs font-bold">PAYPAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center text-zinc-600 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GAMESTORE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

