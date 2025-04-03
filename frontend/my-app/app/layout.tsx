import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "../components/theme-provider"
import type { Metadata } from "next"
import { Jost } from "next/font/google"

// Initialize Jost font
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: "GameZone - Ultimate Gaming Platform",
  description:
    "Join the ultimate gaming platform where legends are born. Compete in tournaments, connect with gamers, and elevate your gaming experience.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={jost.variable}>
      <body className="min-h-screen font-jost">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

