"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface StatsSectionProps {
  currentElement: string
}

export function StatsSection({ currentElement }: StatsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "10K+", label: "Events Created" },
    { number: "500+", label: "Cities Covered" },
    { number: "98%", label: "Satisfaction Rate" },
  ]

  return (
    <section ref={ref} className="py-20 bg-white/10 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
