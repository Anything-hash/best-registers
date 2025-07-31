"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User, Sparkles } from "lucide-react"
import { useChat } from "ai/react"

export function ChatBot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  })

  const suggestedQuestions = [
    "Find tech events in San Francisco",
    "Show me free workshops this week",
    "Recommend music festivals",
    "What's trending in AI events?",
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-96 h-96 bg-black/80 backdrop-blur-2xl rounded-2xl border border-cyan-400/30 overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 border-b border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center"
          >
            <Bot className="w-4 h-4 text-black" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-white">AI Event Assistant</h3>
            <p className="text-xs text-cyan-400">Powered by Quantum AI</p>
          </div>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 h-64 overflow-y-auto space-y-4">
        {messages.length === 0 ? (
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-gray-400 text-sm"
            >
              Ask me anything about events!
            </motion.div>
            <div className="space-y-2">
              {suggestedQuestions.map((question, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleInputChange({ target: { value: question } } as any)}
                  className="w-full text-left p-2 text-xs text-cyan-400 bg-cyan-400/10 rounded-lg hover:bg-cyan-400/20 transition-colors"
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start space-x-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-black" />
                </div>
              )}
              {message.role === "user" && (
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-3 h-3 text-white" />
                </div>
              )}
              <div
                className={`max-w-xs p-2 rounded-lg text-sm ${
                  message.role === "user" ? "bg-cyan-500/20 text-cyan-100" : "bg-purple-500/20 text-purple-100"
                }`}
              >
                {message.content}
              </div>
            </motion.div>
          ))
        )}

        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
              <Bot className="w-3 h-3 text-black" />
            </div>
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 0.6,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                    className="w-1 h-1 bg-purple-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-cyan-400/30">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about events..."
            className="flex-1 bg-black/50 border-cyan-400/30 text-white placeholder-gray-400 focus:border-cyan-400"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
