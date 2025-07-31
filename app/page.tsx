import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Events } from "@/components/events"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Events />
      <Testimonials />
      <CTA />
    </>
  )
}
