"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Star, Zap, Globe, Heart } from "lucide-react"

const icons = [Calendar, Users, Star, Zap, Globe, Heart]

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Icon className="w-6 h-6 text-blue-400/20" />
        </motion.div>
      ))}
    </div>
  )
}
