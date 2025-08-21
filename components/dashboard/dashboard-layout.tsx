"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, BarChart3, Settings, Bell, Menu, Home, Users, TrendingUp, LogOut, Cloud, Sun } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home, current: true },
    { name: "Events", href: "/events", icon: Calendar, current: false },
    { name: "Analytics", href: "/analytics", icon: BarChart3, current: false },
    { name: "Users", href: "/users", icon: Users, current: false },
    { name: "Performance", href: "/performance", icon: TrendingUp, current: false },
    { name: "Notifications", href: "/notifications", icon: Bell, current: false },
    { name: "Settings", href: "/settings", icon: Settings, current: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Weather Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Clouds */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-32 h-20 bg-white/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-32 right-20 w-24 h-16 bg-white/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-32 left-1/3 w-40 h-24 bg-white/35 rounded-full blur-sm"
        />

        {/* Subtle Rain Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-8 bg-gradient-to-b from-sky-300/20 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
              }}
              animate={{
                y: [0, 800],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-sky-900/20 backdrop-blur-sm lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white/90 backdrop-blur-xl border-r border-sky-200 lg:hidden shadow-2xl"
            >
              <SidebarContent navigation={navigation} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white/70 backdrop-blur-xl border-r border-sky-200 shadow-xl">
          <SidebarContent navigation={navigation} />
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Weather-themed Top bar */}
        <div className="sticky top-0 z-30 flex h-16 items-center gap-x-4 border-b border-sky-200 bg-white/80 backdrop-blur-xl px-4 sm:gap-x-6 sm:px-6 lg:px-8 shadow-sm">
          <button type="button" className="-m-2.5 p-2.5 text-sky-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1 items-center">
              <div className="flex items-center space-x-4 text-sky-600">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sun className="h-5 w-5 text-yellow-500" />
                </motion.div>
                <span className="text-sm font-medium">Sunny, 24°C</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}>
                  <Cloud className="h-4 w-4 text-sky-400 ml-4" />
                </motion.div>
                <span className="text-sm">Perfect weather for events!</span>
              </div>
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <Button variant="ghost" size="icon" className="text-sky-700 hover:bg-sky-100 relative">
                <Bell className="h-5 w-5" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                />
              </Button>
              <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-sky-200" />
              <Avatar className="h-8 w-8 ring-2 ring-sky-200 shadow-md">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-sky-100 to-blue-100 text-sky-700">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-10 relative z-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

function SidebarContent({ navigation }: { navigation: any[] }) {
  return (
    <>
      <div className="flex h-16 shrink-0 items-center px-6">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-sm opacity-75"
            />
            <Calendar className="relative w-8 h-8 text-sky-600" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            EventHub
          </span>
        </Link>
      </div>

      {/* Weather Status */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-lg p-3 border border-sky-200">
          <div className="flex items-center space-x-2 mb-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sun className="w-4 h-4 text-yellow-500" />
            </motion.div>
            <span className="text-sm font-medium text-sky-700">Weather Status</span>
          </div>
          <p className="text-xs text-sky-600">Perfect conditions for events today!</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col px-6">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`group flex gap-x-3 rounded-xl p-3 text-sm leading-6 font-semibold transition-all duration-300 ${
                      item.current
                        ? "bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 border border-sky-200 shadow-md"
                        : "text-sky-600 hover:text-sky-700 hover:bg-sky-50 hover:shadow-sm"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                    </motion.div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <Button variant="ghost" className="w-full justify-start text-sky-600 hover:text-sky-700 hover:bg-sky-50">
              <LogOut className="h-5 w-5 mr-3" />
              Sign out
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}
