import React from "react"
import { ArrowRight } from "lucide-react"
import { SERVICES_DATA } from "../data/config"
import { Card } from "./ui/card"

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1b4b8f] text-xs font-extrabold uppercase tracking-wider mb-3">
            Our Trip Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12294d] tracking-tight">
            Tailored Journeys for Every Occasion
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From local family functions to grand interstate pilgrimages, experience seamless travel at unmatched pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <a key={service.title} href="#pricing" className="group block">
              <Card className="h-full border border-slate-200/90 hover:border-[#2f6dc4]/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 p-6 bg-gradient-to-b from-white to-slate-50/50 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:bg-[#1b4b8f] group-hover:text-white transition-all shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#12294d] mb-2 group-hover:text-[#1b4b8f] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#1b4b8f] group-hover:text-[#2f6dc4]">
                  <span>Book &amp; Enquire</span>
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
