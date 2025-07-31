"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Zap, Shield, Globe, BarChart3, Sparkles } from "lucide-react"

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Our advanced AI analyzes your preferences and suggests perfect events tailored just for you.",
      color: "from-purple-400 to-pink-500",
      delay: 0,
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Experience blazing-fast load times and seamless interactions with our optimized platform.",
      color: "from-yellow-400 to-orange-500",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security ensures your data and transactions are always protected and private.",
      color: "from-green-400 to-emerald-500",
      delay: 0.4,
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with events worldwide and expand your network across continents and cultures.",
      color: "from-blue-400 to-cyan-500",
      delay: 0.6,
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Get instant insights with comprehensive analytics and reporting tools for your events.",
      color: "from-indigo-400 to-purple-500",
      delay: 0.8,
    },
    {
      icon: Sparkles,
      title: "Immersive Experience",
      description: "Enjoy stunning 3D interfaces and animations that make event discovery a visual delight.",
      color: "from-pink-400 to-rose-500",
      delay: 1.0,
    },
  ]

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolutionary Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the cutting-edge technology that powers the future of event management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description, color, delay, isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}
      />
      <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
        <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }} className="mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} p-4 mx-auto`}>
            <Icon className="w-full h-full text-white" />
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
        <p className="text-gray-400 text-center leading-relaxed">{description}</p>

        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} rounded-b-3xl`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
