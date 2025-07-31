import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin, ArrowRight } from "lucide-react"

export function Events() {
  const events = [
    {
      id: 1,
      title: "Advanced React Workshop",
      description: "Master React hooks, context, and performance optimization techniques in this hands-on workshop.",
      type: "Workshop",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      attendees: 45,
      maxAttendees: 50,
      price: "$299",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "AI in Web Development Seminar",
      description: "Explore how artificial intelligence is transforming web development and user experiences.",
      type: "Seminar",
      date: "March 22, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      attendees: 128,
      maxAttendees: 200,
      price: "$99",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "Tech Leadership Conference 2024",
      description: "Join industry leaders discussing the future of technology and leadership strategies.",
      type: "Conference",
      date: "April 5-7, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "New York, NY",
      attendees: 892,
      maxAttendees: 1000,
      price: "$599",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these amazing learning opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <Card
              key={event.id}
              className={`overflow-hidden hover:shadow-lg transition-shadow ${event.featured ? "ring-2 ring-blue-500" : ""}`}
            >
              {event.featured && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">Featured Event</div>
              )}

              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <Badge
                  className="absolute top-4 left-4"
                  variant={
                    event.type === "Workshop" ? "default" : event.type === "Seminar" ? "secondary" : "destructive"
                  }
                >
                  {event.type}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="text-base">{event.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees}/{event.maxAttendees} registered
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold text-blue-600">{event.price}</div>
                  <Button asChild>
                    <Link href={`/register?event=${event.id}`}>
                      Register
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/events">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
