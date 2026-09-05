import React, { useState } from "react"
import { Phone, MessageCircle, Clock, MapPin, Send } from "lucide-react"
import { SITE_CONFIG, FLEET_DATA } from "../data/config"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    van: "Force Urbania 12D — 12+1 Seater",
    kms: "",
    desc: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      "✨ *New Booking / Trip Enquiry*",
      `👤 *Name:* ${formData.name || "Not provided"}`,
      `📞 *Phone:* ${formData.phone || "Not provided"}`,
      `🚐 *Vehicle:* ${formData.van}`,
      `🛣️ *Approx Distance:* ${formData.kms ? formData.kms + " km" : "Not specified"}`,
      `📝 *Trip Details / Dates:* ${formData.desc || "General Enquiry"}`,
    ]
    const fullMessage = lines.join("\n")
    window.open(SITE_CONFIG.whatsappUrl(fullMessage), "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#1b4b8f] text-xs font-extrabold uppercase tracking-wider mb-3">
            Contact &amp; Bookings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12294d] tracking-tight">
            Book Your Journey Today
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Call us directly or submit your enquiry below to receive an instant WhatsApp confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Contact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {/* Contact 1 - Primary */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#1b4b8f] hover:shadow-md transition-all">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1b4b8f] flex items-center justify-center text-lg shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Primary Contact &amp; Bookings
                    </div>
                    <a
                      href={SITE_CONFIG.telUrl}
                      className="text-base font-extrabold text-[#12294d] hover:text-[#1b4b8f] transition-colors block"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href={SITE_CONFIG.telUrl}
                    className="p-2 rounded-lg bg-blue-50 text-[#1b4b8f] hover:bg-[#1b4b8f] hover:text-white transition-colors"
                    title="Call Now"
                  >
                    <Phone size={16} />
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappUrl("Hello Semmozhi Travels, I want to book a Force Urbania.", SITE_CONFIG.phone)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                    title="WhatsApp"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact 2 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#1b4b8f] hover:shadow-md transition-all">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1b4b8f] flex items-center justify-center text-lg shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Helpline 2
                    </div>
                    <a
                      href={SITE_CONFIG.telUrl2}
                      className="text-base font-extrabold text-[#12294d] hover:text-[#1b4b8f] transition-colors block"
                    >
                      {SITE_CONFIG.phone2Display}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href={SITE_CONFIG.telUrl2}
                    className="p-2 rounded-lg bg-blue-50 text-[#1b4b8f] hover:bg-[#1b4b8f] hover:text-white transition-colors"
                    title="Call Helpline 2"
                  >
                    <Phone size={16} />
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappUrl("Hello Semmozhi Travels, I have an enquiry for travel.", SITE_CONFIG.phone2)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                    title="WhatsApp Helpline 2"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact 3 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#1b4b8f] hover:shadow-md transition-all">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1b4b8f] flex items-center justify-center text-lg shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Helpline 3
                    </div>
                    <a
                      href={SITE_CONFIG.telUrl3}
                      className="text-base font-extrabold text-[#12294d] hover:text-[#1b4b8f] transition-colors block"
                    >
                      {SITE_CONFIG.phone3Display}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href={SITE_CONFIG.telUrl3}
                    className="p-2 rounded-lg bg-blue-50 text-[#1b4b8f] hover:bg-[#1b4b8f] hover:text-white transition-colors"
                    title="Call Helpline 3"
                  >
                    <Phone size={16} />
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappUrl("Hello Semmozhi Travels, I have an enquiry for travel.", SITE_CONFIG.phone3)}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                    title="WhatsApp Helpline 3"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <Card className="p-4 border-slate-200 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Operating Hours</div>
                <div className="text-sm font-extrabold text-[#12294d]">
                  24 Hours / 7 Days
                </div>
                <div className="text-[11px] text-slate-400">Night trips &amp; instant assistance</div>
              </div>
            </Card>

            {/* Headquarters */}
            <Card className="p-4 border-slate-200 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center text-lg shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Headquarters</div>
                <div className="text-sm font-extrabold text-[#12294d]">
                  {SITE_CONFIG.location}
                </div>
                <div className="text-[11px] text-slate-400">Serving trips across India</div>
              </div>
            </Card>
          </div>

          {/* Interactive WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 border-slate-200 shadow-xl bg-gradient-to-b from-white to-slate-50/60">
              <h3 className="text-2xl font-extrabold text-[#12294d] mb-1">
                Send a Trip Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in your details below and click submit. It opens WhatsApp with your trip info ready to send!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">
                      Preferred Van
                    </label>
                    <select
                      value={formData.van}
                      onChange={(e) => setFormData({ ...formData, van: e.target.value })}
                      className="flex h-12 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 focus-visible:outline-none focus-visible:border-[#1b4b8f] transition-colors"
                    >
                      {FLEET_DATA.map((van) => (
                        <option key={van.id} value={`${van.title} — ${van.seats}`}>
                          {van.title} ({van.seats})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">
                      Approx Distance (KM)
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g. 450"
                      value={formData.kms}
                      onChange={(e) => setFormData({ ...formData, kms: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">
                    Trip Route / Dates / Passenger Count
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Salem to Tirupati 3-day family trip on Sept 15 with 10 adults..."
                    value={formData.desc}
                    onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                    className="flex w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus-visible:outline-none focus-visible:border-[#1b4b8f] transition-colors resize-y"
                  />
                </div>

                <Button type="submit" variant="whatsapp" size="lg" className="w-full text-base font-bold mt-2">
                  <Send size={18} /> Send Enquiry via WhatsApp
                </Button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  Submitting directly connects you with our booking manager on WhatsApp.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
