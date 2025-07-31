"use client"

import { useState } from "react"
import { useActionState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Loader2, User, Mail, Phone, Calendar, Code } from "lucide-react"
import { submitRegistration } from "@/app/actions/registration"

export function RegistrationForm() {
  const [state, formAction, pending] = useActionState(submitRegistration, undefined)
  const [selectedEvent, setSelectedEvent] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("")

  if (state?.success) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h2 className="text-2xl font-bold text-green-700">Registration Successful!</h2>
            <p className="text-gray-600">Thank you for registering. We'll send you more details via email.</p>
            <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">
              Register Another Person
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full shadow-xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-2xl font-bold text-center">Registration Form</CardTitle>
        <CardDescription className="text-center text-base">
          Please fill out all required fields to complete your registration
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form action={formAction} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              className="h-11"
              disabled={pending}
            />
            {state?.errors?.name && <p className="text-sm text-red-600">{state.errors.name[0]}</p>}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              className="h-11"
              disabled={pending}
            />
            {state?.errors?.email && <p className="text-sm text-red-600">{state.errors.email[0]}</p>}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter 10-digit phone number"
              required
              pattern="[0-9]{10}"
              className="h-11"
              disabled={pending}
            />
            {state?.errors?.phone && <p className="text-sm text-red-600">{state.errors.phone[0]}</p>}
            <p className="text-xs text-gray-500">Format: 1234567890 (10 digits)</p>
          </div>

          {/* Event Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Select Event *
            </Label>
            <Select name="event" required disabled={pending} onValueChange={setSelectedEvent}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Choose an event" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="workshop">Workshop - Hands-on Learning</SelectItem>
                <SelectItem value="seminar">Seminar - Expert Talks</SelectItem>
                <SelectItem value="conference">Conference - Industry Leaders</SelectItem>
                <SelectItem value="bootcamp">Bootcamp - Intensive Training</SelectItem>
              </SelectContent>
            </Select>
            {state?.errors?.event && <p className="text-sm text-red-600">{state.errors.event[0]}</p>}
          </div>

          {/* Favorite Language */}
          <div className="space-y-3">
            <Label className="text-sm font-medium flex items-center gap-2">
              <Code className="h-4 w-4" />
              Favorite Web Technology *
            </Label>
            <RadioGroup
              name="language"
              required
              disabled={pending}
              onValueChange={setSelectedLanguage}
              className="grid grid-cols-1 gap-3"
            >
              <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="HTML" id="html" />
                <Label htmlFor="html" className="flex-1 cursor-pointer">
                  HTML - Structure & Markup
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="CSS" id="css" />
                <Label htmlFor="css" className="flex-1 cursor-pointer">
                  CSS - Styling & Design
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="JavaScript" id="javascript" />
                <Label htmlFor="javascript" className="flex-1 cursor-pointer">
                  JavaScript - Interactivity & Logic
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="React" id="react" />
                <Label htmlFor="react" className="flex-1 cursor-pointer">
                  React - Modern UI Framework
                </Label>
              </div>
            </RadioGroup>
            {state?.errors?.language && <p className="text-sm text-red-600">{state.errors.language[0]}</p>}
          </div>

          {/* Error Message */}
          {state?.message && !state?.success && (
            <Alert variant="destructive">
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full h-12 text-base font-medium" disabled={pending}>
            {pending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registering...
              </>
            ) : (
              "Complete Registration"
            )}
          </Button>
        </form>

        {/* Additional Info */}
        <div className="text-center text-sm text-gray-500 pt-4 border-t">
          <p>By registering, you agree to receive event updates via email.</p>
        </div>
      </CardContent>
    </Card>
  )
}
