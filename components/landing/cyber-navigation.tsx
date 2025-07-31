"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"
import { useState } from "react"

export function CyberNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="relative">
        {/* Holographic Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-cyan-400/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-2xl animate-pulse" />

        <div className="relative flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              }}
              className="relative"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur-lg opacity-50" />
            </motion.div>
            <motion.span
              animate={{
                textShadow: ["0 0 10px #00ffff", "0 0 20px #ff00ff", "0 0 10px #00ffff"],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            >
              EVENTHUB
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Events", "About", "Contact"].map((item, index) => (
              <motion.div key={item} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="relative text-white hover:text-cyan-400 transition-colors font-medium"
                >
                  <motion.span
                    whileHover={{
                      textShadow: "0 0 10px #00ffff",
                    }}
                  >
                    {item}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-6 py-2 rounded-full relative overflow-hidden"
              >
                <Link href="/register">
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="relative z-10"
                  >
                    Get Started
                  </motion.span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 hover:opacity-20 transition-opacity" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 p-4 bg-black/50 backdrop-blur-xl rounded-xl border border-cyan-400/30"
          >
            <div className="space-y-4">
              {["Events", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
