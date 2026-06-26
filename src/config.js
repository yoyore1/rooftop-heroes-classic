// ============================================================================
//  SINGLE SOURCE OF TRUTH — Rooftop Heroes Roofing (Arkansas).
//  Site B = our template, re-themed for roofing. Real business details from
//  rooftopheroesroofing.com. Lines marked CONFIRM are placeholders to verify.
// ============================================================================

export const SITE = {
  brand: {
    name: "Rooftop Heroes Roofing",
    shortName: "Rooftop Heroes",
    legalName: "Rooftop Heroes Roofing",
    tagline: "Saving homes, one roof at a time.",
    // Contact ----------------------------------------------------------------
    phone: "(501) 772-8243",
    phoneHref: "+15017728243",
    email: "office@rooftopheroesroofing.com",
    // Location & coverage ----------------------------------------------------
    city: "Little Rock",
    state: "AR",
    region: "Central Arkansas",
    hours: "Mon–Sat · 8am–6pm",             // CONFIRM
    // Trust ------------------------------------------------------------------
    foundedYear: 2019,                       // CONFIRM
    license: "Licensed & fully insured",
    ownerName: "Heather Biehn",
  },

  // Headline proof numbers — CONFIRM all (placeholders) ----------------------
  stats: {
    yearsInBusiness: 6,                      // CONFIRM
    homesCleaned: 500,                       // CONFIRM (rendered as "roofs protected")
    rating: 5.0,                             // CONFIRM
    reviewCount: 60,                         // CONFIRM
    responseHours: 24,
    guaranteeDays: 25,                       // CONFIRM (workmanship warranty, years — see template)
  },

  // The 6 services. `img` maps to /assets/img/<img>.jpg ----------------------
  // Roofing publishes no prices, so priceFrom is null on all (nothing invented).
  services: [
    {
      id: "replace", img: "roof", name: "Roof Replacement",
      benefit: "When repair isn't enough, we install a durable, weather-ready new roof built for Arkansas storms — on time and on budget.",
      priceFrom: null,
    },
    {
      id: "repair", img: "house-wash", name: "Roof Repair",
      benefit: "Leaks, missing shingles, flashing and wear — fixed fast with quality materials and a warranty on every repair.",
      priceFrom: null,
    },
    {
      id: "storm", img: "driveway", name: "Storm & Hail Damage",
      benefit: "Hail, wind or fallen-tree damage assessed, documented, and handled directly with your insurance for a stress-free claim.",
      priceFrom: null,
    },
    {
      id: "inspect", img: "deck", name: "Free Roof Inspections",
      benefit: "A thorough, no-pressure inspection with clear photos and honest recommendations — never a hard sell.",
      priceFrom: null,
    },
    {
      id: "maintain", img: "patio", name: "Roof Maintenance",
      benefit: "Preventative tune-ups that catch small problems early and add years to the life of your roof.",
      priceFrom: null,
    },
    {
      id: "gutters", img: "commercial", name: "Gutters & Flashing",
      benefit: "Gutter and flashing work that keeps water moving away from your roof, walls and foundation.",
      priceFrom: null,
    },
  ],

  // 4-step process ----------------------------------------------------------
  process: [
    { step: "01", title: "Request your free inspection", text: "Tell us about your roof in 60 seconds — online or by phone. No pushy sales calls, ever." },
    { step: "02", title: "Get an honest assessment", text: "We inspect thoroughly and send a clear, photo-based report with an itemized quote — usually within 24 hours." },
    { step: "03", title: "We protect your home", text: "Our licensed, insured crew shows up on time, protects your property, and does the job right the first time." },
    { step: "04", title: "You're covered", text: "We walk the finished roof with you. Backed by our workmanship warranty — you only pay when it's done right." },
  ],

  // Recent-work gallery (alternating rows). img maps to /assets/img/<img>.jpg
  gallery: [
    { img: "roof",       surface: "Architectural shingle roof", area: "Little Rock",  time: "Replaced in two days",  quote: "New roof looks incredible and the crew was spotless. Total pros." },
    { img: "driveway",   surface: "Storm-damaged roof",         area: "Conway",       time: "Insurance-covered",     quote: "They handled the whole hail claim for me. Stress-free start to finish." },
    { img: "house-wash", surface: "Roof repair",                area: "Benton",       time: "Same-week fix",         quote: "Found the leak fast, fixed it right, and didn't try to sell me a whole roof." },
    { img: "deck",       surface: "Free roof inspection",       area: "Bryant",       time: "Photo report",          quote: "Honest inspection with real photos. No pressure, just answers." },
  ],

  // Before / After comparison tiles (the signature slider) ------------------
  // `after` = the clean/new photo, `before` = the matching old/damaged photo.
  // When `before` is omitted, the slider fakes it with a CSS grime filter.
  beforeAfter: [
    { id: "roof",     img: "roof",       label: "Roof" },
    { id: "storm",    img: "driveway",   label: "Storm Repair" },
    { id: "repair",   img: "house-wash", label: "Shingles" },
    { id: "inspect",  img: "deck",       label: "Inspection" },
  ],

  // Reviews — CONFIRM/replace with real reviews (placeholders) ---------------
  testimonials: [
    { name: "Sarah M.", area: "Little Rock", rating: 5, service: "Storm Damage",     quote: "They came out fast after a hailstorm, walked me through every photo, and handled my insurance claim start to finish. Zero pressure, total professionals." },
    { name: "David R.", area: "Conway",      rating: 5, service: "Roof Repair",      quote: "Honest from the first call. They actually told me I didn't need a full replacement yet — just a repair. Saved me thousands. That's rare." },
    { name: "Priya K.", area: "Benton",      rating: 5, service: "Roof Replacement", quote: "New roof in two days, crew was spotless, and it looks incredible. You can tell they genuinely care about doing it right." },
    { name: "Tom B.",   area: "Bryant",      rating: 5, service: "Inspection",       quote: "Free inspection with real photos and straight answers. No upsell, no pressure. I'll call them every time." },
  ],

  // Objection-handling FAQ ---------------------------------------------------
  faqs: [
    { q: "Is the roof inspection really free?", a: "Yes — 100% free with no obligation. We inspect your roof, show you photos of what we find, and give honest recommendations. If your roof is in good shape, we'll happily tell you so." },
    { q: "My roof was hit by a storm. Can you help with insurance?", a: "Absolutely. Storm and hail damage is our specialty. We document everything, meet your adjuster, and advocate on your behalf so the claim process is as stress-free as possible." },
    { q: "Do I need a full replacement or just a repair?", a: "Often a repair is all you need — and we'll always tell you the truth. Our free inspection gives you a clear, photo-backed answer and honest options, never a pushy upsell." },
    { q: "How long does a roof replacement take?", a: "Most residential roofs are completed in one to two days, depending on size and weather. We give you a clear timeline up front and keep your property clean throughout." },
    { q: "Are you licensed and insured?", a: "Yes — Rooftop Heroes Roofing is licensed and fully insured, and our workmanship is backed by warranty. We're happy to provide proof before any work begins." },
    { q: "What if I'm not happy with the work?", a: "Then we're not done. Our workmanship is backed in writing — if something isn't right, we come back and make it right. You only pay when the job's done well." },
  ],

  // Where you work — drives the service-area cloud & local SEO --------------
  serviceAreas: [
    "Little Rock", "North Little Rock", "Conway", "Benton",
    "Bryant", "Cabot", "Sherwood", "Jacksonville",
    "Maumelle", "Hot Springs", "Searcy", "Russellville",
  ],

  // The services dropdown in the estimate form ------------------------------
  formServices: [
    "Free Roof Inspection", "Roof Repair", "Roof Replacement",
    "Storm / Hail Damage", "Insurance Claim Help", "Roof Maintenance",
    "Gutters & Flashing", "Something else",
  ],

  // SEO ---------------------------------------------------------------------
  seo: {
    title: "Rooftop Heroes Roofing | Little Rock & Arkansas Roof Repair & Replacement",
    description:
      "Rooftop Heroes Roofing — honest, no-pressure roof inspections, repairs, replacements & storm-damage help across Central Arkansas. Woman-owned & local. Free inspections.",
    url: "https://www.rooftopheroesroofing.com",
  },
};

export default SITE;
