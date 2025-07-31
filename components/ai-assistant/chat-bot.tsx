"use client"
import { useChat } from "ai/react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"

interface ChatBotProps {
  isOpen: boolean
  onClose: () => void
}

export function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  const suggestedQuestions = [
    "Show me tech events in San Francisco",
    "What free events are available?",
    "Find design workshops this month",
    "Recommend business events under $200",
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-20 right-4 z-50 w-96 h-[600px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-6rem)]"
        >
          <Card className="h-full flex flex-col bg-background/95 backdrop-blur-xl border-2 border-primary/20 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary/10 to-purple-500/10">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Bot className="h-6 w-6 text-primary" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-1 -right-1"
                  >
                    <Sparkles className="h-3 w-3 text-yellow-500" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-semibold">EventBot</h3>
                  <p className="text-xs text-muted-foreground">AI Event Assistant</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                  >
                    <div className="text-muted-foreground">
                      👋 Hi! I'm EventBot, your AI assistant for finding amazing events!
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Try asking:</p>
                      {suggestedQuestions.map((question, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleInputChange({ target: { value: question } } as any)}
                          className="block w-full text-left p-2 text-sm bg-muted/50 hover:bg-muted rounded-lg transition-colors"
                        >
                          "{question}"
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        message.role === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                      }`}
                    >
                      <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                    </div>

                    {message.role === "user" && (
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-2xl p-3">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                            className="w-2 h-2 bg-muted-foreground/50 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me about events..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" size="sm" disabled={isLoading || !input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
