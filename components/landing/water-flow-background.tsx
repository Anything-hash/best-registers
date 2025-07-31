"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function WaterFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drops: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    function createWaterDrop() {
      drops.push({
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 1,
        vy: Math.random() * 2 + 3,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.7 + 0.3,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create new drops
      if (Math.random() < 0.1) {
        createWaterDrop()
      }

      // Update and draw drops
      for (let i = drops.length - 1; i >= 0; i--) {
        const drop = drops[i]

        drop.x += drop.vx
        drop.y += drop.vy

        if (drop.y > canvas.height + 10) {
          drops.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = drop.opacity
        ctx.beginPath()
        ctx.ellipse(drop.x, drop.y, drop.size, drop.size * 2, 0, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(200, 100%, ${Math.random() * 20 + 70}%)`
        ctx.fill()

        // Add shimmer effect
        ctx.shadowBlur = 10
        ctx.shadowColor = "rgba(100, 200, 255, 0.5)"
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
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/20 via-transparent to-cyan-100/10" />
    </motion.div>
  )
}
