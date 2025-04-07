import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "../components/theme-provider"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import { Navbar } from "./component/navbar"
import { Footer } from "./component/footer"
import SplashCursor from "@/components/SplashColor"

// Initialize Jost font
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: "Gamer's Tag - Ultimate Gaming Platform",
  description:
    "Shop the latest games, consoles, and accessories. From AAA titles to limited edition collectibles, find everything you need to enhance your gaming setup."}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={jost.variable}>
      <body className="min-h-screen font-jost">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange>
        <div className="flex flex-col min-h-screen">
          <SplashCursor/>
          <Navbar />
            <main className="flex-1">{children}</main>
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

