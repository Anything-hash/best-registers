import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Calendar, Globe, Target, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former VP of Engineering at Google with 15+ years in tech leadership.",
      avatar: "/placeholder.svg?height=120&width=120",
      linkedin: "#",
    },
    {
      name: "Michael Chen",
      role: "Head of Events",
      bio: "Event management expert who has organized 500+ successful tech conferences.",
      avatar: "/placeholder.svg?height=120&width=120",
      linkedin: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Community",
      bio: "Community building specialist passionate about connecting professionals worldwide.",
      avatar: "/placeholder.svg?height=120&width=120",
      linkedin: "#",
    },
    {
      name: "David Kim",
      role: "Head of Technology",
      bio: "Full-stack engineer and former startup CTO with expertise in scalable platforms.",
      avatar: "/placeholder.svg?height=120&width=120",
      linkedin: "#",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in every event and interaction.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building meaningful connections between professionals worldwide.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and forward-thinking approaches.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making professional development accessible to everyone, everywhere.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">About EventHub</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to democratize professional development by connecting learners with world-class experts
              through premium events and experiences.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    EventHub was born from a simple observation: the best learning happens when passionate professionals
                    come together to share knowledge and experiences.
                  </p>
                  <p>
                    Founded in 2020 by a team of tech veterans, we started with a vision to create a platform where
                    anyone could access world-class professional development opportunities, regardless of their location
                    or background.
                  </p>
                  <p>
                    Today, we're proud to have facilitated over 500 events, connected 50,000+ professionals, and helped
                    countless individuals advance their careers through meaningful learning experiences.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="EventHub team collaboration"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the EventHub experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind EventHub's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Avatar className="w-24 h-24 mx-auto mb-6">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Mission</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              To empower professionals worldwide by providing access to transformative learning experiences that
              accelerate career growth and foster meaningful connections.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
                <p className="text-blue-100 text-sm">Building bridges between professionals globally</p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Learn</h3>
                <p className="text-blue-100 text-sm">Providing world-class educational experiences</p>
              </div>
              <div className="text-center">
                <Calendar className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Grow</h3>
                <p className="text-blue-100 text-sm">Accelerating professional development journeys</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
