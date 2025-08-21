"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, TrendingUp, Activity, Sun, Cloud, CloudRain, Sparkles, MapPin, Clock } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "March 15, 2024",
    time: "9:00 AM",
    location: "San Francisco",
    attendees: 1250,
    weather: "sunny",
    status: "confirmed",
  },
  {
    id: 2,
    title: "AI Workshop Series",
    date: "March 18, 2024",
    time: "2:00 PM",
    location: "New York",
    attendees: 890,
    weather: "cloudy",
    status: "planning",
  },
  {
    id: 3,
    title: "Startup Pitch Day",
    date: "March 22, 2024",
    time: "10:00 AM",
    location: "Austin",
    attendees: 450,
    weather: "rainy",
    status: "confirmed",
  },
]

const aiRecommendations = [
  {
    id: 1,
    title: "Optimize event timing",
    description: "Based on weather patterns, consider moving outdoor events to avoid rain",
    confidence: 92,
    type: "weather",
  },
  {
    id: 2,
    title: "Increase marketing budget",
    description: "Sunny weather events show 40% higher attendance rates",
    confidence: 87,
    type: "marketing",
  },
  {
    id: 3,
    title: "Venue capacity adjustment",
    description: "Rainy day events need 20% more indoor space for comfort",
    confidence: 78,
    type: "venue",
  },
]

export function DashboardContent() {
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
        return "text-yellow-500"
      case "cloudy":
        return "text-blue-500"
      case "rainy":
        return "text-gray-500"
      default:
        return "text-yellow-500"
    }
  }

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white p-8 rounded-2xl shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back, John! 🌤️</h1>
            <p className="text-xl opacity-90">Perfect weather for managing amazing events today</p>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="hidden md:block"
          >
            <Sun className="w-16 h-16 text-yellow-300" />
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-yellow-800">Total Events</CardTitle>
              <Calendar className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-900">2,847</div>
              <p className="text-xs text-yellow-700">+12% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">Active Users</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">18,392</div>
              <p className="text-xs text-blue-700">+8% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">$94,521</div>
              <p className="text-xs text-green-700">+23% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-800">Engagement</CardTitle>
              <Activity className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900">87.3%</div>
              <p className="text-xs text-purple-700">+5% from last month</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-sky-600" />
                <span>Upcoming Events</span>
              </CardTitle>
              <CardDescription>Your next events with weather forecasts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => {
                  const WeatherIcon = getWeatherIcon(event.weather)

                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="p-4 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg border border-sky-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sky-800 mb-1">{event.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-sky-600 mb-2">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>
                                {event.date} at {event.time}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {event.attendees} attendees
                            </Badge>
                            <Badge
                              variant={event.status === "confirmed" ? "default" : "secondary"}
                              className={
                                event.status === "confirmed"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }
                            >
                              {event.status}
                            </Badge>
                          </div>
                        </div>

                        <motion.div
                          animate={{
                            rotate: event.weather === "sunny" ? 360 : 0,
                            y: event.weather === "cloudy" ? [0, -5, 0] : 0,
                          }}
                          transition={{
                            rotate: {
                              duration: 8,
                              repeat: event.weather === "sunny" ? Number.POSITIVE_INFINITY : 0,
                              ease: "linear",
                            },
                            y: { duration: 3, repeat: event.weather === "cloudy" ? Number.POSITIVE_INFINITY : 0 },
                          }}
                          className="ml-4"
                        >
                          <WeatherIcon className={`w-6 h-6 ${getWeatherColor(event.weather)}`} />
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700">
                View All Events
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Recommendations */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span>AI Recommendations</span>
              </CardTitle>
              <CardDescription>Smart insights powered by weather data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiRecommendations.map((rec, index) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-purple-800">{rec.title}</h3>
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Sparkles className="w-4 h-4 text-purple-500" />
                      </motion.div>
                    </div>
                    <p className="text-sm text-purple-600 mb-3">{rec.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs text-purple-700 border-purple-200">
                        {rec.confidence}% confidence
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-100">
                        Apply
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
