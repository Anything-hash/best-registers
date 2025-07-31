"use client"

import { motion } from "framer-motion"
import { Calendar, Users, TrendingUp, Star, Bell, Settings } from "lucide-react"
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
  },
  {
    title: "Network Connections",
    value: "248",
    change: "+15 this week",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Engagement Score",
    value: "94%",
    change: "+5% improvement",
    icon: TrendingUp,
    color: "text-purple-600",
  },
  {
    title: "Average Rating",
    value: "4.8",
    change: "Excellent feedback",
    icon: Star,
    color: "text-yellow-600",
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
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    date: "Mar 20, 2024",
    time: "2:00 PM",
    location: "New York, NY",
    status: "pending",
  },
  {
    id: 3,
    title: "Creative Design Workshop",
    date: "Mar 25, 2024",
    time: "10:00 AM",
    location: "Los Angeles, CA",
    status: "confirmed",
  },
]

export function DashboardContent() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 👋</h1>
        <p className="text-purple-100">You have 3 upcoming events and 5 new recommendations waiting for you.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-xs text-green-600 dark:text-green-400">{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* AI Recommendations */}
      <AIRecommendations />

      {/* Upcoming Events */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {event.date} at {event.time} • {event.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={event.status === "confirmed" ? "default" : "secondary"}
                      className={event.status === "confirmed" ? "bg-green-100 text-green-800" : ""}
                    >
                      {event.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Button className="h-20 flex-col gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Calendar className="h-6 w-6" />
                Browse Events
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                <Bell className="h-6 w-6" />
                Notifications
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                <Settings className="h-6 w-6" />
                Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
