"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HeroSection } from "./hero-section"
import { FeaturesSection } from "./features-section"
import { StatsSection } from "./stats-section"
import { TestimonialsSection } from "./testimonials-section"
import { CTASection } from "./cta-section"
import { Navigation } from "./navigation"
import { LoadingScreen } from "./loading-screen"
import { FloatingElements } from "./floating-elements"
import { ParticleBackground } from "./particle-background"

export function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <ParticleBackground />
            <FloatingElements mousePosition={mousePosition} />
            <Navigation />
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
