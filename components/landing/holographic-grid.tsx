"use client"

import { motion } from "framer-motion"

export function HolographicGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
      {/* Horizontal Lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ top: `${i * 5}%` }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Vertical Lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent"
          style={{ left: `${i * 5}%` }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Grid Intersections */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}
