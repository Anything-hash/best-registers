"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Bell, Shield, Palette, CreditCard, Save, Upload, Moon, Sun, Monitor } from "lucide-react"

export function SettingsContent() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
    marketing: false,
  })

  const [theme, setTheme] = useState("dark")

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-2">Manage your account settings and preferences.</p>
      </motion.div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-white/5 border-white/10">
          <TabsTrigger value="profile" className="data-[state=active]:bg-white/10">
            <User className="w-4 h-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-white/10">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="appearance" className="data-[state=active]:bg-white/10">
            <Palette className="w-4 h-4 mr-2" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-white/10">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-white/10">
            <CreditCard className="w-4 h-4 mr-2" />
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Profile Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Update your personal information and profile settings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                      <Upload className="w-4 h-4 mr-2" />
                      Change Avatar
                    </Button>
                    <p className="text-sm text-gray-400">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First Name
                    </Label>
                    <Input id="firstName" defaultValue="John" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last Name
                    </Label>
                    <Input id="lastName" defaultValue="Doe" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      defaultValue="+1 (555) 123-4567"
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-white">
                    Bio
                  </Label>
                  <textarea
                    id="bio"
                    rows={4}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
                    placeholder="Tell us about yourself..."
                    defaultValue="Passionate event organizer with 5+ years of experience in creating memorable experiences."
                  />
                </div>

                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Notification Preferences</CardTitle>
                <CardDescription className="text-gray-400">
                  Choose how you want to be notified about events and updates.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    key: "email",
                    title: "Email Notifications",
                    description: "Receive notifications via email",
                    icon: "📧",
                  },
                  {
                    key: "push",
                    title: "Push Notifications",
                    description: "Receive push notifications in your browser",
                    icon: "🔔",
                  },
                  {
                    key: "sms",
                    title: "SMS Notifications",
                    description: "Receive important updates via SMS",
                    icon: "📱",
                  },
                  {
                    key: "marketing",
                    title: "Marketing Communications",
                    description: "Receive promotional emails and offers",
                    icon: "📢",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, [item.key]: checked }))}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Appearance Settings</CardTitle>
                <CardDescription className="text-gray-400">
                  Customize the look and feel of your dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-white text-base font-medium">Theme</Label>
                  <p className="text-sm text-gray-400 mb-4">Choose your preferred theme</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "light", label: "Light", icon: Sun },
                      { value: "dark", label: "Dark", icon: Moon },
                      { value: "system", label: "System", icon: Monitor },
                    ].map((themeOption) => (
                      <button
                        key={themeOption.value}
                        onClick={() => setTheme(themeOption.value)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          theme === themeOption.value
                            ? "border-cyan-400 bg-cyan-400/10"
                            : "border-white/20 bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        <themeOption.icon className="w-6 h-6 text-white mx-auto mb-2" />
                        <p className="text-white text-sm font-medium">{themeOption.label}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-white text-base font-medium">Accent Color</Label>
                  <p className="text-sm text-gray-400 mb-4">Choose your preferred accent color</p>
                  <div className="flex space-x-3">
                    {[
                      "from-blue-500 to-cyan-500",
                      "from-purple-500 to-pink-500",
                      "from-green-500 to-emerald-500",
                      "from-orange-500 to-red-500",
                      "from-yellow-500 to-orange-500",
                      "from-indigo-500 to-purple-500",
                    ].map((gradient, index) => (
                      <button
                        key={index}
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradient} border-2 border-white/20 hover:border-white/40 transition-all hover:scale-110`}
                      />
                    ))}
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Password & Security</CardTitle>
                <CardDescription className="text-gray-400">Manage your password and security settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword" className="text-white">
                      Current Password
                    </Label>
                    <Input id="currentPassword" type="password" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-white">
                      New Password
                    </Label>
                    <Input id="newPassword" type="password" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white">
                      Confirm New Password
                    </Label>
                    <Input id="confirmPassword" type="password" className="bg-white/10 border-white/20 text-white" />
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  Update Password
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Two-Factor Authentication</CardTitle>
                <CardDescription className="text-gray-400">
                  Add an extra layer of security to your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <div>
                    <h4 className="text-white font-medium">SMS Authentication</h4>
                    <p className="text-sm text-gray-400">Receive codes via SMS</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    Enabled
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                  <div>
                    <h4 className="text-white font-medium">Authenticator App</h4>
                    <p className="text-sm text-gray-400">Use an authenticator app</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Setup
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Current Plan</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage your subscription and billing information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Pro Plan</h3>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white">Active</Badge>
                  </div>
                  <p className="text-gray-300 mb-4">Unlimited events, advanced analytics, and priority support.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-white">
                      $29<span className="text-lg text-gray-400">/month</span>
                    </span>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                      Change Plan
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-4">Payment Method</h4>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
                        <div>
                          <p className="text-white font-medium">•••• •••• •••• 4242</p>
                          <p className="text-sm text-gray-400">Expires 12/25</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                        Update
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-4">Billing History</h4>
                  <div className="space-y-3">
                    {[
                      { date: "Dec 1, 2024", amount: "$29.00", status: "Paid" },
                      { date: "Nov 1, 2024", amount: "$29.00", status: "Paid" },
                      { date: "Oct 1, 2024", amount: "$29.00", status: "Paid" },
                    ].map((invoice, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <div>
                          <p className="text-white font-medium">{invoice.date}</p>
                          <p className="text-sm text-gray-400">Pro Plan</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium">{invoice.amount}</p>
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                            {invoice.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
