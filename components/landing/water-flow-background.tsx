"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function WaterFlowBackground() {
  const [droplets, setDroplets] = useState<Array<{ id: number; x: number; delay: number }>>([])

  useEffect(() => {
    const newDroplets = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setDroplets(newDroplets)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600"
    >
      {droplets.map((droplet) => (
        <motion.div
          key={droplet.id}
          className="absolute w-3 h-6 bg-blue-200 rounded-full opacity-70"
          style={{
            left: `${droplet.x}%`,
            top: "-10px",
          }}
          animate={{
            y: [0, window.innerHeight + 50],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: droplet.delay,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  )
}
