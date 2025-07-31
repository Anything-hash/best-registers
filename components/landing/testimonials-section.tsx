"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at Google",
    content: "EventHub transformed how I discover professional events. The AI recommendations are incredibly accurate!",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    content: "The networking opportunities I found through EventHub helped me raise my Series A. Game changer!",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "UX Designer",
    content: "Beautiful interface, seamless experience. EventHub makes event discovery actually enjoyable.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Loved by Thousands
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            See what our community says about their EventHub experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-purple-200 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-purple-300">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
