"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GamepadIcon as GameController, Menu, X, ShoppingCart, Search } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Close menu when clicking outside
  const handleClickOutside = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="border-b border-zinc-300 dark:border-red-900 sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <GameController className="h-6 w-6 text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 border border-red-600 rotate-45"></div>
          </div>
          <span className="font-bold text-xl tracking-tight">
            GAMER'S<span className="text-red-600"> TAG</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button className="text-zinc-900 dark:text-white p-2" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
          </button>
          <Link href="/cart" className="text-zinc-900 dark:text-white p-2 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Link>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-red-900/20 rounded-none border border-current"
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/games"
            className="text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors relative group"
          >
            Games
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/consoles"
            className="text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors relative group"
          >
            Consoles
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/accessories"
            className="text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors relative group"
          >
            Accessories
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/merchandise"
            className="text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors relative group"
          >
            Merchandise
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/deals"
            className="text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors relative group"
          >
            Deals
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search games, consoles..."
              className="bg-zinc-100 dark:bg-zinc-800 border-none rounded-none py-2 pl-10 pr-4 w-48 focus:w-64 transition-all focus:outline-none focus:ring-1 focus:ring-red-600"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          </div>
          <Link href="/cart" className="text-zinc-900 dark:text-white p-2 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Link>
          <ThemeToggle />
          <Link href="/auth/sign-in">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden group">
              <span className="relative z-10">Sign In</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
              <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
              <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
              <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile search bar */}
      {isSearchOpen && (
        <div className="px-4 py-2 border-t border-zinc-200 dark:border-zinc-800 lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search games, consoles..."
              className="bg-zinc-100 dark:bg-zinc-800 border-none rounded-none py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-1 focus:ring-red-600"
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={handleClickOutside} aria-hidden="true" />
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-b border-zinc-300 dark:border-red-900 z-50 lg:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="/games"
                className="text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors py-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center"
                onClick={handleClickOutside}
              >
                <span className="w-1.5 h-1.5 bg-red-600 mr-2"></span>
                Games
              </Link>
              <Link
                href="/consoles"
                className="text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors py-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center"
                onClick={handleClickOutside}
              >
                <span className="w-1.5 h-1.5 bg-red-600 mr-2"></span>
                Consoles
              </Link>
              <Link
                href="/accessories"
                className="text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors py-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center"
                onClick={handleClickOutside}
              >
                <span className="w-1.5 h-1.5 bg-red-600 mr-2"></span>
                Accessories
              </Link>
              <Link
                href="/merchandise"
                className="text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors py-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center"
                onClick={handleClickOutside}
              >
                <span className="w-1.5 h-1.5 bg-red-600 mr-2"></span>
                Merchandise
              </Link>
              <Link
                href="/deals"
                className="text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors py-2 border-b border-zinc-200 dark:border-zinc-800 flex items-center"
                onClick={handleClickOutside}
              >
                <span className="w-1.5 h-1.5 bg-red-600 mr-2"></span>
                Deals
              </Link>

              <div className="flex flex-col gap-3 mt-2">
                <Link href="/auth/sign-in" onClick={handleClickOutside}>
                  <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none w-full relative overflow-hidden">
                    <span className="relative z-10">Sign In</span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
                    <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
                    <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
                  </Button>
                </Link>
                <Link href="/auth/sign-up" onClick={handleClickOutside}>
                  <Button
                    variant="outline"
                    className="text-red-600 border-red-600 hover:bg-red-900/20 hover:text-white rounded-none w-full relative overflow-hidden"
                  >
                    <span className="relative z-10">Register</span>
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600"></span>
                    <span className="absolute inset-y-0 right-0 w-0.5 bg-red-600"></span>
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-red-600"></span>
                    <span className="absolute inset-y-0 left-0 w-0.5 bg-red-600"></span>
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

