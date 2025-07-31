"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function FireBreathingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      life: number
      maxLife: number
      color: string
    }> = []

    function createFireParticle() {
      const startX = Math.random() * canvas.width
      const startY = canvas.height + 50

      particles.push({
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 3 - 2,
        size: Math.random() * 8 + 4,
        life: 0,
        maxLife: Math.random() * 100 + 50,
        color: `hsl(${Math.random() * 60 + 10}, 100%, ${Math.random() * 30 + 50}%)`,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create new particles
      if (Math.random() < 0.3) {
        createFireParticle()
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]

        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        const alpha = 1 - particle.life / particle.maxLife

        if (particle.life >= particle.maxLife || alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = alpha * 0.6
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 20
        ctx.shadowColor = particle.color
        ctx.fill()
        ctx.restore()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="absolute inset-0"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-orange-100/20 via-transparent to-red-100/10" />
    </motion.div>
  )
}
