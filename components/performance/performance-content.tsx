"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Activity, Zap, Cloud, Sun, CloudRain, TrendingUp, Server, Database } from "lucide-react"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"

const performanceData = [
  { time: "00:00", cpu: 45, memory: 62, network: 23 },
  { time: "04:00", cpu: 52, memory: 58, network: 31 },
  { time: "08:00", cpu: 78, memory: 71, network: 45 },
  { time: "12:00", cpu: 85, memory: 79, network: 52 },
  { time: "16:00", cpu: 92, memory: 84, network: 48 },
  { time: "20:00", cpu: 67, memory: 73, network: 38 },
]

const weatherPerformance = [
  { condition: "Sunny", uptime: 99.9, response: 120, errors: 0.1 },
  { condition: "Cloudy", uptime: 99.7, response: 145, errors: 0.3 },
  { condition: "Rainy", uptime: 99.5, response: 180, errors: 0.5 },
]

export function PerformanceContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Weather-themed Header */}
      <div className="bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <div className="flex items-center space-x-4 mb-4">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Activity className="w-12 h-12 text-white" />
            </motion.div>
            <div>
              <h1 className="text-4xl font-bold">Performance Dashboard</h1>
              <p className="text-xl opacity-90">Weather-optimized system monitoring</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto p-8">
        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-800">System Uptime</CardTitle>
                <Zap className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900">99.9%</div>
                <p className="text-xs text-green-700">Last 30 days</p>
                <Progress value={99.9} className="mt-2" />
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
                <CardTitle className="text-sm font-medium text-blue-800">Response Time</CardTitle>
                <Server className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">142ms</div>
                <p className="text-xs text-blue-700">Average response</p>
                <Progress value={85} className="mt-2" />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-800">Memory Usage</CardTitle>
                <Database className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900">73%</div>
                <p className="text-xs text-purple-700">8GB / 16GB used</p>
                <Progress value={73} className="mt-2" />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-orange-100 to-red-100 border-orange-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-orange-800">Error Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-900">0.2%</div>
                <p className="text-xs text-orange-700">Last 24 hours</p>
                <Progress value={2} className="mt-2" />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  <span>System Performance</span>
                </CardTitle>
                <CardDescription>Real-time system metrics over 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="cpu" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                    <Area
                      type="monotone"
                      dataKey="memory"
                      stackId="1"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="network"
                      stackId="1"
                      stroke="#f59e0b"
                      fill="#f59e0b"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
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
                  <span>Weather Impact Analysis</span>
                </CardTitle>
                <CardDescription>Performance metrics by weather conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weatherPerformance.map((item, index) => (
                    <motion.div
                      key={item.condition}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border"
                    >
                      <div className="flex items-center space-x-3">
                        {item.condition === "Sunny" && <Sun className="w-6 h-6 text-yellow-500" />}
                        {item.condition === "Cloudy" && <Cloud className="w-6 h-6 text-blue-500" />}
                        {item.condition === "Rainy" && <CloudRain className="w-6 h-6 text-gray-500" />}
                        <div>
                          <div className="font-semibold">{item.condition}</div>
                          <div className="text-sm text-gray-600">Weather condition</div>
                        </div>
                      </div>
                      <div className="flex space-x-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{item.uptime}%</div>
                          <div className="text-xs text-gray-500">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{item.response}ms</div>
                          <div className="text-xs text-gray-500">Response</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange-600">{item.errors}%</div>
                          <div className="text-xs text-gray-500">Errors</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Weather-Based Performance Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Weather-Optimized Performance Alerts</CardTitle>
              <CardDescription className="text-blue-100">
                Smart monitoring that adapts to weather conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-white/20 rounded-lg p-6 text-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sun className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Sunny Day Optimization</h3>
                  <p className="text-blue-100 mb-4">Peak performance mode activated</p>
                  <Badge className="bg-green-500 text-white">All Systems Go</Badge>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-white/20 rounded-lg p-6 text-center"
                >
                  <motion.div
                    animate={{ x: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Cloud className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Cloudy Weather Mode</h3>
                  <p className="text-blue-100 mb-4">Balanced resource allocation</p>
                  <Badge className="bg-blue-500 text-white">Stable</Badge>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="bg-white/20 rounded-lg p-6 text-center"
                >
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <CloudRain className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Rainy Day Protocol</h3>
                  <p className="text-blue-100 mb-4">Enhanced monitoring active</p>
                  <Badge className="bg-yellow-500 text-white">Monitoring</Badge>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
