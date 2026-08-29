import React from "react"
import { ArrowRight, Phone } from "lucide-react"
import { TEMPLE_TOURS_DATA, SITE_CONFIG } from "../data/config"
import { Card } from "./ui/card"
import { Button } from "./ui/button"

export const TempleTours: React.FC = () => {
  return (
    <section id="darshan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1b4b8f] text-xs font-extrabold uppercase tracking-wider mb-3">
            Spiritual Darshan Trips
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12294d] tracking-tight">
            Sacred Temple Tours
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Dedicated pilgrimage packages designed around peace of mind, elder comfort, and flexible pooja timings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEMPLE_TOURS_DATA.map((tour) => (
            <Card
              key={tour.title}
              className="relative overflow-hidden border-0 bg-gradient-to-b from-[#1b4b8f] to-[#0a182e] text-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[240px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="text-4xl mb-4 filter drop-shadow-md">{tour.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                  {tour.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed">
                  {tour.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#ffb83d]">
                  Custom Itineraries
                </span>
                <a
                  href={SITE_CONFIG.whatsappUrl(`Hello, I would like to book a pilgrimage tour for ${tour.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-white hover:text-[#ffb83d] flex items-center gap-1 transition-colors"
                >
                  Book Darshan <ArrowRight size={13} />
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={SITE_CONFIG.telUrl}>
            <Button variant="outline" className="border-[#1b4b8f] text-[#1b4b8f]">
              <Phone size={16} /> Plan a Custom Temple Tour with Our Team
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
