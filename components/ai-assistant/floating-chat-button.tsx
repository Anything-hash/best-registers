"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatBot } from "./chat-bot"

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div className="fixed bottom-4 right-4 z-40" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-2xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 relative overflow-hidden group"
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <MessageCircle className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.div>

          {/* Sparkle animation */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            }}
            className="absolute top-1 right-1"
          >
            <Sparkles className="h-3 w-3 text-yellow-300" />
          </motion.div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
        </Button>

        {/* Notification dot */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        )}
      </motion.div>

      <ChatBot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
