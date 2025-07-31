"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, Calendar, Star } from "lucide-react"

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: Calendar, value: "10,000+", label: "Events Monthly", color: "text-orange-500" },
    { icon: Users, value: "500K+", label: "Active Users", color: "text-blue-500" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", color: "text-green-500" },
    { icon: Star, value: "4.9/5", label: "User Rating", color: "text-yellow-500" },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted by Millions Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing community of event enthusiasts and discover what makes us special
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                  scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 },
                }}
                className={`w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                className="text-3xl font-black text-gray-800 mb-2"
              >
                {stat.value}
              </motion.div>

              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
