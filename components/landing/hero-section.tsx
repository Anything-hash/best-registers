"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Flame, Droplets, Wind } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  currentElement: string
}

export function HeroSection({ currentElement }: HeroSectionProps) {
  const getIcon = () => {
    switch (currentElement) {
      case "fire":
        return <Flame className="w-16 h-16 text-orange-300" />
      case "water":
        return <Droplets className="w-16 h-16 text-blue-300" />
      case "air":
        return <Wind className="w-16 h-16 text-green-300" />
      default:
        return <Flame className="w-16 h-16 text-orange-300" />
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          key={currentElement}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8"
        >
          {getIcon()}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6"
        >
          Discover Amazing
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Events</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
        >
          Join thousands of event enthusiasts and discover experiences that will ignite your passion, flow with your
          interests, and lift your spirits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <Link href="/register" className="flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg bg-transparent"
          >
            <Link href="/events">Browse Events</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
