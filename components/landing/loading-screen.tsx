"use client"

import { motion } from "framer-motion"
import { Calendar, Zap, Sparkles } from "lucide-react"

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
    >
      <div className="text-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="relative mx-auto mb-8 w-24 h-24"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-lg opacity-75" />
          <div className="relative flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
            <Calendar className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4"
        >
          EventHub Pro
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto max-w-xs mb-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-gray-300 text-lg"
        >
          Preparing the future of events...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex justify-center space-x-4 mt-6"
        >
          {[Zap, Sparkles, Calendar].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            >
              <Icon className="w-6 h-6 text-cyan-400" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
