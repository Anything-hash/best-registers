"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface QuantumParticlesProps {
  mousePosition: { x: number; y: number }
}

export function QuantumParticles({ mousePosition }: QuantumParticlesProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>(
    [],
  )

  useEffect(() => {
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      color: ["#00ffff", "#ff00ff", "#ffff00", "#00ff00"][Math.floor(Math.random() * 4)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 3 }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
          }}
          animate={{
            x: [
              particle.x,
              particle.x + (mousePosition.x - particle.x) * 0.1,
              particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 50,
            ],
            y: [
              particle.y,
              particle.y + (mousePosition.y - particle.y) * 0.1,
              particle.y + Math.cos(Date.now() * 0.001 + particle.id) * 50,
            ],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
