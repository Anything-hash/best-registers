"use client"

import { motion } from "framer-motion"
import { Calendar, Users, TrendingUp, Star, Bell, Settings, Sun, Cloud, CloudRain, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AIRecommendations } from "./ai-recommendations"

const stats = [
  {
    title: "Events Attended",
    value: "12",
    change: "+2 this month",
    icon: Calendar,
    color: "text-blue-600",
    weather: "sunny",
    bgGradient: "from-yellow-100 to-orange-100",
    borderColor: "border-yellow-200",
  },
  {
    title: "Network Connections",
    value: "248",
    change: "+15 this week",
    icon: Users,
    color: "text-green-600",
    weather: "cloudy",
    bgGradient: "from-blue-100 to-cyan-100",
    borderColor: "border-blue-200",
  },
  {
    title: "Engagement Score",
    value: "94%",
    change: "+5% improvement",
    icon: TrendingUp,
    color: "text-purple-600",
    weather: "rainy",
    bgGradient: "from-gray-100 to-slate-100",
    borderColor: "border-gray-200",
  },
  {
    title: "Average Rating",
    value: "4.8",
    change: "Excellent feedback",
    icon: Star,
    color: "text-yellow-600",
    weather: "sunny",
    bgGradient: "from-green-100 to-emerald-100",
    borderColor: "border-green-200",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    date: "Mar 15, 2024",
    time: "9:00 AM",
    location: "San Francisco, CA",
    status: "confirmed",
    weather: "sunny",
    attendees: 1250,
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    date: "Mar 20, 2024",
    time: "2:00 PM",
    location: "New York, NY",
    status: "pending",
    weather: "cloudy",
    attendees: 890,
  },
  {
    id: 3,
    title: "Creative Design Workshop",
    date: "Mar 25, 2024",
    time: "10:00 AM",
    location: "Los Angeles, CA",
    status: "confirmed",
    weather: "rainy",
    attendees: 450,
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

  return (
    <div className="space-y-8">
      {/* Weather-themed Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sun className="w-12 h-12 text-yellow-300" />
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, Alex! 🌤️</h1>
              <p className="text-sky-100 text-lg">
                Perfect weather for events today! You have 3 upcoming events and 5 new recommendations.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Weather-themed Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const WeatherIcon = getWeatherIcon(stat.weather)
          const Icon = stat.icon

          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card
                className={`bg-gradient-to-br ${stat.bgGradient} ${stat.borderColor} border-2 hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <motion.div
                        animate={
                          stat.weather === "sunny"
                            ? { rotate: 360 }
                            : stat.weather === "cloudy"
                              ? { x: [0, 5, 0] }
                              : { y: [0, 3, 0] }
                        }
                        transition={{
                          duration: stat.weather === "sunny" ? 8 : 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="p-2 rounded-full bg-white/50"
                      >
                        <WeatherIcon className="h-6 w-6 text-gray-600" />
                      </motion.div>
                      <Icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-white/70 text-gray-700">
                      {stat.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* AI Recommendations */}
      <AIRecommendations />

      {/* Weather-themed Upcoming Events */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="bg-white/80 backdrop-blur-sm border-sky-200 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Calendar className="h-6 w-6 text-sky-600" />
              Upcoming Events
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Cloud className="h-5 w-5 text-sky-400" />
              </motion.div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => {
                const WeatherIcon = getWeatherIcon(event.weather)

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-white to-sky-50 rounded-xl border border-sky-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        animate={
                          event.weather === "sunny"
                            ? { rotate: 360 }
                            : event.weather === "cloudy"
                              ? { x: [0, 3, 0] }
                              : { y: [0, 2, 0] }
                        }
                        transition={{
                          duration: event.weather === "sunny" ? 10 : 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="p-3 rounded-full bg-sky-100"
                      >
                        <WeatherIcon className="w-6 h-6 text-sky-600" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">
                          {event.date} at {event.time} • {event.location}
                        </p>
                        <p className="text-xs text-sky-600">{event.attendees} attendees expected</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={event.status === "confirmed" ? "default" : "secondary"}
                        className={
                          event.status === "confirmed"
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-yellow-100 text-yellow-800 border-yellow-200"
                        }
                      >
                        {event.status}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-sky-200 text-sky-700 hover:bg-sky-50 bg-transparent"
                      >
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Weather-themed Quick Actions */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Card className="bg-white/80 backdrop-blur-sm border-sky-200 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl">
              <Zap className="w-6 h-6 text-yellow-500" />
              Quick Actions
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sun className="w-5 h-5 text-yellow-400" />
              </motion.div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="h-24 w-full flex-col gap-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg">
                  <Calendar className="h-8 w-8" />
                  <span className="text-lg font-semibold">Browse Events</span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="h-24 w-full flex-col gap-3 bg-white/70 border-sky-200 text-sky-700 hover:bg-sky-50 shadow-lg"
                >
                  <div className="relative">
                    <Bell className="h-8 w-8" />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                    />
                  </div>
                  <span className="text-lg font-semibold">Notifications</span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="h-24 w-full flex-col gap-3 bg-white/70 border-sky-200 text-sky-700 hover:bg-sky-50 shadow-lg"
                >
                  <Settings className="h-8 w-8" />
                  <span className="text-lg font-semibold">Settings</span>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
