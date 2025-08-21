"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Cloud, Sun, CloudRain } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const eventData = [
  { month: "Jan", events: 45, attendees: 1200 },
  { month: "Feb", events: 52, attendees: 1400 },
  { month: "Mar", events: 48, attendees: 1300 },
  { month: "Apr", events: 61, attendees: 1600 },
  { month: "May", events: 55, attendees: 1500 },
  { month: "Jun", events: 67, attendees: 1800 },
]

const weatherData = [
  { day: "Mon", sunny: 8, cloudy: 3, rainy: 1 },
  { day: "Tue", sunny: 6, cloudy: 4, rainy: 2 },
  { day: "Wed", sunny: 9, cloudy: 2, rainy: 1 },
  { day: "Thu", sunny: 7, cloudy: 4, rainy: 1 },
  { day: "Fri", sunny: 10, cloudy: 1, rainy: 1 },
  { day: "Sat", sunny: 12, cloudy: 0, rainy: 0 },
  { day: "Sun", sunny: 11, cloudy: 1, rainy: 0 },
]

export function AnalyticsContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Weather-themed Header */}
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-500 text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <div className="flex items-center space-x-4 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sun className="w-12 h-12 text-yellow-300" />
            </motion.div>
            <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
          </div>
          <p className="text-xl opacity-90">Weather-powered insights for your events</p>
        </motion.div>
      </div>

      <div className="container mx-auto p-8">
        {/* Weather Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-yellow-800">Sunny Events</CardTitle>
                <Sun className="h-4 w-4 text-yellow-600" />
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
          >
            <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-800">Cloudy Events</CardTitle>
                <Cloud className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">1,234</div>
                <p className="text-xs text-blue-700">+8% from last month</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-gray-100 to-slate-100 border-gray-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-800">Rainy Events</CardTitle>
                <CloudRain className="h-4 w-4 text-gray-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">567</div>
                <p className="text-xs text-gray-700">-3% from last month</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-800">Total Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900">$45,231</div>
                <p className="text-xs text-green-700">+20% from last month</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span>Event Trends</span>
                </CardTitle>
                <CardDescription>Monthly event creation and attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={eventData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="events" stroke="#3b82f6" strokeWidth={3} />
                    <Line type="monotone" dataKey="attendees" stroke="#10b981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cloud className="w-5 h-5 text-blue-600" />
                  <span>Weather Impact</span>
                </CardTitle>
                <CardDescription>Event success by weather conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sunny" fill="#fbbf24" />
                    <Bar dataKey="cloudy" fill="#60a5fa" />
                    <Bar dataKey="rainy" fill="#6b7280" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Weather Forecast for Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">7-Day Event Weather Forecast</CardTitle>
              <CardDescription className="text-blue-100">
                Plan your events with weather-powered insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center bg-white/20 rounded-lg p-4"
                  >
                    <div className="font-semibold mb-2">{day}</div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {index % 3 === 0 ? (
                        <Sun className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                      ) : index % 3 === 1 ? (
                        <Cloud className="w-8 h-8 text-blue-200 mx-auto mb-2" />
                      ) : (
                        <CloudRain className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                      )}
                    </motion.div>
                    <div className="text-sm">{index % 3 === 0 ? "Sunny" : index % 3 === 1 ? "Cloudy" : "Rainy"}</div>
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
