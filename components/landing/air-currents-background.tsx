"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AirCurrentsBackground() {
  const [leaves, setLeaves] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newLeaves = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
    }))
    setLeaves(newLeaves)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600"
    >
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute w-4 h-4 bg-green-200 rounded-full opacity-60"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
          }}
          animate={{
            x: [0, 50, -30, 20],
            y: [0, -20, 10, -5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: leaf.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  )
}
