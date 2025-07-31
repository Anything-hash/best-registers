import { Users, Calendar, Award, TrendingUp } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Active Members",
      description: "Professionals trust our platform",
    },
    {
      icon: Calendar,
      value: "500+",
      label: "Events Hosted",
      description: "Successful events completed",
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction Rate",
      description: "Attendees recommend us",
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Career Growth",
      description: "Report skill improvement",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
