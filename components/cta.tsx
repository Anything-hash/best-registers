import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white">
            <Sparkles className="mr-2 h-4 w-4" />
            Limited Time Offer
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white">Ready to Transform Your Career?</h2>

          <p className="text-xl text-blue-100 leading-relaxed">
            Join EventHub today and get access to premium events, expert instructors, and a global community of
            professionals. Your future self will thank you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-base">
              <Link href="/register">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-base bg-transparent"
            >
              <Link href="/events">Browse Events</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-blue-100">
            <div>✓ 30-day money-back guarantee</div>
            <div>✓ Instant access</div>
            <div>✓ Certificate included</div>
          </div>
        </div>
      </div>
    </section>
  )
}
