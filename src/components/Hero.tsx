import React from "react"
import { Phone, ArrowRight, ShieldCheck, Snowflake, Armchair } from "lucide-react"
import { SITE_CONFIG } from "../data/config"
import { Button } from "./ui/button"

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#12294d] to-[#0a182e] text-white pt-20 pb-28 md:pt-28 md:pb-36"
    >
      {/* Background Decorative Pattern & Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(47,109,196,0.3),rgba(255,255,255,0))]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#f5a623]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Rate Announcement Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-inner hover:bg-white/15 transition-all">
          <span className="text-base">🚐</span>
          <span className="text-xs sm:text-sm font-semibold text-slate-200">Force Urbania</span>
          <span className="text-slate-400">•</span>
          <span className="text-xs sm:text-sm font-bold text-[#ffb83d]">₹34/km Flat</span>
          <span className="text-slate-400">•</span>
          <span className="text-xs sm:text-sm text-slate-200">
            Daily <strong className="text-[#ffb83d]">₹9,500</strong>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Travel Anywhere in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb83d] to-[#f5a623]">India</span> with Supreme Comfort
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Luxury Force Urbania vans (<strong>9+1, 12+1 &amp; 16+1 seater</strong>) equipped with reclining push-back seats, powerful AC, onboard fridge, and trusted professional drivers.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href="#fleet">
            <Button size="lg" className="text-base font-bold shadow-lg shadow-amber-500/20">
              🚐 Explore Our Fleet <ArrowRight size={18} />
            </Button>
          </a>
          <a href={SITE_CONFIG.telUrl}>
            <Button
              variant="outline"
              size="lg"
              className="text-base font-bold border-white/40 text-white hover:bg-white hover:text-[#12294d] shadow-lg"
            >
              <Phone size={18} /> Call Now ({SITE_CONFIG.phoneDisplay})
            </Button>
          </a>
        </div>

        {/* Feature Highlights Pills */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#2f6dc4]/20 text-[#ffb83d]">
              <Armchair size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Seating</div>
              <div className="text-sm font-bold text-slate-100">Push-Back Luxury</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#2f6dc4]/20 text-[#ffb83d]">
              <Snowflake size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Climate</div>
              <div className="text-sm font-bold text-slate-100">Full AC &amp; Chiller</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#2f6dc4]/20 text-[#ffb83d]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Safety</div>
              <div className="text-sm font-bold text-slate-100">Verified Pro Drivers</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#2f6dc4]/20 text-[#ffb83d]">
              <span className="text-lg">🛣️</span>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Coverage</div>
              <div className="text-sm font-bold text-slate-100">All India Permits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
