"use client"

import { motion } from "framer-motion"
import { BarChart3, Cloud, Sun } from "lucide-react"

export default function AnalyticsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
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
          className="mb-8 relative"
        >
          <Sun className="w-16 h-16 text-yellow-500 absolute" />
          <Cloud className="w-12 h-12 text-blue-400 absolute top-2 left-4" />
          <BarChart3 className="w-10 h-10 text-green-500 absolute top-6 left-6" />
        </motion.div>

        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-2xl font-bold text-gray-700 mb-4"
        >
          Loading Analytics...
        </motion.h2>

        <motion.div
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto"
        >
          <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
        </motion.div>
      </div>
    </div>
  )
}
