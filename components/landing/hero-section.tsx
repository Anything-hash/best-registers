"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Flame, Droplets, Wind } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  currentElement: "fire" | "water" | "air"
}

export function HeroSection({ currentElement }: HeroSectionProps) {
  const elementConfig = {
    fire: {
      icon: Flame,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      text: "Ignite Your Passion",
      description: "Discover events that spark your interests and fuel your creativity",
    },
    water: {
      icon: Droplets,
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      text: "Flow Into Adventure",
      description: "Dive deep into experiences that refresh and inspire your soul",
    },
    air: {
      icon: Wind,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      text: "Soar to New Heights",
      description: "Let your spirit fly with events that elevate and energize you",
    },
  }

  const config = elementConfig[currentElement]
  const Icon = config.icon

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center space-y-12">
        {/* Floating Element Badge */}
        <motion.div
          key={currentElement}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative inline-block"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
              rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY },
            }}
            className={`w-20 h-20 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6`}
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          key={`heading-${currentElement}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          <motion.h1
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="text-6xl md:text-8xl font-black leading-tight"
          >
            <span className="text-gray-800">Discover</span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className={`bg-gradient-to-r ${config.color} bg-clip-text text-transparent bg-[length:200%_auto]`}
            >
              {config.text}
            </motion.span>
          </motion.h1>

          <motion.p
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {config.description}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className={`bg-gradient-to-r ${config.color} hover:shadow-2xl text-white px-10 py-6 text-xl font-semibold rounded-full transition-all duration-300`}
            >
              <Link href="/register" className="flex items-center space-x-3">
                <span>Start Exploring</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-6 text-xl font-semibold rounded-full bg-white/80 backdrop-blur-sm"
            >
              <Play className="w-6 h-6 mr-3" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20"
        >
          {[
            { number: "50K+", label: "Amazing Events", delay: 0 },
            { number: "100K+", label: "Happy Users", delay: 0.2 },
            { number: "500+", label: "Cities Worldwide", delay: 0.4 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + stat.delay }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200/50"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  color:
                    currentElement === "fire"
                      ? ["#f97316", "#dc2626", "#f97316"]
                      : currentElement === "water"
                        ? ["#3b82f6", "#0891b2", "#3b82f6"]
                        : ["#10b981", "#059669", "#10b981"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                className="text-4xl font-black mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
