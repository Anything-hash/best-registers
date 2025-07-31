"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-10 h-10 bg-gradient-to-r from-orange-400 via-blue-500 to-green-500 rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              EventHub
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "Events", "About", "Contact"].map((item, index) => (
              <motion.div key={item} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
                  Sign In
                </Button>
              </motion.div>
            </Link>
            <Link href="/register">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 hover:from-orange-600 hover:via-blue-600 hover:to-green-600 text-white shadow-lg">
                  Get Started
                </Button>
              </motion.div>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
