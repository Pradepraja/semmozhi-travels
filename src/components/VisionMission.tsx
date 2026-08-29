import React from "react"
import { Sparkles, Target, Compass, Award } from "lucide-react"
import { Card } from "./ui/card"

export const VisionMission: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            Our Purpose &amp; Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12294d] tracking-tight">
            Vision &amp; Mission
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Driving excellence, passenger comfort, and unwavering reliability in every single journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="gradient-border-gold p-8 border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl shadow-sm">
                  🌟
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#c97d08] tracking-widest uppercase">
                    Our Vision
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#12294d]">
                    Inspiring Extraordinary Journeys
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-base">
                To stand as South India's premier choice for group travel by continuously elevating road journey standards—connecting families, pilgrims, and organizations through exceptional comfort, unwavering safety, and experiences that turn every trip into a cherished memory.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-dashed border-slate-200 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f6f0] border border-slate-200 text-xs font-bold text-[#12294d]">
                <Sparkles size={13} className="text-amber-500" /> Superior Fleet Comfort
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f6f0] border border-slate-200 text-xs font-bold text-[#12294d]">
                <Compass size={13} className="text-blue-500" /> Pan-India Journeys
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f6f0] border border-slate-200 text-xs font-bold text-[#12294d]">
                <Award size={13} className="text-emerald-500" /> Unmatched Reliability
              </span>
            </div>
          </Card>

          {/* Mission Card */}
          <Card className="gradient-border-blue p-8 border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center text-2xl shadow-sm">
                  🎯
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#1b4b8f] tracking-widest uppercase">
                    Our Mission
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#12294d]">
                    Empowering Seamless Travel
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-base">
                To be your dedicated travel partner on every route, ensuring each mile is smooth, stress-free, and punctual. We achieve this with our meticulously maintained Force Urbania vans, seasoned professional drivers, 100% transparent pricing, and a customer-first commitment.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-dashed border-slate-200 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f6f0] border border-slate-200 text-xs font-bold text-[#12294d]">
                <Award size={13} className="text-blue-500" /> Safe &amp; Pristine Vans
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f6f0] border border-slate-200 text-xs font-bold text-[#12294d]">
                <Sparkles size={13} className="text-amber-500" /> Courteous, Expert Drivers
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8f6f0] border border-slate-200 text-xs font-bold text-[#12294d]">
                <Target size={13} className="text-emerald-500" /> 100% Transparent Pricing
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
