import React from "react"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import { SITE_CONFIG } from "../data/config"

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a182e] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1b4b8f] to-[#2f6dc4] flex items-center justify-center text-xl shadow-md">
                🚐
              </div>
              <div>
                <div className="font-black text-xl text-white tracking-tight">
                  Semmozhi Tours
                </div>
                <div className="text-[10px] font-bold text-[#ffb83d] tracking-widest uppercase">
                  Tours &amp; Travels
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium Force Urbania luxury van rentals for family vacations, corporate trips, and sacred pilgrimages across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-[#ffb83d] transition-colors">
                  About Us &amp; Vision
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ffb83d] transition-colors">
                  Trip Offerings
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-[#ffb83d] transition-colors">
                  Our Fleet (9+1, 12+1, 16+1)
                </a>
              </li>
              <li>
                <a href="#darshan" className="hover:text-[#ffb83d] transition-colors">
                  Temple Tours &amp; Darshan
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#ffb83d] transition-colors">
                  Transparent Pricing &amp; Fare Calc
                </a>
              </li>
            </ul>
          </div>

          {/* Rate Highlights */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Pricing Overview
            </h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-slate-400">Outstation Rate</div>
                <div className="text-base font-extrabold text-[#ffb83d]">
                  ₹{SITE_CONFIG.ratePerKm} / km Flat
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-slate-400">Daily Package</div>
                <div className="text-base font-extrabold text-[#ffb83d]">
                  ₹{SITE_CONFIG.dailyRate.toLocaleString("en-IN")} / day (incl. driver bata)
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">
              Contact &amp; Location
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#ffb83d]" />
                <a href={SITE_CONFIG.telUrl} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={16} className="text-[#25D366]" />
                <a
                  href={SITE_CONFIG.whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Booking Desk
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <MapPin size={16} className="text-[#ffb83d]" />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Clock size={16} className="text-[#ffb83d]" />
                <span>Available 24/7 All Days</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Semmozhi Tours &amp; Travels. All rights reserved.
          </div>
          <div className="text-slate-400 font-medium">
            Force Urbania Van Rental India • Mettur &amp; Salem
          </div>
        </div>
      </div>
    </footer>
  )
}
