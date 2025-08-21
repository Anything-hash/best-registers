"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Search, Filter, Sun, Cloud, CloudRain, MapPin } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    location: "New York",
    weather: "sunny",
    events: 12,
    status: "active",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    location: "London",
    weather: "cloudy",
    events: 8,
    status: "active",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol@example.com",
    location: "Seattle",
    weather: "rainy",
    events: 5,
    status: "inactive",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@example.com",
    location: "Miami",
    weather: "sunny",
    events: 15,
    status: "active",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 5,
    name: "Eva Brown",
    email: "eva@example.com",
    location: "Portland",
    weather: "cloudy",
    events: 9,
    status: "active",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank@example.com",
    location: "Chicago",
    weather: "rainy",
    events: 3,
    status: "inactive",
    avatar: "/placeholder-user.jpg",
  },
]

export function UsersContent() {
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

  const getWeatherBg = (weather: string) => {
    switch (weather) {
      case "sunny":
        return "from-yellow-100 to-orange-100 border-yellow-200"
      case "cloudy":
        return "from-blue-100 to-cyan-100 border-blue-200"
      case "rainy":
        return "from-gray-100 to-slate-100 border-gray-200"
      default:
        return "from-yellow-100 to-orange-100 border-yellow-200"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-xl"
      >
        <div className="flex items-center space-x-4 mb-4">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <Users className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold">User Management</h1>
        </div>
        <p className="text-xl opacity-90">Manage users with weather-aware insights</p>
      </motion.div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-400 w-4 h-4" />
          <Input
            placeholder="Search users..."
            className="pl-10 bg-white/70 backdrop-blur-sm border-sky-200 focus:border-sky-400"
          />
        </div>
        <Button variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-50 bg-white/70 backdrop-blur-sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">Total Users</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">2,847</div>
              <p className="text-xs text-green-700">+12% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-yellow-800">Active Users</CardTitle>
              <Sun className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-900">2,234</div>
              <p className="text-xs text-yellow-700">+8% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">New This Month</CardTitle>
              <Cloud className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">234</div>
              <p className="text-xs text-blue-700">+15% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-gray-100 to-slate-100 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-800">Inactive Users</CardTitle>
              <CloudRain className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">613</div>
              <p className="text-xs text-gray-700">-5% from last month</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Users List */}
      <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <span>User Directory</span>
          </CardTitle>
          <CardDescription>Manage your users with weather-aware location data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user, index) => {
              const WeatherIcon = getWeatherIcon(user.weather)

              return (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-4 rounded-lg border bg-gradient-to-r ${getWeatherBg(user.weather)} hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12 ring-2 ring-white shadow-md">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-white text-gray-700">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-semibold text-gray-800">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <MapPin className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-500">{user.location}</span>
                          <motion.div
                            animate={{ rotate: user.weather === "sunny" ? 360 : 0 }}
                            transition={{
                              duration: 10,
                              repeat: user.weather === "sunny" ? Number.POSITIVE_INFINITY : 0,
                              ease: "linear",
                            }}
                          >
                            <WeatherIcon className={`w-3 h-3 ${getWeatherColor(user.weather)}`} />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-800">{user.events} events</p>
                        <Badge
                          variant={user.status === "active" ? "default" : "secondary"}
                          className={
                            user.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                          }
                        >
                          {user.status}
                        </Badge>
                      </div>

                      <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 bg-transparent">
                        View
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
