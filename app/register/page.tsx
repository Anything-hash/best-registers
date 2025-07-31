import { RegistrationForm } from "@/components/registration-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Event Registration</h1>
            <p className="text-lg text-gray-600">Join us for an amazing learning experience</p>
          </div>
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}
