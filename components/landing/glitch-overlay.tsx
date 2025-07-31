"use client"

import { motion } from "framer-motion"

export function GlitchOverlay() {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 4 }}
      animate={{
        opacity: [0, 0.1, 0],
      }}
      transition={{
        duration: 0.1,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 5,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-transparent to-blue-500 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent mix-blend-screen" />
    </motion.div>
  )
}
