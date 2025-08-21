"use client"

import { motion } from "framer-motion"
import { Cloud, Sun, Droplets } from "lucide-react"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
          }}
          className="mb-8"
        >
          <div className="relative">
            <Sun className="w-20 h-20 text-yellow-300 absolute" />
            <Cloud className="w-16 h-16 text-white absolute top-2 left-4" />
            <Droplets className="w-12 h-12 text-blue-300 absolute top-8 left-8" />
          </div>
        </motion.div>

        <motion.h1
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-4xl font-bold text-white mb-4"
        >
          EventHub
        </motion.h1>

        <motion.div
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="w-64 h-2 bg-white/30 rounded-full overflow-hidden mx-auto"
        >
          <div className="h-full bg-white rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}
