"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, UserPlus, Cloud, Sun, CloudRain, MapPin, Calendar } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "New York",
    weather: "sunny",
    events: 12,
    joined: "2024-01-15",
    status: "active",
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "San Francisco",
    weather: "cloudy",
    events: 8,
    joined: "2024-02-20",
    status: "active",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Seattle",
    weather: "rainy",
    events: 15,
    joined: "2024-01-10",
    status: "inactive",
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    location: "Miami",
    weather: "sunny",
    events: 6,
    joined: "2024-03-05",
    status: "active",
  },
]

export function UsersContent() {
  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case "sunny":
        return <Sun className="w-4 h-4 text-yellow-500" />
      case "cloudy":
        return <Cloud className="w-4 h-4 text-blue-500" />
      case "rainy":
        return <CloudRain className="w-4 h-4 text-gray-500" />
      default:
        return <Sun className="w-4 h-4 text-yellow-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Weather-themed Header */}
      <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-500 text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Users className="w-12 h-12 text-white" />
              </motion.div>
              <div>
                <h1 className="text-4xl font-bold">User Management</h1>
                <p className="text-xl opacity-90">Weather-aware user insights</p>
              </div>
            </div>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              <UserPlus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto p-8">
        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-yellow-800">Active Users</CardTitle>
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
                <CardTitle className="text-sm font-medium text-blue-800">New Signups</CardTitle>
                <Cloud className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">234</div>
                <p className="text-xs text-blue-700">+8% from last week</p>
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
                <CardTitle className="text-sm font-medium text-gray-800">Inactive Users</CardTitle>
                <CloudRain className="h-4 w-4 text-gray-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">156</div>
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
                <CardTitle className="text-sm font-medium text-green-800">Premium Users</CardTitle>
                <Users className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900">892</div>
                <p className="text-xs text-green-700">+15% from last month</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Users List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>User Directory</span>
              </CardTitle>
              <CardDescription>Manage your community with weather-aware insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user, index) => (
                  <motion.div
                    key={user.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <MapPin className="w-3 h-3" />
                            <span>{user.location}</span>
                            {getWeatherIcon(user.weather)}
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            <span>{user.events} events</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                      <Button variant="outline" size="sm">
                        View Profile
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
