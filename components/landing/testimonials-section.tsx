"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

interface TestimonialsSectionProps {
  currentElement: string
}

export function TestimonialsSection({ currentElement }: TestimonialsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Enthusiast",
      content:
        "EventHub has completely transformed how I discover and attend events. The AI recommendations are spot on!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Community Organizer",
      content: "As an organizer, EventHub has helped me reach the right audience and create memorable experiences.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Travel Blogger",
      content: "I love how easy it is to find unique events wherever I travel. EventHub is my go-to platform!",
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white/5 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Users Say</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of satisfied users who have found their perfect events through EventHub.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/90 mb-6 text-lg">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-white/70">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
