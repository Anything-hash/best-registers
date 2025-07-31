"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Discover
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Amazing Events
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of event discovery with AI-powered recommendations, immersive previews, and seamless
            registration. Join millions of event enthusiasts worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8 py-4 rounded-full group"
            >
              Start Exploring
              <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-full group bg-transparent"
          >
            <Play className="h-5 w-5 mr-2" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl" />
            <div className="relative bg-black/20 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl flex items-center justify-center">
                <Play className="h-16 w-16 text-white/80" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
