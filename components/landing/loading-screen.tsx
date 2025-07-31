"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
    >
      <div className="text-center space-y-8">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
          }}
          className="relative mx-auto w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center"
        >
          <Sparkles className="h-10 w-10 text-white" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-20 blur-xl animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            EventHub
          </h1>
          <p className="text-purple-300">Loading the future of events...</p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto max-w-xs"
        />
      </div>
    </motion.div>
  )
}
