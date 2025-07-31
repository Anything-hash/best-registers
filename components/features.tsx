import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Award, Shield, Zap, Globe, Video, MessageSquare, BarChart } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry leaders and certified professionals with years of experience.",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose from multiple time slots and formats that fit your busy schedule.",
    },
    {
      icon: Video,
      title: "Live & Recorded",
      description: "Attend live sessions or access recorded content anytime, anywhere.",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn verified certificates upon completion to showcase your new skills.",
    },
    {
      icon: MessageSquare,
      title: "Interactive Q&A",
      description: "Engage directly with instructors and peers through live chat and discussions.",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with professionals from around the world and expand your network.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data and payments are protected with enterprise-grade security.",
    },
    {
      icon: BarChart,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and insights.",
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Get immediate access to materials and resources upon registration.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose EventHub?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide everything you need for a world-class learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
