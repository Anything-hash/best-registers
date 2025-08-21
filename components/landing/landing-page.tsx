"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
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
  const [currentElement, setCurrentElement] = useState(0)

  const elements = ["fire", "water", "air"]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElement((prev) => (prev + 1) % elements.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {currentElement === 0 && <FireBreathingBackground key="fire" />}
        {currentElement === 1 && <WaterFlowBackground key="water" />}
        {currentElement === 2 && <AirCurrentsBackground key="air" />}
      </AnimatePresence>

      <div className="relative z-10">
        <Navigation />
        <HeroSection currentElement={elements[currentElement]} />
        <StatsSection currentElement={elements[currentElement]} />
        <FeaturesSection currentElement={elements[currentElement]} />
        <TestimonialsSection currentElement={elements[currentElement]} />
        <CTASection currentElement={elements[currentElement]} />
      </div>

      <FloatingChatButton />
    </div>
  )
}
