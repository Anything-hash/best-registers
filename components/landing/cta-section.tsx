"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl" />
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <div className="space-y-8">
              <div className="flex justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="h-16 w-16 text-primary" />
                </motion.div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  Ready to Start?
                </h2>
                <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                  Join millions of event enthusiasts and discover your next amazing experience today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8 py-4 rounded-full group"
                  >
                    Get Started Free
                    <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
