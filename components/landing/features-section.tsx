"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield, Globe, Users, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description: "Get personalized event suggestions based on your interests, location, and past attendance.",
  },
  {
    icon: Zap,
    title: "Instant Registration",
    description: "Register for events in seconds with our streamlined, one-click registration process.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Your transactions are protected with enterprise-grade security and encryption.",
  },
  {
    icon: Globe,
    title: "Global Events",
    description: "Discover events from around the world or find local experiences in your area.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Connect with like-minded individuals and build lasting professional relationships.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Never miss an event with intelligent calendar integration and reminders.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Everything you need to discover, register, and attend amazing events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-purple-200">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
