import { useState } from "react"
import { Calculator, CheckCircle2, Phone, MessageCircle } from "lucide-react"
import { SITE_CONFIG } from "../data/config"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const PricingCalculator: React.FC = () => {
  const [km, setKm] = useState<string>("")
  const [calculatedFare, setCalculatedFare] = useState<number | null>(null)
  const [distanceVal, setDistanceVal] = useState<number | null>(null)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    const parsedKm = parseFloat(km)
    if (!isNaN(parsedKm) && parsedKm > 0) {
      setDistanceVal(parsedKm)
      setCalculatedFare(Math.round(parsedKm * SITE_CONFIG.ratePerKm))
    } else {
      setCalculatedFare(null)
      setDistanceVal(null)
    }
  }

  return (
    <section id="pricing" className="py-20 bg-[#f8f6f0] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12294d]/10 text-[#12294d] text-xs font-extrabold uppercase tracking-wider mb-3">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12294d] tracking-tight">
            Clear, Honest &amp; Zero Hidden Fees
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Outstation trips billed at a flat ₹34/km. Calculate your estimated fare instantly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Rate Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#12294d] via-[#16325c] to-[#0a182e] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#ffb83d] mb-4">
                ★ Standard Fleet Rates
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Flat &amp; Direct Rate Cards
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                No surge pricing, no unexpected add-ons. You get premium Force Urbania luxury with upfront billing.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-300 font-semibold uppercase">Outstation Rate</div>
                    <div className="text-xs text-slate-400">All India Interstate</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-[#ffb83d]">₹{SITE_CONFIG.ratePerKm}</div>
                    <div className="text-xs text-slate-300">per km</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-300 font-semibold uppercase">Daily Hire</div>
                    <div className="text-xs text-slate-400">Includes Driver Bata</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-[#ffb83d]">
                      ₹{SITE_CONFIG.dailyRate.toLocaleString("en-IN")}
                    </div>
                    <div className="text-xs text-slate-300">per day</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
              <a href={SITE_CONFIG.telUrl} className="flex-1 min-w-[140px]">
                <Button variant="default" className="w-full">
                  <Phone size={15} /> Call for Quote
                </Button>
              </a>
              <a href="#contact" className="flex-1 min-w-[140px]">
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white hover:text-[#12294d]">
                  Send Enquiry
                </Button>
              </a>
            </div>
          </div>

          {/* Interactive Calculator Card */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 border-slate-200 shadow-xl bg-white h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#1b4b8f]">
                    <Calculator size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#12294d]">
                      Instant Fare Calculator
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Enter your approximate one-way or round-trip distance (in KM)
                    </p>
                  </div>
                </div>

                <form onSubmit={handleCalculate} className="mt-6 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Input
                        type="number"
                        min="1"
                        placeholder="e.g. 350"
                        value={km}
                        onChange={(e) => {
                          setKm(e.target.value)
                          const val = parseFloat(e.target.value)
                          if (!isNaN(val) && val > 0) {
                            setDistanceVal(val)
                            setCalculatedFare(Math.round(val * SITE_CONFIG.ratePerKm))
                          } else {
                            setCalculatedFare(null)
                            setDistanceVal(null)
                          }
                        }}
                        className="h-14 text-lg font-semibold pl-4 pr-12"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                        KM
                      </span>
                    </div>
                    <Button type="submit" size="lg" className="h-14 px-8 text-base font-bold">
                      Calculate Fare
                    </Button>
                  </div>

                  {/* Preset quick distance chips */}
                  <div className="flex items-center gap-2 flex-wrap pt-1">
                    <span className="text-xs text-slate-400 font-medium">Popular:</span>
                    {[150, 300, 500, 800, 1200].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => {
                          setKm(preset.toString())
                          setDistanceVal(preset)
                          setCalculatedFare(Math.round(preset * SITE_CONFIG.ratePerKm))
                        }}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-[#1b4b8f] transition-colors"
                      >
                        {preset} km
                      </button>
                    ))}
                  </div>
                </form>

                {/* Calculation Output Box */}
                {calculatedFare !== null && distanceVal !== null && (
                  <div className="mt-6 p-6 rounded-2xl bg-blue-50/90 border border-blue-200/80 animate-in fade-in-50">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold uppercase text-[#1b4b8f]">
                          Estimated Outstation Fare
                        </div>
                        <div className="text-3xl font-black text-[#12294d] mt-1">
                          ₹{calculatedFare.toLocaleString("en-IN")}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          Calculated for {distanceVal} km @ ₹{SITE_CONFIG.ratePerKm}/km
                        </div>
                        <div className="text-xs font-semibold text-amber-800/90 mt-1.5 flex items-center gap-1">
                          * Contact us for discounts and negotiations
                        </div>
                      </div>

                      <a
                        href={SITE_CONFIG.whatsappUrl(
                          `Hello, I calculated an estimated fare of ₹${calculatedFare.toLocaleString(
                            "en-IN"
                          )} for ${distanceVal} km. I would like to book a Force Urbania van.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button variant="whatsapp" className="w-full sm:w-auto">
                          <MessageCircle size={16} /> Book on WhatsApp
                        </Button>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Note:</strong> Toll gates, interstate permits, and parking charges (if applicable) are extra as per actual receipts. Daily packages start at ₹9,500 incl. driver bata.
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
