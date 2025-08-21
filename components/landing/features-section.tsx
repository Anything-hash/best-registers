"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Users, MapPin, Star } from "lucide-react"

interface FeaturesSectionProps {
  currentElement: string
}

export function FeaturesSection({ currentElement }: FeaturesSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Smart Scheduling",
      description: "AI-powered event recommendations based on your preferences and schedule.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Driven",
      description: "Connect with like-minded people and build lasting relationships.",
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Location Based",
      description: "Discover events happening near you or in your favorite destinations.",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Premium Experience",
      description: "Curated events with verified organizers and quality assurance.",
    },
  ]

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose EventHub?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the future of event discovery with our innovative platform designed for modern event enthusiasts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                className="text-white mb-6 flex justify-center"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
