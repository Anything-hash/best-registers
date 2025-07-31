"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { LoadingScreen } from "./loading-screen"
import { ParticleBackground } from "./particle-background"
import { FloatingElements } from "./floating-elements"
import { Navigation } from "./navigation"
import { HeroSection } from "./hero-section"
import { StatsSection } from "./stats-section"
import { FeaturesSection } from "./features-section"
import { TestimonialsSection } from "./testimonials-section"
import { CTASection } from "./cta-section"

export function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      <ParticleBackground />
      <FloatingElements />

      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </motion.div>
  )
}
