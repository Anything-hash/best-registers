import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, MapPin, Search } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Advanced React Workshop",
      description:
        "Master React hooks, context, and performance optimization techniques in this comprehensive hands-on workshop.",
      type: "Workshop",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      attendees: 45,
      maxAttendees: 50,
      price: "$299",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
      category: "Development",
    },
    {
      id: 2,
      title: "AI in Web Development Seminar",
      description:
        "Explore how artificial intelligence is transforming web development and creating better user experiences.",
      type: "Seminar",
      date: "March 22, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      attendees: 128,
      maxAttendees: 200,
      price: "$99",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
      category: "AI/ML",
    },
    {
      id: 3,
      title: "Tech Leadership Conference 2024",
      description: "Join industry leaders discussing the future of technology and effective leadership strategies.",
      type: "Conference",
      date: "April 5-7, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "New York, NY",
      attendees: 892,
      maxAttendees: 1000,
      price: "$599",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
      category: "Leadership",
    },
    {
      id: 4,
      title: "UX Design Bootcamp",
      description: "Intensive 3-day bootcamp covering user research, prototyping, and design systems.",
      type: "Bootcamp",
      date: "March 28-30, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Los Angeles, CA",
      attendees: 32,
      maxAttendees: 40,
      price: "$799",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
      category: "Design",
    },
    {
      id: 5,
      title: "Cloud Architecture Seminar",
      description: "Learn best practices for designing scalable and secure cloud infrastructure.",
      type: "Seminar",
      date: "April 12, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Seattle, WA",
      attendees: 67,
      maxAttendees: 100,
      price: "$199",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
      category: "DevOps",
    },
    {
      id: 6,
      title: "Product Management Workshop",
      description: "Master product strategy, roadmapping, and stakeholder management in this intensive workshop.",
      type: "Workshop",
      date: "April 18, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Austin, TX",
      attendees: 28,
      maxAttendees: 35,
      price: "$399",
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
      category: "Product",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Events</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover workshops, seminars, and conferences designed to accelerate your professional growth
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search events..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="seminar">Seminar</SelectItem>
                <SelectItem value="conference">Conference</SelectItem>
                <SelectItem value="bootcamp">Bootcamp</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="ai-ml">AI/ML</SelectItem>
                <SelectItem value="leadership">Leadership</SelectItem>
                <SelectItem value="devops">DevOps</SelectItem>
                <SelectItem value="product">Product</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="san-francisco">San Francisco</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="seattle">Seattle</SelectItem>
                <SelectItem value="austin">Austin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                <Badge className="absolute top-4 right-4" variant="outline">
                  {event.category}
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
                    <Link href={`/register?event=${event.id}`}>Register Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Events
          </Button>
        </div>
      </div>
    </div>
  )
}
