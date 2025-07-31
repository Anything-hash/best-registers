"use client"

import { motion } from "framer-motion"
import { Flame, Droplets, Wind } from "lucide-react"

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-orange-100 via-blue-100 to-green-100 flex items-center justify-center z-50"
    >
      <div className="text-center space-y-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="relative w-24 h-24 mx-auto"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center"
          >
            <Flame className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.7 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center"
          >
            <Droplets className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.4 }}
            className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
          >
            <Wind className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-2xl font-bold text-gray-700"
        >
          Awakening the Elements...
        </motion.h2>
      </div>
    </motion.div>
  )
}
