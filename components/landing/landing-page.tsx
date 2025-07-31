"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LoadingScreen } from "./loading-screen"
import { FireBreathingBackground } from "./fire-breathing-background"
import { WaterFlowBackground } from "./water-flow-background"
import { AirCurrentsBackground } from "./air-currents-background"
import { Navigation } from "./navigation"
import { HeroSection } from "./hero-section"
import { StatsSection } from "./stats-section"
import { FeaturesSection } from "./features-section"
import { TestimonialsSection } from "./testimonials-section"
import { CTASection } from "./cta-section"
import { FloatingChatButton } from "../ai-assistant/floating-chat-button"

export function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentElement, setCurrentElement] = useState<"fire" | "water" | "air">("fire")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    // Cycle through elements every 10 seconds
    const elementTimer = setInterval(() => {
      setCurrentElement((prev) => {
        if (prev === "fire") return "water"
        if (prev === "water") return "air"
        return "fire"
      })
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearInterval(elementTimer)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Elemental Backgrounds */}
      <AnimatePresence mode="wait">
        {currentElement === "fire" && <FireBreathingBackground key="fire" />}
        {currentElement === "water" && <WaterFlowBackground key="water" />}
        {currentElement === "air" && <AirCurrentsBackground key="air" />}
      </AnimatePresence>

      <div className="relative z-10">
        <Navigation />
        <HeroSection currentElement={currentElement} />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </div>

      <FloatingChatButton />
    </motion.div>
  )
}
