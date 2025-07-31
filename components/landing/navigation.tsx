"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-20 p-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <div className="relative">
            <Sparkles className="h-8 w-8 text-primary" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0"
            >
              <Sparkles className="h-8 w-8 text-purple-400" />
            </motion.div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            EventHub
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#events" className="text-white/80 hover:text-white transition-colors">
            Events
          </Link>
          <Link href="#about" className="text-white/80 hover:text-white transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Sign In
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
