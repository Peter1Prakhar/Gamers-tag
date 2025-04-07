import Image from 'next/image';
import { Button } from "@/components/ui/button"
import GlitchText from '@/components/GlitchText';
import CountUp from '@/components/Countup';
import { ThreeDCardDemo}  from '@/components/ThreeDCardDemo';
export default function HeroSection() {
    return (
      <section className="relative py-20 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src= "/image1.jpg"
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
                Dominate The <span className="text-red-600">
                <GlitchText
                    speed={1}
                    enableShadows={true}
                    enableOnHover={true}
                    className="text-2xl md:text-4xl"
                    >
                    Gaming
                    </GlitchText>    
                </span> World
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
              <ThreeDCardDemo/>
            </div>
          </div>
        </div>
  
        {/* HUD Elements */}
        <div className="absolute bottom-4 left-4 hidden md:block">
          <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-gray-400">
            <div className="w-2 h-2 bg-green-500"></div>
            <span>ONLINE:
            <CountUp
                from={0}
                to={2504}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                />

            </span>
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