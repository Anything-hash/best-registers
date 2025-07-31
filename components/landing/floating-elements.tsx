"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Zap, Star, Heart, Trophy } from "lucide-react"

const icons = [Calendar, Users, Zap, Star, Heart, Trophy]

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-400/20"
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
          <Icon size={24 + Math.random() * 24} />
        </motion.div>
      ))}
    </div>
  )
}
