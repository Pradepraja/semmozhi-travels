export const SITE_CONFIG = {
  phone: "919790903606",
  phoneDisplay: "+91 97909 03606",
  ratePerKm: 34,
  dailyRate: 9500,
  location: "Mettur, Salem, Tamil Nadu",
  whatsappUrl: (message?: string) =>
    `https://wa.me/919790903606?text=${encodeURIComponent(
      message || "Hello Semmozhi Tours & Travels! I would like to enquire about booking a Force Urbania van."
    )}`,
  telUrl: "tel:919790903606",
}

export const FLEET_DATA = [
  {
    id: "9d",
    title: "Force Urbania 9D",
    seats: "9+1 Seater",
    image: "/assets/urbania-10d.webp",
    features: ["Push-Back Luxury Seats", "Full Climate AC", "Attached Chiller/Fridge"],
    description: "Compact & luxurious — ideal for executive business trips, airport pick-ups, and intimate family vacations.",
    rateKm: 34,
    dailyRate: 9500,
  },
  {
    id: "12d",
    title: "Force Urbania 12D",
    seats: "12+1 Seater",
    image: "/assets/urbania-12d.webp",
    features: ["Push-Back Luxury Seats", "Full Climate AC", "Attached Chiller/Fridge"],
    description: "Spacious & supremely comfortable — the prime choice for weddings, family functions, and corporate teams.",
    rateKm: 34,
    dailyRate: 9500,
  },
  {
    id: "16d",
    title: "Force Urbania 16D",
    seats: "16+1 Seater",
    image: "/assets/urbania-16d.webp",
    features: ["Push-Back Luxury Seats", "Full Climate AC", "Attached Chiller/Fridge"],
    description: "Maximum room & luggage capacity — engineered for long spiritual pilgrimages, group holidays, and all-India expeditions.",
    rateKm: 34,
    dailyRate: 9500,
  },
]

export const SERVICES_DATA = [
  {
    icon: "🏠",
    title: "Local City Trips",
    description: "Flexible city rentals for weddings, family gatherings, events, and shopping tours.",
  },
  {
    icon: "💼",
    title: "Corporate & Events",
    description: "Executive group transit, corporate delegations, airport drops, and team outings.",
  },
  {
    icon: "🛣️",
    title: "Outstation Journeys",
    description: "Pan-India interstate road travel starting at an economical ₹34/km flat rate.",
  },
  {
    icon: "🛕",
    title: "Spiritual Darshan Tours",
    description: "Customized pilgrimage itineraries covering Muruga shrines, Rameswaram, Tirupati & beyond.",
  },
]

export const WHY_US_DATA = [
  { icon: "💺", title: "Push-Back Seats", desc: "Reclining ergonomic seating designed for long-distance fatigue-free travel." },
  { icon: "❄️", title: "Full AC Comfort", desc: "Powerful multi-zone air conditioning ensuring quiet, cool journeys." },
  { icon: "🧳", title: "Ample Luggage Bay", desc: "Dedicated spacious luggage compartments for everyone's suitcases." },
  { icon: "🛡️", title: "Safe & Sanitized", desc: "Rigorous vehicle maintenance, clean interiors, and complete GPS safety." },
  { icon: "🧊", title: "Onboard Fridge", desc: "Keep beverages, snacks, and water chilled throughout your journey." },
  { icon: "👨‍✈️", title: "Expert Drivers", desc: "Courteous, verified, highway-experienced drivers fluent in routes." },
  { icon: "🎒", title: "Flexible Packages", desc: "Customized day tours, multi-day interstate itineraries, and fair billing." },
  { icon: "📞", title: "24/7 Dedicated Support", desc: "Round-the-clock booking assistance and live on-trip coordination." },
]

export const TEMPLE_TOURS_DATA = [
  {
    icon: "🛕",
    title: "Arupadai Veedu Tour",
    desc: "Complete spiritual circuit covering all 6 sacred abodes of Lord Muruga across Tamil Nadu.",
  },
  {
    icon: "⛰️",
    title: "Palani Murugan Darshan",
    desc: "Seamless hill shrine pilgrimage with smooth navigation through scenic Ghat road stretches.",
  },
  {
    icon: "🐚",
    title: "Rameswaram & Dhanushkodi",
    desc: "Sacred Ramanathaswamy Temple visit combined with coastal serenity and historical landmarks.",
  },
  {
    icon: "🕉️",
    title: "Tirupati & Sabarimala",
    desc: "Carefully organized multi-day pilgrimage journeys built around pooja schedules and family comfort.",
  },
]
