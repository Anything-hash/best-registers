"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Activity, Server, Sun, Cloud, CloudRain, Eye } from "lucide-react"

const performanceMetrics = [
  {
    name: "CPU Usage",
    value: 68,
    status: "good",
    weather: "sunny",
    description: "Sunny performance",
  },
  {
    name: "Memory Usage",
    value: 82,
    status: "warning",
    weather: "cloudy",
    description: "Partly cloudy",
  },
  {
    name: "Disk I/O",
    value: 45,
    status: "excellent",
    weather: "sunny",
    description: "Clear skies",
  },
  {
    name: "Network",
    value: 91,
    status: "critical",
    weather: "rainy",
    description: "Storm warning",
  },
]

const systemHealth = [
  {
    component: "API Server",
    status: "healthy",
    uptime: "99.9%",
    weather: "sunny",
    responseTime: "45ms",
  },
  {
    component: "Database",
    status: "healthy",
    uptime: "99.8%",
    weather: "cloudy",
    responseTime: "12ms",
  },
  {
    component: "Cache Layer",
    status: "warning",
    uptime: "98.5%",
    weather: "rainy",
    responseTime: "89ms",
  },
  {
    component: "File Storage",
    status: "healthy",
    uptime: "99.9%",
    weather: "sunny",
    responseTime: "23ms",
  },
]

export function PerformanceContent() {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600"
      case "good":
        return "text-blue-600"
      case "warning":
        return "text-yellow-600"
      case "critical":
        return "text-red-600"
      case "healthy":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  const getProgressColor = (value: number) => {
    if (value < 50) return "bg-green-500"
    if (value < 80) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-8 rounded-2xl shadow-xl"
      >
        <div className="flex items-center space-x-4 mb-4">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            <Activity className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold">Performance Monitor</h1>
        </div>
        <p className="text-xl opacity-90">Real-time system health with weather-inspired insights</p>
      </motion.div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => {
          const WeatherIcon = getWeatherIcon(metric.weather)

          return (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">{metric.name}</CardTitle>
                  <motion.div
                    animate={{
                      rotate: metric.weather === "sunny" ? 360 : 0,
                      y: metric.weather === "cloudy" ? [0, -5, 0] : 0,
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: metric.weather === "sunny" ? Number.POSITIVE_INFINITY : 0,
                        ease: "linear",
                      },
                      y: { duration: 3, repeat: metric.weather === "cloudy" ? Number.POSITIVE_INFINITY : 0 },
                    }}
                  >
                    <WeatherIcon className={`h-4 w-4 ${getStatusColor(metric.status)}`} />
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-800 mb-2">{metric.value}%</div>
                  <Progress value={metric.value} className="mb-2" />
                  <p className="text-xs text-gray-600">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* System Health */}
      <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Server className="w-5 h-5 text-purple-600" />
            <span>System Health Dashboard</span>
          </CardTitle>
          <CardDescription>Monitor all system components with weather-themed status indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemHealth.map((system, index) => {
              const WeatherIcon = getWeatherIcon(system.weather)

              return (
                <motion.div
                  key={system.component}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{
                          rotate: system.weather === "sunny" ? 360 : 0,
                          scale: system.status === "healthy" ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          rotate: {
                            duration: 10,
                            repeat: system.weather === "sunny" ? Number.POSITIVE_INFINITY : 0,
                            ease: "linear",
                          },
                          scale: { duration: 2, repeat: system.status === "healthy" ? Number.POSITIVE_INFINITY : 0 },
                        }}
                      >
                        <WeatherIcon className={`w-6 h-6 ${getStatusColor(system.status)}`} />
                      </motion.div>
                      <h3 className="font-semibold text-gray-800">{system.component}</h3>
                    </div>
                    <Badge
                      variant={system.status === "healthy" ? "default" : "destructive"}
                      className={
                        system.status === "healthy"
                          ? "bg-green-100 text-green-700"
                          : system.status === "warning"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }
                    >
                      {system.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Uptime</p>
                      <p className="font-semibold text-gray-800">{system.uptime}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Response Time</p>
                      <p className="font-semibold text-gray-800">{system.responseTime}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Weather Forecast for Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Eye className="w-6 h-6" />
              <span>Performance Weather Forecast</span>
            </CardTitle>
            <CardDescription className="text-indigo-100">
              Predicted system performance for the next 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center bg-white/20 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="font-semibold mb-2">{day}</div>
                  <motion.div
                    animate={{
                      rotate: index % 3 === 0 ? 360 : 0,
                      y: index % 3 === 1 ? [0, -5, 0] : 0,
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: index % 3 === 0 ? Number.POSITIVE_INFINITY : 0, ease: "linear" },
                      y: { duration: 3, repeat: index % 3 === 1 ? Number.POSITIVE_INFINITY : 0 },
                    }}
                  >
                    {index % 3 === 0 ? (
                      <Sun className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                    ) : index % 3 === 1 ? (
                      <Cloud className="w-8 h-8 text-blue-200 mx-auto mb-2" />
                    ) : (
                      <CloudRain className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    )}
                  </motion.div>
                  <div className="text-sm mb-1">
                    {index % 3 === 0 ? "Optimal" : index % 3 === 1 ? "Good" : "Maintenance"}
                  </div>
                  <div className="text-xs opacity-75">
                    {index % 3 === 0 ? "95% uptime" : index % 3 === 1 ? "92% uptime" : "Scheduled work"}
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
