import React from "react"
import { Phone, MessageCircle, Check, Users } from "lucide-react"
import { FLEET_DATA, SITE_CONFIG } from "../data/config"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-20 bg-[#f8f6f0] border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12294d]/10 text-[#12294d] text-xs font-extrabold uppercase tracking-wider mb-3">
            Our Force Urbania Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12294d] tracking-tight">
            Premium Vans for Every Group Size
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Engineered for pure highway stability, ultra-quiet cabin acoustics, and executive comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET_DATA.map((van) => (
            <Card
              key={van.id}
              className="overflow-hidden border-slate-200 bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 group">
                  <img
                    src={van.image}
                    alt={van.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="navy" className="font-extrabold shadow-md flex items-center gap-1.5">
                      <Users size={13} /> {van.seats}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#12294d] tracking-tight">
                    {van.title}
                  </h3>

                  {/* Feature Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {van.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1b4b8f] bg-blue-50/90 border border-blue-100 rounded-full px-2.5 py-0.5"
                      >
                        <Check size={12} className="text-[#2f6dc4]" /> {feature}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {van.description}
                  </p>
                </div>
              </div>

              {/* Pricing & Booking Row */}
              <div className="p-6 pt-0">
                <div className="border-t border-dashed border-slate-200 pt-4 mb-5 grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500 uppercase">Rent per km</div>
                    <div className="text-lg font-black text-[#12294d]">
                      ₹{van.rateKm} <span className="text-xs font-normal text-slate-500">/ km</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500 uppercase">Daily Package</div>
                    <div className="text-lg font-black text-[#1b4b8f]">
                      ₹{van.dailyRate.toLocaleString("en-IN")}{" "}
                      <span className="text-xs font-normal text-slate-500">/ day</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={SITE_CONFIG.whatsappUrl(`Hello, I would like to book the ${van.title} (${van.seats}) for my trip.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full"
                  >
                    <Button variant="whatsapp" size="sm" className="w-full text-xs">
                      <MessageCircle size={14} /> WhatsApp
                    </Button>
                  </a>
                  <a href={SITE_CONFIG.telUrl} className="w-full">
                    <Button variant="blue" size="sm" className="w-full text-xs">
                      <Phone size={14} /> Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
