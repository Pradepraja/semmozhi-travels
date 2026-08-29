import React from "react"
import { Phone, MessageCircle } from "lucide-react"
import { SITE_CONFIG } from "../data/config"

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href={SITE_CONFIG.whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-emerald-500/50 transition-all duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Call Floating Button for Mobile */}
      <a
        href={SITE_CONFIG.telUrl}
        className="md:hidden w-14 h-14 rounded-full bg-[#1b4b8f] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  )
}
