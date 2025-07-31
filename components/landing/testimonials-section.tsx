"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Organizer",
      content: "EventHub transformed how I discover and manage events. The AI recommendations are incredibly accurate!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=SJ",
      gradient: "from-orange-400 to-red-500",
    },
    {
      name: "Michael Chen",
      role: "Tech Enthusiast",
      content:
        "The interface is beautiful and intuitive. I've discovered so many amazing tech meetups through this platform.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      content:
        "Perfect for networking! I've built incredible connections and found events I never would have discovered otherwise.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=ER",
      gradient: "from-green-400 to-emerald-500",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">What Our Community Says</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing users have to say about their experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
                    scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 },
                  }}
                  className="mb-6"
                >
                  <Quote className="w-10 h-10 text-gray-400 group-hover:text-gray-500 transition-colors" />
                </motion.div>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg group-hover:text-gray-800 transition-colors">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </motion.div>
                  <div>
                    <div className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 group-hover:text-gray-700 transition-colors">{testimonial.role}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.1 + index * 0.3,
                      }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
