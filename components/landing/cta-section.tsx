"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

interface CTASectionProps {
  currentElement: string
}

export function CTASection({ currentElement }: CTASectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
              }}
              className="w-20 h-20 bg-gradient-to-r from-orange-400 via-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h2
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="text-5xl font-bold text-white mb-6"
            >
              Ready to Discover Amazing Events?
            </motion.h2>

            <motion.p
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Join thousands of event enthusiasts who trust EventHub to find their next great experience. Start your
              journey today and unlock a world of possibilities!
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-6 text-xl font-semibold rounded-full shadow-lg"
                >
                  <Link href="/register" className="flex items-center space-x-3">
                    <span>Get Started Free</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/20 px-12 py-6 text-xl font-semibold rounded-full bg-transparent"
                >
                  <Link href="/events">Browse Events</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
