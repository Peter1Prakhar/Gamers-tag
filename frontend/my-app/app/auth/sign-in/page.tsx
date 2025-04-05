"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, GamepadIcon as GameController } from "lucide-react"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-black dark:text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 relative">
        <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-red-600"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-red-600"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-red-600"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-red-600"></div>

        <div className="flex justify-center mb-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <GameController className="h-6 w-6 text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute inset-0 border border-red-600 rotate-45"></div>
            </div>
            <span className="font-bold text-xl tracking-tight">
              GAME<span className="text-red-600">ZONE</span>
            </span>
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              className="bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                className="bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <div className="text-right">
              <Link href="/auth/forgot-password" className="text-sm text-red-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white rounded-none relative overflow-hidden"
          >
            <span className="relative z-10">Sign In</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
            <span className="absolute inset-y-0 right-0 w-0.5 bg-white"></span>
            <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
            <span className="absolute inset-y-0 left-0 w-0.5 bg-white"></span>
          </Button>
        </form>

        <Separator className="my-6" />

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full rounded-none border-zinc-300 dark:border-zinc-700 relative overflow-hidden"
          >
            <span className="relative z-10">Sign in with Google</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="absolute inset-y-0 right-0 w-0.5 bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="absolute inset-x-0 top-0 h-0.5 bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="absolute inset-y-0 left-0 w-0.5 bg-zinc-300 dark:bg-zinc-700"></span>
          </Button>

          <Button
            variant="outline"
            className="w-full rounded-none border-zinc-300 dark:border-zinc-700 relative overflow-hidden"
          >
            <span className="relative z-10">Sign in with Facebook</span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="absolute inset-y-0 right-0 w-0.5 bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="absolute inset-x-0 top-0 h-0.5 bg-zinc-300 dark:bg-zinc-700"></span>
            <span className="absolute inset-y-0 left-0 w-0.5 bg-zinc-300 dark:bg-zinc-700"></span>
          </Button>
        </div>

        <div className="mt-6 text-center text-sm">
        <p>{`Don't have an account?`}</p>
          <Link href="/auth/sign-up" className="text-red-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

