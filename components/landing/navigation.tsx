"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Menu, X, Settings, Bell, BarChart3 } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
              <Calendar className="relative w-8 h-8 text-white" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              EventHub Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/dashboard" icon={BarChart3}>
              Dashboard
            </NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/notifications" icon={Bell}>
              Notifications
            </NavLink>
            <NavLink href="/settings" icon={Settings}>
              Settings
            </NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild className="text-white hover:text-cyan-400">
              <Link href="/login">Login</Link>
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0"
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
            >
              <div className="py-4 space-y-4">
                <MobileNavLink href="/dashboard" icon={BarChart3}>
                  Dashboard
                </MobileNavLink>
                <MobileNavLink href="/events">Events</MobileNavLink>
                <MobileNavLink href="/notifications" icon={Bell}>
                  Notifications
                </MobileNavLink>
                <MobileNavLink href="/settings" icon={Settings}>
                  Settings
                </MobileNavLink>
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <Button variant="ghost" asChild className="w-full text-white">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild className="w-full bg-gradient-to-r from-cyan-500 to-purple-600">
                    <Link href="/register">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon?: any }) {
  return (
    <Link href={href} className="group relative">
      <motion.div
        whileHover={{ y: -2 }}
        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
      >
        {Icon && <Icon className="w-4 h-4" />}
        <span>{children}</span>
      </motion.div>
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}

function MobileNavLink({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon?: any }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </Link>
  )
}
