"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-orange-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-gray-200/50">
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
              className="text-5xl font-bold text-gray-800 mb-6"
            >
              Ready to Discover Amazing Events?
            </motion.h2>

            <motion.p
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Join thousands of event enthusiasts who trust EventHub to find their next great experience. Start your
              journey today and unlock a world of possibilities!
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 hover:from-orange-600 hover:via-blue-600 hover:to-green-600 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg"
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
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-6 text-xl font-semibold rounded-full bg-white/80"
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
