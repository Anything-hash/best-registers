"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Conference Organizer",
      company: "TechVision Events",
      content:
        "EventHub Pro transformed how we manage our conferences. The AI recommendations increased attendance by 300% and the analytics are incredible!",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      company: "InnovateLab",
      content:
        "The immersive experience is unlike anything I've seen. Our event registrations doubled within the first month of using this platform.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Emily Watson",
      role: "Marketing Director",
      company: "Global Dynamics",
      content:
        "The real-time analytics and AI-powered insights helped us optimize our events in ways we never thought possible. Absolutely revolutionary!",
      rating: 5,
      avatar: "/placeholder-user.jpg",
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
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied users who've revolutionized their event experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.2} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, role, company, content, rating, avatar, delay, isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
      className="relative group perspective-1000"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
        <Quote className="w-8 h-8 text-cyan-400 mb-6" />

        <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{content}"</p>

        <div className="flex items-center space-x-4">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full border-2 border-cyan-400/50"
          />
          <div>
            <h4 className="text-white font-semibold">{name}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
            <p className="text-cyan-400 text-sm font-medium">{company}</p>
          </div>
        </div>

        <div className="flex items-center space-x-1 mt-4">
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: delay + i * 0.1 }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
