import Link from "next/link"
import { GamepadIcon as GameController } from "lucide-react"
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
                GAME<span className="text-red-600">ZONE</span>
              </span>
            </Link>
            <p className="text-zinc-600 dark:text-gray-400 mb-4">
              The ultimate destination for gamers seeking competition, community, and cutting-edge content.
            </p>
            <div className="flex gap-4">{/* Social media icons would go here */}</div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block">
              Quick Links
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
                  href="/tournaments"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Tournaments
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 relative inline-block">
              Support
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
                  href="/terms"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-zinc-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 bg-red-600"></span>
                  Refund Policy
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
              Subscribe to get updates on new games and tournaments.
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
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center text-zinc-600 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GAMEZONE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

