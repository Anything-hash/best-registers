"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, TrendingUp, AlertCircle, CheckCircle, Clock, Trash2, Settings } from "lucide-react"

export function NotificationsContent() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "event",
      title: "New Event Registration",
      message: "Sarah Johnson registered for 'Tech Conference 2024'",
      time: "2 minutes ago",
      read: false,
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      type: "system",
      title: "System Update Complete",
      message: "Your dashboard has been updated with new features",
      time: "1 hour ago",
      read: false,
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      type: "alert",
      title: "Payment Failed",
      message: "Monthly subscription payment could not be processed",
      time: "3 hours ago",
      read: true,
      icon: AlertCircle,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 4,
      type: "event",
      title: "Event Capacity Reached",
      message: "'AI Workshop Series' has reached maximum capacity",
      time: "5 hours ago",
      read: true,
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 5,
      type: "analytics",
      title: "Weekly Report Available",
      message: "Your weekly analytics report is ready for review",
      time: "1 day ago",
      read: true,
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Notifications</h1>
          <p className="text-gray-400 mt-2">
            Stay updated with your latest activities and alerts
            {unreadCount > 0 && (
              <Badge className="ml-2 bg-gradient-to-r from-cyan-500 to-purple-600">{unreadCount} unread</Badge>
            )}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-white/5 border-white/10">
          <TabsTrigger value="all" className="data-[state=active]:bg-white/10">
            All ({notifications.length})
          </TabsTrigger>
          <TabsTrigger value="unread" className="data-[state=active]:bg-white/10">
            Unread ({unreadCount})
          </TabsTrigger>
          <TabsTrigger value="event" className="data-[state=active]:bg-white/10">
            Events
          </TabsTrigger>
          <TabsTrigger value="system" className="data-[state=active]:bg-white/10">
            System
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <AnimatePresence>
            {notifications.map((notification, index) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                index={index}
                onMarkAsRead={markAsRead}
                onDelete={deleteNotification}
              />
            ))}
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          <AnimatePresence>
            {notifications
              .filter((n) => !n.read)
              .map((notification, index) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  index={index}
                  onMarkAsRead={markAsRead}
                  onDelete={deleteNotification}
                />
              ))}
          </AnimatePresence>
          {unreadCount === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">All caught up!</h3>
              <p className="text-gray-400">You have no unread notifications.</p>
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="event" className="space-y-4">
          <AnimatePresence>
            {notifications
              .filter((n) => n.type === "event")
              .map((notification, index) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  index={index}
                  onMarkAsRead={markAsRead}
                  onDelete={deleteNotification}
                />
              ))}
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <AnimatePresence>
            {notifications
              .filter((n) => n.type === "system")
              .map((notification, index) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  index={index}
                  onMarkAsRead={markAsRead}
                  onDelete={deleteNotification}
                />
              ))}
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NotificationCard({
  notification,
  index,
  onMarkAsRead,
  onDelete,
}: {
  notification: any
  index: number
  onMarkAsRead: (id: number) => void
  onDelete: (id: number) => void
}) {
  const Icon = notification.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <Card
        className={`bg-white/5 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all duration-300 ${
          !notification.read ? "border-l-4 border-l-cyan-400" : ""
        }`}
      >
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-full bg-gradient-to-r ${notification.color} bg-opacity-20`}>
              <Icon className="w-5 h-5 text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className={`font-semibold ${notification.read ? "text-gray-300" : "text-white"}`}>
                  {notification.title}
                </h3>
                <div className="flex items-center space-x-2">
                  {!notification.read && <div className="w-2 h-2 bg-cyan-400 rounded-full" />}
                  <span className="text-xs text-gray-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {notification.time}
                  </span>
                </div>
              </div>

              <p className={`text-sm ${notification.read ? "text-gray-400" : "text-gray-300"} mb-4`}>
                {notification.message}
              </p>

              <div className="flex items-center space-x-2">
                {!notification.read && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onMarkAsRead(notification.id)}
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Mark as read
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(notification.id)}
                  className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                >
                  <Trash2 className="w-3 h-3 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
