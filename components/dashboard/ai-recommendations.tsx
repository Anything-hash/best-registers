"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, MapPin, Calendar, Users, Sun, Cloud, CloudRain } from "lucide-react"

const recommendations = [
  {
    id: 1,
    title: "AI Photography Workshop",
    description: "Perfect for your interest in tech and creativity",
    date: "March 18, 2024",
    location: "San Francisco, CA",
    attendees: 45,
    weather: "sunny",
    confidence: 95,
    tags: ["AI", "Photography", "Tech"],
  },
  {
    id: 2,
    title: "Sustainable Design Conference",
    description: "Based on your environmental interests",
    date: "March 22, 2024",
    location: "Portland, OR",
    attendees: 120,
    weather: "cloudy",
    confidence: 88,
    tags: ["Design", "Sustainability", "Innovation"],
  },
  {
    id: 3,
    title: "Startup Networking Mixer",
    description: "Great for expanding your professional network",
    date: "March 25, 2024",
    location: "Austin, TX",
    attendees: 80,
    weather: "rainy",
    confidence: 92,
    tags: ["Networking", "Startup", "Business"],
  },
]

export function AIRecommendations() {
  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case "sunny":
        return Sun
      case "cloudy":
        return Cloud
      case "rainy":
        return CloudRain
      default:
        return Sun
    }
  }

  const getWeatherColor = (weather: string) => {
    switch (weather) {
      case "sunny":
        return "from-yellow-100 to-orange-100 border-yellow-200"
      case "cloudy":
        return "from-blue-100 to-cyan-100 border-blue-200"
      case "rainy":
        return "from-gray-100 to-slate-100 border-gray-200"
      default:
        return "from-sky-100 to-blue-100 border-sky-200"
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <Card className="bg-white/80 backdrop-blur-sm border-sky-200 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-purple-600" />
            </motion.div>
            AI-Powered Recommendations
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Sun className="h-5 w-5 text-yellow-500" />
            </motion.div>
          </CardTitle>
          <CardDescription className="text-sky-600">
            Personalized event suggestions based on your interests and weather preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {recommendations.map((rec, index) => {
              const WeatherIcon = getWeatherIcon(rec.weather)

              return (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card
                    className={`bg-gradient-to-br ${getWeatherColor(rec.weather)} border-2 hover:shadow-xl transition-all duration-300`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-gray-900 mb-2">{rec.title}</CardTitle>
                          <CardDescription className="text-gray-600">{rec.description}</CardDescription>
                        </div>
                        <motion.div
                          animate={
                            rec.weather === "sunny"
                              ? { rotate: 360 }
                              : rec.weather === "cloudy"
                                ? { x: [0, 3, 0] }
                                : { y: [0, 2, 0] }
                          }
                          transition={{
                            duration: rec.weather === "sunny" ? 8 : 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="p-2 rounded-full bg-white/50"
                        >
                          <WeatherIcon className="w-5 h-5 text-gray-600" />
                        </motion.div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{rec.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{rec.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{rec.attendees} attendees</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {rec.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-white/70">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge className="bg-green-100 text-green-800 border-green-200">{rec.confidence}% match</Badge>
                        <Button size="sm" className="bg-sky-600 hover:bg-sky-700">
                          View Event
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
