"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cloud } from "lucide-react"

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Cloud className="w-8 h-8 text-white" />
          <span className="text-2xl font-bold text-white">EventHub</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/events" className="text-white hover:text-yellow-300 transition-colors">
            Events
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost" className="text-white hover:bg-white/20">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/register">Sign Up</Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
