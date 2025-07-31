"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function AirCurrentsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const windParticles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      angle: number
    }> = []

    function createWindParticle() {
      windParticles.push({
        x: -10,
        y: Math.random() * canvas.height,
        vx: Math.random() * 3 + 2,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        angle: Math.random() * Math.PI * 2,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create new wind particles
      if (Math.random() < 0.2) {
        createWindParticle()
      }

      // Update and draw wind particles
      for (let i = windParticles.length - 1; i >= 0; i--) {
        const particle = windParticles[i]

        particle.x += particle.vx
        particle.y += particle.vy + Math.sin(particle.angle) * 0.5
        particle.angle += 0.02

        if (particle.x > canvas.width + 10) {
          windParticles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(120, 60%, ${Math.random() * 30 + 70}%)`
        ctx.fill()

        // Add wind trail
        ctx.beginPath()
        ctx.moveTo(particle.x - particle.vx * 3, particle.y)
        ctx.lineTo(particle.x, particle.y)
        ctx.strokeStyle = `hsla(120, 60%, 80%, ${particle.opacity * 0.5})`
        ctx.lineWidth = particle.size * 0.5
        ctx.stroke()
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
      <div className="absolute inset-0 bg-gradient-to-t from-green-100/20 via-transparent to-emerald-100/10" />
    </motion.div>
  )
}
