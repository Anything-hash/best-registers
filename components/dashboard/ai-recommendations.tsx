"use client"

import { motion } from "framer-motion"
import { Sparkles, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EventRecommendationCard } from "@/components/ai-assistant/event-recommendation-card"

const recommendedEvents = [
  {
    id: 1,
    title: "AI & Machine Learning Conference",
    date: "2024-04-10",
    location: "Seattle, WA",
    category: "Technology",
    price: "$399",
    description: "Explore the future of AI and ML technologies with industry experts",
    attendees: 1250,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    date: "2024-03-20",
    location: "New York, NY",
    category: "Marketing",
    price: "$199",
    description: "Learn advanced digital marketing strategies from top professionals",
    attendees: 850,
    rating: 4.6,
  },
  {
    id: 3,
    title: "Startup Pitch Competition",
    date: "2024-04-01",
    location: "Austin, TX",
    category: "Business",
    price: "Free",
    description: "Watch innovative startups pitch their groundbreaking ideas",
    attendees: 2100,
    rating: 4.9,
  },
]

export function AIRecommendations() {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800">
      <CardHeader>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Sparkles className="h-5 w-5 text-purple-600" />
          </motion.div>
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI Recommendations
          </CardTitle>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Personalized event suggestions based on your interests and activity
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendedEvents.map((event, index) => (
            <EventRecommendationCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-purple-200 dark:border-purple-800"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="font-semibold text-gray-900 dark:text-white">Trending Now</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            AI and Technology events are 40% more popular this month.
            <span className="text-purple-600 dark:text-purple-400 font-medium"> Book early for best prices!</span>
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}
