import React from "react"
import { WHY_US_DATA } from "../data/config"
import { Card } from "./ui/card"

export const WhyUs: React.FC = () => {
  return (
    <section id="why" className="py-20 bg-[#f8f6f0] border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12294d]/10 text-[#12294d] text-xs font-extrabold uppercase tracking-wider mb-3">
            Why Travel With Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12294d] tracking-tight">
            Comfort, Safety &amp; Uncompromised Quality
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Every feature on our Force Urbania fleet is designed to elevate your journey from routine road travel into a luxury voyage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_DATA.map((item) => (
            <Card
              key={item.title}
              className="p-6 bg-white border-slate-200/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50/80 flex items-center justify-center text-3xl mb-4 shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-base font-extrabold text-[#12294d] mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
