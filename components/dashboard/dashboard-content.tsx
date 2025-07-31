"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Users,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  MoreHorizontal,
} from "lucide-react"

export function DashboardContent() {
  const stats = [
    {
      title: "Total Events",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Active Users",
      value: "45,231",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Revenue",
      value: "$89,432",
      change: "+23.1%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Growth Rate",
      value: "94.3%",
      change: "-2.4%",
      trend: "down",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
    },
  ]

  const recentEvents = [
    { name: "Tech Conference 2024", attendees: 1250, status: "Live", revenue: "$12,500" },
    { name: "AI Workshop Series", attendees: 890, status: "Upcoming", revenue: "$8,900" },
    { name: "Startup Pitch Night", attendees: 450, status: "Completed", revenue: "$4,500" },
    { name: "Design Thinking Bootcamp", attendees: 320, status: "Live", revenue: "$6,400" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-2">Welcome back! Here's what's happening with your events.</p>
        </div>
        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Event
        </Button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-20`}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="flex items-center text-xs mt-1">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3 text-green-400 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-400 mr-1" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-400" : "text-red-400"}>{stat.change}</span>
                  <span className="text-gray-400 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Revenue Overview</CardTitle>
              <CardDescription className="text-gray-400">Monthly revenue for the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[65, 45, 78, 52, 89, 94].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-lg flex-1 min-h-[20px]"
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-4">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Events */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white">Recent Events</CardTitle>
                <CardDescription className="text-gray-400">Your latest event activities</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentEvents.map((event, index) => (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{event.name}</h4>
                    <p className="text-sm text-gray-400">{event.attendees} attendees</p>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{event.revenue}</div>
                    <div
                      className={`text-xs px-2 py-1 rounded-full ${
                        event.status === "Live"
                          ? "bg-green-500/20 text-green-400"
                          : event.status === "Upcoming"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {event.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="bg-white/5 backdrop-blur-lg border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Performance Metrics</CardTitle>
            <CardDescription className="text-gray-400">Key performance indicators for your events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { label: "Event Completion Rate", value: 94, color: "from-green-500 to-emerald-500" },
              { label: "User Satisfaction", value: 87, color: "from-blue-500 to-cyan-500" },
              { label: "Revenue Growth", value: 76, color: "from-purple-500 to-pink-500" },
              { label: "Market Reach", value: 82, color: "from-orange-500 to-red-500" },
            ].map((metric, index) => (
              <div key={metric.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{metric.label}</span>
                  <span className="text-white font-medium">{metric.value}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.value}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                    className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
