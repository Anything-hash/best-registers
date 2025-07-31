import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer at Google",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The React workshop completely transformed how I approach component architecture. The hands-on exercises were incredibly valuable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Tech Lead at Microsoft",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "EventHub's conferences provide unmatched networking opportunities. I've made connections that have advanced my entire career.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager at Stripe",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The AI seminar opened my eyes to possibilities I never considered. The speakers were world-class and the content was cutting-edge.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "As a founder, the leadership conference gave me practical strategies I implemented immediately. ROI was incredible.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "UX Designer at Adobe",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The design thinking workshop changed how I approach user research. My team has seen measurable improvements in our process.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer at AWS",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The cloud architecture seminar was exactly what I needed to level up my skills. The practical examples were spot-on.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">What Our Attendees Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers with EventHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
