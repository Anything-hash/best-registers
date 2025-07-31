"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, DollarSign, Users, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface EventRecommendationCardProps {
  event: {
    id: number
    title: string
    date: string
    location: string
    category: string
    price: string
    description: string
    attendees?: number
    rating?: number
  }
  index: number
}

export function EventRecommendationCard({ event, index }: EventRecommendationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {event.title}
              </CardTitle>
              <Badge
                variant="secondary"
                className="mt-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
              >
                {event.category}
              </Badge>
            </div>
            {event.rating && (
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{event.rating}</span>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{event.description}</p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="h-4 w-4 text-purple-500" />
              <span>
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4 text-purple-500" />
              <span>{event.location}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <DollarSign className="h-4 w-4 text-green-500" />
                <span className="font-semibold text-green-600 dark:text-green-400">{event.price}</span>
              </div>

              {event.attendees && (
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Users className="h-4 w-4" />
                  <span>{event.attendees} attending</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              size="sm"
            >
              Register Now
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/50 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
