"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, Users, Calendar, Award } from "lucide-react"

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Trusted by Millions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join the revolution that's transforming how the world connects through events
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, number: 2500000, suffix: "+", label: "Global Users", color: "from-blue-400 to-cyan-400" },
            {
              icon: Calendar,
              number: 150000,
              suffix: "+",
              label: "Events Hosted",
              color: "from-purple-400 to-pink-400",
            },
            {
              icon: TrendingUp,
              number: 98,
              suffix: "%",
              label: "Success Rate",
              color: "from-green-400 to-emerald-400",
            },
            { icon: Award, number: 50, suffix: "+", label: "Awards Won", color: "from-yellow-400 to-orange-400" },
          ].map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 0.2} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon: Icon, number, suffix, label, color, delay, isInView }: any) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      const increment = number / 100
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= number) {
            clearInterval(interval)
            return number
          }
          return Math.min(prev + increment, number)
        })
      }, 20)

      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [isInView, number, delay])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="relative group"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
      />
      <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 text-center">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="mb-4"
        >
          <Icon className={`w-12 h-12 mx-auto bg-gradient-to-r ${color} bg-clip-text text-transparent`} />
        </motion.div>
        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
          {Math.floor(count).toLocaleString()}
          {suffix}
        </div>
        <div className="text-gray-400 font-medium">{label}</div>
      </div>
    </motion.div>
  )
}
