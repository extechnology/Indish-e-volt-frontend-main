import HeroSection from '../components/sections/HeroSection'
import HowItWorksSection from '../components/sections/AppShowcaseSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import StatsAndTestimonialsSection from '../components/sections/StatsAndTestimonialsSection'
import NetworkShowcaseSection from '../components/sections/NetworkShowcaseSection'
import SustainabilitySection from '../components/sections/SustainabilitySection'
import PricingCTASection from '../components/sections/PricingCTASection'

export default function Index() {
  return (
    <div className="w-full overflow-hidden">
      {/* Section 1: Hero – fullscreen with left-aligned headline */}
      <HeroSection />

      {/* Section 2: How It Works – 3-step image cards */}
      <HowItWorksSection />

      {/* Section 3: Why Choose Us – split layout with images and feature points */}
      <WhyChooseUsSection />

      {/* Section 4: Stats & Testimonials – animated counters + dark testimonial cards */}
      <StatsAndTestimonialsSection />

      {/* Section 5: Network Showcase – image grid gallery */}
      <NetworkShowcaseSection />

      {/* Section 6: 100% Solar & Renewable Clean Energy Lifecycle */}
      <SustainabilitySection />

      {/* Section 7: Final CTA */}
      <PricingCTASection />
    </div>
  )
}
