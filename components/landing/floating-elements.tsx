"use client"

import { motion } from "framer-motion"
import { Calendar, Zap, Star, Sparkles, Rocket, Globe } from "lucide-react"

interface FloatingElementsProps {
  mousePosition: { x: number; y: number }
}

export function FloatingElements({ mousePosition }: FloatingElementsProps) {
  const icons = [Calendar, Zap, Star, Sparkles, Rocket, Globe]

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 10}%`,
          }}
          animate={{
            x: mousePosition.x * 0.01 * (index + 1),
            y: mousePosition.y * 0.01 * (index + 1),
            rotate: [0, 360],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 20 },
            y: { type: "spring", stiffness: 50, damping: 20 },
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-20" />
            <Icon className="relative w-8 h-8 text-cyan-400 opacity-30" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
