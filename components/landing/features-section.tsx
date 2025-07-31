"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Brain, Search, Calendar, Users, Star, Zap } from "lucide-react"

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Brain,
      title: "Smart Recommendations",
      description: "AI-powered suggestions based on your interests and past events",
      gradient: "from-orange-400 to-red-500",
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Find exactly what you're looking for with advanced filtering",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Seamlessly sync events with your calendar and never miss out",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Users,
      title: "Community Connect",
      description: "Meet like-minded people and build lasting connections",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Star,
      title: "Premium Experience",
      description: "Enjoy ad-free browsing with priority support and features",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Zap,
      title: "Instant Updates",
      description: "Real-time notifications for events, changes, and recommendations",
      gradient: "from-indigo-400 to-purple-500",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Powerful Features for Everyone</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover events effortlessly with our intuitive features designed to enhance your experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
              }}
              className="group"
            >
              <Card className="h-full bg-white hover:bg-gray-50 border-gray-200 transition-all duration-300 p-8">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                    scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 },
                  }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
