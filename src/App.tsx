import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Fleet } from "./components/Fleet"
import { VisionMission } from "./components/VisionMission"
import { WhyUs } from "./components/WhyUs"
import { TempleTours } from "./components/TempleTours"
import { PricingCalculator } from "./components/PricingCalculator"
import { ContactForm } from "./components/ContactForm"
import { Footer } from "./components/Footer"
import { FloatingCTA } from "./components/FloatingCTA"

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#f5a623] selection:text-[#12294d]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <WhyUs />
        <VisionMission />
        <TempleTours />
        <PricingCalculator />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
