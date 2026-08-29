import React, { useState, useEffect } from "react"
import { Phone, Menu, X, ArrowRight, MessageCircle } from "lucide-react"
import { SITE_CONFIG } from "../data/config"
import { Button } from "./ui/button"

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Trips", href: "#services" },
    { label: "Our Fleet", href: "#fleet" },
    { label: "Why Us", href: "#why" },
    { label: "Temple Tours", href: "#darshan" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Top Rate Strip */}
      <div className="bg-[#0a182e] text-white text-xs sm:text-sm py-2 px-4 text-center border-b border-slate-800 flex items-center justify-center gap-2 flex-wrap">
        <span>🚐 Force Urbania Van Rental:</span>
        <span className="text-[#ffb83d] font-bold">₹34/km</span>
        <span>•</span>
        <span>Daily:</span>
        <span className="text-[#ffb83d] font-bold">₹9,500 incl. driver bata</span>
        <span>•</span>
        <a
          href="#pricing"
          className="text-[#ffb83d] hover:underline font-semibold flex items-center gap-1 ml-1"
        >
          Instant Fare Calculator <ArrowRight size={14} />
        </a>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-md py-3 border-b border-slate-200/80"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#12294d] to-[#1b4b8f] flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform">
              🚐
            </div>
            <div>
              <div className="font-extrabold text-lg text-[#12294d] leading-none tracking-tight">
                Semmozhi Tours
              </div>
              <div className="text-[10px] font-bold text-[#2f6dc4] tracking-widest uppercase mt-0.5">
                Tours &amp; Travels
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#1b4b8f] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#1b4b8f] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a href={SITE_CONFIG.whatsappUrl()} target="_blank" rel="noreferrer">
              <Button variant="whatsapp" size="sm" className="hidden lg:inline-flex">
                <MessageCircle size={16} /> WhatsApp
              </Button>
            </a>
            <a href={SITE_CONFIG.telUrl}>
              <Button variant="blue" size="sm">
                <Phone size={15} /> Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-blue-50 hover:text-[#1b4b8f] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a href={SITE_CONFIG.telUrl} className="w-full">
                <Button variant="blue" className="w-full">
                  <Phone size={16} /> Call {SITE_CONFIG.phoneDisplay}
                </Button>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button variant="whatsapp" className="w-full">
                  <MessageCircle size={16} /> WhatsApp Enquiry
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
