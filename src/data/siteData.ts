/**
 * ELSHADAI J&N AUTO REPAIR LLC — content registry.
 * Orlando auto repair: maintenance, brakes, diagnostics, engine, AC, and more.
 */

/** Local curated shop photos in /public/images (service-matched). */
const img = (name: string) => `/images/${name}.jpg`;

/** Auto repair imagery — heroes, services, gallery. */
export const MINHS_IMAGES = {
  // Heroes & shop atmosphere
  heroLuxury: img("hero"),
  serviceBay: img("mechanic-suv"),
  shopFloor: img("shop"),
  warrantyHero: img("undercar"),
  contactHero: img("alignment"),
  aboutHero: img("oil-check"),
  reviewsHero: img("alignment"),
  blogHero: img("engine-work"),
  troubleshootSection: img("diagnostic"),
  serviceAreasHero: img("road-car"),
  emergencyScene: img("lift-work"),
  residentialSplit: img("oil-check"),
  commercialSplit: img("mechanic-suv"),
  servicesPageHero: img("hero"),
  projectsPageHero: img("lift-work"),

  technician: img("wrench-hands"),
  technician2: img("engine-work"),
  diagnostic: img("diagnostic"),
  workshopTools: img("tire"),

  bmwDetail: img("engine-chrome"),
  mercedesDetail: img("engine-detail"),
  porscheDetail: img("road-car"),

  // Core services
  oilChange: img("oil-pour"),
  brakeService: img("brake-pit"),
  transmission: img("transmission"),
  engineDiag: img("diagnostic"),
  preventiveMaintenance: img("oil-check"),
  suspension: img("alignment"),
  electricalDiagnostics: img("diagnostic"),
  generalRepairs: img("mechanic-suv"),
  acRepair: img("ac-engine"),
  engineRepair: img("wrench-hands"),

  // Gallery
  galleryWrenches: img("wrench-hands"),
  galleryEngine: img("engine-detail"),
  galleryGarageRed: img("hero"),
  galleryGarageBlack: img("shop"),
  galleryTireBay: img("tire"),
  galleryTools: img("lift-work"),
  undercarriage: img("undercarriage"),
  liftWork: img("lift-work"),

  // Legacy aliases kept for template components
  wraps: img("shop"),
  tint: img("road-car"),
  ppf: img("mechanic-suv"),
  detail: img("oil-check"),
  ceramic: img("oil-pour"),
  performance: img("engine-chrome"),
  bodyKits: img("suspension-wheel"),
  customDesign: img("engine-detail"),
  fleet: img("road-car"),
  builds: img("hero"),
  smartHome: img("diagnostic"),
  panelUpgrade: img("mechanic-suv"),
} as const;

export const COMPANY = {
  name: "Elshadai J&N Auto Repair LLC",
  legalName: "Elshadai J&N Auto Repair LLC",
  tagline:
    "Trusted auto repair in Orlando — maintenance, brakes, diagnostics, engine & AC service done right.",
  phone: "407-719-3539",
  email: "elshadaijnauto@gmail.com",
  address: "3014 N John Young Pkwy, Orlando, FL 32804",
  hours: "Mon – Sat: 9:00 AM – 6:00 PM EST · Closed Sunday",
};

export const SITE_TOP = {
  line: "Orlando Auto Repair",
  badges: ["Honest Diagnostics", "Quality Parts", "Family Owned"],
  ratingValue: "5.0",
  ratingCount: "Google",
  ratingLabel: "Reviews",
  locations: "Serving Orlando & Central Florida",
};

export const OFFICE_HOURS = [
  { days: "Monday – Saturday", hours: "9:00 AM – 6:00 PM EST" },
  { days: "Sunday", hours: "Closed" },
];

/** OpenStreetMap embed centered on the shop. */
export const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-81.4255%2C28.5585%2C-81.4055%2C28.5785&layer=mapnik&marker=28.5685%2C-81.4155";

export const MAP_DIRECTIONS_URL =
  "https://www.openstreetmap.org/directions?to=3014%20N%20John%20Young%20Pkwy%2C%20Orlando%2C%20FL%2032804#map=17/28.5685/-81.4155";

export const COMMUNITY_DISCOUNT = {
  eyebrow: "Community Appreciation",
  headline: "5% Off Oil Changes",
  body: "First responders, teachers, veterans, and seniors receive 5% off oil changes — thank you for serving our community.",
  groups: ["First Responders", "Teachers", "Veterans", "Seniors"],
  cta: { label: "Schedule Oil Change", to: "/contact" },
};

export const HOME_HERO = {
  body: "From oil changes and brakes to diagnostics, transmission, and AC repair — Elshadai J&N keeps Orlando drivers safe, reliable, and on the road.",
  image: MINHS_IMAGES.heroLuxury,
  eyebrow: "ELSHADAI J&N · ORLANDO AUTO REPAIR",
  primaryCta: { to: "/contact", label: "Schedule Now" },
  ratingCard: {
    score: "5.0",
    avatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    ],
    countLabel: "Based on Google Customer Reviews",
  },
  trustPills: [
    { sub: "Honest Estimates", icon: "ShieldCheck", label: "Fair Pricing" },
    { sub: "Full-Service Bay", icon: "Award", label: "8+ Services" },
    { sub: "Mon–Sat 9–6", icon: "Tag", label: "Open 6 Days" },
  ],
  ratingQuote:
    "Straight talk, fair pricing, and my car left running better than when I dropped it off. Elshadai J&N is my shop in Orlando.",
  featuredMeta: "Maintenance · Brakes · Diagnostics · Engine · AC",
  secondaryCta: { to: "tel:4077193539", label: "Call Now" },
  featuredTitle: "Your Neighborhood Auto Experts",
  headlineAfter: "",
  headlineBefore: "Your Trusted",
  featuredEyebrow: "ORLANDO · QUALITY REPAIRS",
  headlineHighlight: "Auto Repair Shop",
};

export const TRUST_BAR_ITEMS = [
  { label: "Honest Diagnostics", icon: "ShieldCheck" as const },
  { label: "Quality Parts", icon: "Award" as const },
  { label: "Appointment Reminders", icon: "Eye" as const },
  { label: "Tailored Estimates", icon: "Tag" as const },
  { label: "Community Discounts", icon: "Heart" as const },
];

export const VEHICLE_BRANDS = [
  { id: "toyota", name: "Toyota", tagline: "Reliable daily drivers" },
  { id: "honda", name: "Honda", tagline: "Cars & SUVs" },
  { id: "ford", name: "Ford", tagline: "Trucks & cars" },
  { id: "chevy", name: "Chevrolet", tagline: "Domestic service" },
  { id: "nissan", name: "Nissan", tagline: "Sedans & crossovers" },
  { id: "hyundai", name: "Hyundai", tagline: "Maintenance & repair" },
  { id: "kia", name: "Kia", tagline: "Factory-scheduled care" },
  { id: "bmw", name: "BMW", tagline: "European diagnostics" },
  { id: "mercedes", name: "Mercedes-Benz", tagline: "Precision service" },
];

export const SERVICES_RIBBON = [
  {
    id: "oil-changes",
    to: "/services/oil-changes",
    icon: "Droplets",
    label: "OIL CHANGES",
    description: "Fresh oil and filter service to protect your engine.",
  },
  {
    id: "brakes",
    to: "/services/brakes",
    icon: "CircleDot",
    label: "BRAKES",
    description: "Pads, rotors, and braking systems you can trust.",
  },
  {
    id: "diagnostics",
    to: "/services/diagnostics",
    icon: "Cpu",
    label: "DIAGNOSTICS",
    description: "Check-engine lights and computer diagnostics.",
  },
  {
    id: "engine-repair",
    to: "/services/engine-repair",
    icon: "Wrench",
    label: "ENGINE",
    description: "Engine repair that restores power and reliability.",
  },
  {
    id: "ac-repair",
    to: "/services/ac-repair",
    icon: "Wind",
    label: "AC REPAIR",
    description: "Cool, comfortable cabins for Florida heat.",
  },
];

export const CAPABILITIES = [
  {
    id: "honest-diagnostics",
    to: "/about",
    icon: "ShieldCheck",
    title: "Honest Diagnostics",
    description: "We find the real issue — then explain your options clearly.",
  },
  {
    id: "tailored-estimates",
    to: "/contact",
    icon: "ClipboardCheck",
    title: "Tailored Estimates",
    description: "Written estimates tailored to your vehicle and repair needs.",
  },
  {
    id: "appointment-care",
    to: "/contact",
    icon: "Calendar",
    title: "Appointments & Reminders",
    description: "Schedule online and get reminders so you never miss service.",
  },
  {
    id: "full-shop",
    to: "/services",
    icon: "Wrench",
    title: "Full-Service Shop",
    description: "Maintenance through major repairs under one roof.",
  },
];

export const PROCESS_STEPS = [
  {
    id: "schedule",
    label: "Schedule",
    description: "Call, book online, or chat with our AI assistant to reserve a bay.",
  },
  {
    id: "diagnose",
    label: "Diagnose",
    description: "We inspect and diagnose with clear findings — no guesswork.",
  },
  {
    id: "estimate",
    label: "Estimate",
    description: "You get a tailored estimate before any repair begins.",
  },
  {
    id: "repair",
    label: "Repair",
    description: "Quality parts and careful workmanship restore your vehicle.",
  },
  {
    id: "remind",
    label: "Remind & Maintain",
    description: "Appointment reminders and follow-up keep you on schedule.",
  },
];

export const HOME_STATS = [
  { icon: "Wrench", label: "Primary Services", value: "8+" },
  { icon: "ShieldCheck", label: "Honest Estimates", value: "100%" },
  { icon: "Award", label: "Days Open", value: "6" },
  { icon: "Heart", label: "Community Discount", value: "5%" },
];

export const WHY_BENEFITS = [
  {
    icon: "ClipboardCheck",
    title: "General Maintenance Done Right",
    description: "Factory-minded maintenance that keeps warranties and warranties of trust intact.",
  },
  {
    icon: "CircleDot",
    title: "Brake & Safety Focus",
    description: "Stopping power you can count on — pads, rotors, and hydraulic systems.",
  },
  {
    icon: "Cpu",
    title: "Modern Diagnostics",
    description: "Computer diagnostics that pinpoint issues faster and more accurately.",
  },
  {
    icon: "Cog",
    title: "Transmission Care",
    description: "Fluid service and repair that protect one of your costliest components.",
  },
  {
    icon: "Gauge",
    title: "Suspension Confidence",
    description: "Smoother rides and safer handling with expert suspension work.",
  },
  {
    icon: "Wind",
    title: "AC Built for Florida",
    description: "Stay cool in Orlando heat with AC diagnosis and repair.",
  },
  {
    icon: "Heart",
    title: "Community First",
    description: "5% off oil changes for first responders, teachers, veterans, and seniors.",
  },
];

export const WARRANTY_SECTION = {
  eyebrow: "DRIVEN WITH CONFIDENCE",
  headline: "Quality Repairs.",
  highlight: "Clear Communication.",
  body: "We explain what we find, what it costs, and what it means for your vehicle — so you always approve the work with confidence. Appointment reminders and tailored estimates come standard.",
  cta: { label: "Schedule Service", to: "/contact" },
  image: MINHS_IMAGES.warrantyHero,
  bullets: [
    "Honest diagnostics",
    "Tailored written estimates",
    "Appointment reminders",
    "Quality parts & workmanship",
  ],
};

export const ABOUT_HOME = {
  eyebrow: "OUR STORY",
  headline: "Faith. Craft. Care.",
  body: [
    "Elshadai J&N Auto Repair LLC is Orlando’s neighborhood shop for drivers who want honest answers and lasting repairs. From oil changes to engine and AC work, we treat every vehicle like it belongs to family.",
    "Located on N John Young Parkway, we’re here Monday through Saturday with clear estimates, skilled diagnostics, and service that keeps Central Florida moving.",
  ],
  image: MINHS_IMAGES.shopFloor,
  cta: { label: "About Elshadai J&N", to: "/about" },
};

export const SERVICES = [
  {
    id: "general-maintenance",
    icon: "ClipboardCheck",
    image: MINHS_IMAGES.preventiveMaintenance,
    title: "General Maintenance",
    description: "Scheduled maintenance that keeps your vehicle reliable mile after mile.",
  },
  {
    id: "suspension",
    icon: "Gauge",
    image: MINHS_IMAGES.suspension,
    title: "Suspension",
    description: "Shocks, struts, and suspension repairs for a smoother, safer ride.",
  },
  {
    id: "transmission",
    icon: "Cog",
    image: MINHS_IMAGES.transmission,
    title: "Transmission",
    description: "Transmission service and repair to protect shifting performance.",
  },
  {
    id: "oil-changes",
    icon: "Droplets",
    image: MINHS_IMAGES.oilChange,
    title: "Oil Changes",
    description: "Fast, careful oil & filter service — with community discounts available.",
  },
  {
    id: "brakes",
    icon: "CircleDot",
    image: MINHS_IMAGES.brakeService,
    title: "Brakes",
    description: "Brake pads, rotors, and system repairs for confident stopping power.",
  },
  {
    id: "diagnostics",
    icon: "Cpu",
    image: MINHS_IMAGES.engineDiag,
    title: "Diagnostics",
    description: "Check-engine lights, sensor issues, and computer diagnostics done right.",
  },
  {
    id: "engine-repair",
    icon: "Wrench",
    image: MINHS_IMAGES.engineRepair,
    title: "Engine Repair",
    description: "Engine diagnostics and repair that restore power and reliability.",
  },
  {
    id: "ac-repair",
    icon: "Wind",
    image: MINHS_IMAGES.acRepair,
    title: "AC Repair",
    description: "Air conditioning diagnosis and repair for Florida’s heat.",
  },
];

export const BEFORE_AFTER_PROJECTS = [
  {
    id: "brake-job",
    title: "Complete Brake Service",
    location: "Orlando, FL",
    category: "Brakes",
    serviceId: "brakes",
    beforeImage: MINHS_IMAGES.undercarriage,
    afterImage: MINHS_IMAGES.brakeService,
  },
  {
    id: "oil-service",
    title: "Full Synthetic Oil Change",
    location: "Orlando, FL",
    category: "Oil",
    serviceId: "oil-changes",
    beforeImage: MINHS_IMAGES.oilChange,
    afterImage: MINHS_IMAGES.preventiveMaintenance,
  },
  {
    id: "engine-diag-job",
    title: "Check Engine Diagnosis",
    location: "Orlando, FL",
    category: "Diagnostics",
    serviceId: "diagnostics",
    beforeImage: MINHS_IMAGES.engineDiag,
    afterImage: MINHS_IMAGES.engineRepair,
  },
  {
    id: "ac-refresh",
    title: "AC System Repair",
    location: "Orlando, FL",
    category: "AC",
    serviceId: "ac-repair",
    beforeImage: MINHS_IMAGES.acRepair,
    afterImage: MINHS_IMAGES.serviceBay,
  },
  {
    id: "suspension-refresh",
    title: "Suspension Refresh",
    location: "Orlando, FL",
    category: "Suspension",
    serviceId: "suspension",
    beforeImage: MINHS_IMAGES.suspension,
    afterImage: MINHS_IMAGES.galleryTireBay,
  },
  {
    id: "transmission-service",
    title: "Transmission Service",
    location: "Orlando, FL",
    category: "Transmission",
    serviceId: "transmission",
    beforeImage: MINHS_IMAGES.transmission,
    afterImage: MINHS_IMAGES.liftWork,
  },
  {
    id: "engine-repair-job",
    title: "Engine Repair",
    location: "Orlando, FL",
    category: "Engine",
    serviceId: "engine-repair",
    beforeImage: MINHS_IMAGES.engineRepair,
    afterImage: MINHS_IMAGES.galleryEngine,
  },
  {
    id: "maintenance-package",
    title: "Scheduled Maintenance",
    location: "Orlando, FL",
    category: "Maintenance",
    serviceId: "general-maintenance",
    beforeImage: MINHS_IMAGES.preventiveMaintenance,
    afterImage: MINHS_IMAGES.shopFloor,
  },
];

export const PROJECTS = BEFORE_AFTER_PROJECTS.map((p, i) => ({
  id: p.id,
  title: p.title,
  category: p.category,
  serviceId: p.serviceId,
  location: p.location,
  year: "2025",
  client: "Elshadai J&N Customer",
  value: "—",
  description: `${p.title} — honest diagnosis, quality parts, and workmanship you can trust.`,
  image: p.afterImage,
  gallery: [p.beforeImage, p.afterImage],
  beforeImage: p.beforeImage,
  afterImage: p.afterImage,
  number: i + 1,
}));

export const SIGNATURE_PROJECT_COUNT = 6;
export const PROJECTS_LATEST_PAGE_SIZE = 24;

export const TEAM = [
  {
    id: "service-advisor",
    bio: "Helps customers understand findings, estimates, and the best path forward for every repair.",
    name: "Service Advisor",
    role: "Customer Care",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=85",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "lead-tech",
    bio: "Leads diagnostics and complex engine, transmission, and electrical repairs.",
    name: "Lead Technician",
    role: "Diagnostics & Repair",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=85",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "maintenance-tech",
    bio: "Specializes in oil changes, brakes, suspension, and preventative maintenance.",
    name: "Maintenance Tech",
    role: "Maintenance",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=300&h=300&q=85",
    social: { twitter: "#", linkedin: "#" },
  },
];

export const TESTIMONIALS = [
  {
    name: "Maria G.",
    role: "Oil Change Customer",
    quote: "Quick oil change, fair price, and they remembered my teacher discount. Friendly shop right on John Young.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Brake Service",
    quote: "Brakes were squealing — they showed me the pads, gave a clear estimate, and had me back on the road same day.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
  {
    name: "Angela R.",
    role: "AC Repair",
    quote: "AC was blowing warm in July. Elshadai J&N fixed it fast and explained everything. Huge relief in Florida heat.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Diagnostics",
    quote: "Check engine light on for weeks. They diagnosed it correctly the first time — no upselling, just honest work.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
  {
    name: "Carlos M.",
    role: "Veteran Customer",
    quote: "Appreciate the veteran discount on oil changes and the respectful service. This is my go-to shop now.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Maintenance",
    quote: "Appointment reminders are a lifesaver. They keep my car on schedule without me having to remember every interval.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
];

export const BLOG_POSTS = [
  {
    id: "oil-change-intervals",
    title: "How Often Should You Change Your Oil in Florida?",
    excerpt: "Heat, short trips, and stop-and-go traffic change the rules. Here’s what Orlando drivers should know.",
    date: "April 12, 2025",
    author: "Elshadai J&N Team",
    category: "Maintenance",
    image: MINHS_IMAGES.oilChange,
    content:
      "Florida heat and local driving patterns can shorten oil life. We help Orlando drivers pick the right interval and oil type so engines stay protected between services.",
  },
  {
    id: "brake-warning-signs",
    title: "5 Brake Warning Signs You Shouldn’t Ignore",
    excerpt: "Squeals, pulsation, and longer stopping distances — know when to book a brake inspection.",
    date: "March 8, 2025",
    author: "Elshadai J&N Team",
    category: "Brakes",
    image: MINHS_IMAGES.brakeService,
    content:
      "Brakes are a safety system, not a luxury. If you hear grinding, feel vibration, or notice a soft pedal, schedule an inspection before a small issue becomes a big repair.",
  },
  {
    id: "ac-not-cooling",
    title: "Why Your Car AC Stops Cooling in Summer",
    excerpt: "Low refrigerant, failing compressors, and clogged condensers — common Florida AC culprits.",
    date: "February 2, 2025",
    author: "Elshadai J&N Team",
    category: "AC",
    image: MINHS_IMAGES.acRepair,
    content:
      "When cabin air turns warm, we diagnose the full AC system — not just top off refrigerant — so the fix lasts through Orlando summers.",
  },
];

export const STATS = [
  { label: "Primary Services", value: 8, suffix: "+" },
  { label: "Days Open Weekly", value: 6, suffix: "" },
  { label: "Google Reviews", value: 5, suffix: "★" },
  { label: "Oil Change Discount", value: 5, suffix: "%" },
];

export const FAQ_ITEMS = [
  {
    question: "What services does Elshadai J&N Auto Repair LLC offer?",
    answer:
      "General maintenance, suspension, transmission, oil changes, brakes, diagnostics, engine repair, and AC repair.",
  },
  {
    question: "Where are you located?",
    answer:
      "We’re at 3014 N John Young Pkwy, Orlando, FL 32804. Use Get Directions on our site for an OpenStreetMap route.",
  },
  {
    question: "What are your hours?",
    answer: "Monday through Saturday, 9:00 AM – 6:00 PM EST. Closed Sundays.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "Call 407-719-3539, use our online schedule form, or chat with our AI assistant. We’ll confirm your visit and send reminders.",
  },
  {
    question: "Do you offer community discounts?",
    answer:
      "Yes — first responders, teachers, veterans, and seniors receive 5% off oil changes.",
  },
  {
    question: "Can I get an estimate before repairs?",
    answer:
      "Absolutely. We provide tailored estimates after diagnosis so you approve work with full clarity.",
  },
  {
    question: "Do you display Google reviews?",
    answer:
      "Yes — visit our Reviews page to see what Orlando customers say about our service.",
  },
];

export const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Gallery" },
  { path: "/about", label: "About" },
  { path: "/reviews", label: "Reviews" },
  { path: "/service-areas", label: "Service Areas" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Contact" },
];

export const FOOTER_SERVICE_LINKS = [
  { to: "/services/oil-changes", label: "Oil Changes" },
  { to: "/services/brakes", label: "Brakes" },
  { to: "/services/diagnostics", label: "Diagnostics" },
  { to: "/services/engine-repair", label: "Engine Repair" },
  { to: "/services/ac-repair", label: "AC Repair" },
];

export const FOOTER_COMPANY_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact Us" },
];

export const SERVICE_AREAS = [
  "Orlando",
  "College Park",
  "Princeton / Silver Star",
  "Pine Hills",
  "Winter Park",
  "Eatonville",
  "Lockhart",
  "Fairview Shores",
  "Downtown Orlando",
  "Central Florida",
];

export const BLOG_LIST_PAGE_SIZE = 2;

export function getBlogCategoryCounts(): { label: string; count: number }[] {
  const m = new Map<string, number>();
  for (const p of BLOG_POSTS) m.set(p.category, (m.get(p.category) || 0) + 1);
  return [...m.entries()].map(([label, count]) => ({ label, count })).sort((a, b) => a.label.localeCompare(b.label));
}

export const BLOG_TAGS = ["MAINTENANCE", "BRAKES", "DIAGNOSTICS", "ENGINE", "AC"];

export const PROJECTS_PAGE_STATS = [
  { label: "Primary Services", value: "8+" },
  { label: "Days Open", value: "6" },
  { label: "Honest Estimates", value: "100%" },
  { label: "Shop Focus", value: "Repair" },
];

export const ABOUT_STATS = [
  { label: "Primary Services", value: "8+" },
  { label: "Days Open Weekly", value: "6" },
  { label: "Community Oil Discount", value: "5%" },
  { label: "Serving", value: "Orlando" },
  { label: "Shop Focus", value: "Repair" },
];

export const CORE_VALUES = [
  {
    id: "honesty",
    icon: "ShieldCheck",
    title: "Honesty first",
    description: "Clear findings and fair recommendations — always.",
  },
  {
    id: "craft",
    icon: "Award",
    title: "Quality craftsmanship",
    description: "Repairs done carefully with parts you can trust.",
  },
  {
    id: "community",
    icon: "Heart",
    title: "Community care",
    description: "Discounts for first responders, teachers, veterans, and seniors.",
  },
  {
    id: "clarity",
    icon: "Sparkles",
    title: "Clear communication",
    description: "Tailored estimates and appointment reminders keep you informed.",
  },
  {
    id: "reliability",
    icon: "Users",
    title: "Reliability",
    description: "We get you back on the road safely and on schedule.",
  },
  {
    id: "faith",
    icon: "Handshake",
    title: "Faith-driven service",
    description: "We serve every customer with integrity and respect.",
  },
];

export const CERTIFICATIONS = [
  { id: "maint", sub: "Oil · Filters · Intervals", label: "Maintenance Pros" },
  { id: "brakes", sub: "Pads · Rotors · Hydraulics", label: "Brake Specialists" },
  { id: "diag", sub: "Codes · Sensors · Computers", label: "Diagnostics" },
  { id: "ac", sub: "Florida Heat Ready", label: "AC Experts" },
  { id: "local", sub: "Orlando · Central FL", label: "Local Shop" },
];

export const PROCESS_STEPS_ABOUT = PROCESS_STEPS.map((s, i) => ({
  ...s,
  num: String(i + 1).padStart(2, "0"),
}));

export const FAQ_TABS = [
  { id: "general", label: "GENERAL" },
  { id: "services", label: "SERVICES" },
  { id: "warranty", label: "ESTIMATES" },
  { id: "appointments", label: "BOOKING" },
] as const;

export type FaqTabId = (typeof FAQ_TABS)[number]["id"];

export const FAQ_BY_CATEGORY: Record<FaqTabId, { question: string; answer: string }[]> = {
  general: FAQ_ITEMS.slice(0, 3),
  services: [
    {
      question: "Do you work on all vehicle makes?",
      answer: "Yes — we service domestic and import vehicles common across Central Florida.",
    },
    {
      question: "Can you diagnose a check-engine light?",
      answer: "Absolutely. Our diagnostics pinpoint the issue so repairs target the real problem.",
    },
  ],
  warranty: [
    {
      question: "Will I get a written estimate?",
      answer: "Yes — tailored estimates are provided before repair work begins.",
    },
    {
      question: "Do you send appointment reminders?",
      answer: "Yes — we help you stay on schedule with appointment reminders.",
    },
  ],
  appointments: [
    {
      question: "Can I book online?",
      answer: "Use our Schedule Now form on the Contact page or call 407-719-3539.",
    },
    {
      question: "Are you open Saturdays?",
      answer: "Yes — Monday through Saturday, 9 AM – 6 PM EST. Closed Sundays.",
    },
  ],
};

export const SERVICES_PAGE_INTRO =
  "General maintenance, suspension, transmission, oil changes, brakes, diagnostics, engine repair, and AC — honest auto repair for Orlando drivers.";

export const COMMERCIAL_FITOUT_CARDS = [
  {
    id: "oil-due",
    icon: "Droplets",
    title: "Oil Change Due",
    description: "Protect your engine with timely oil & filter service.",
  },
  {
    id: "brake-noise",
    icon: "CircleDot",
    title: "Brake Noise or Soft Pedal",
    description: "Safety-first brake inspections and repairs.",
  },
  {
    id: "check-engine",
    icon: "Cpu",
    title: "Check Engine Light",
    description: "Computer diagnostics that find the real issue.",
  },
  {
    id: "ac-warm",
    icon: "Wind",
    title: "AC Not Cooling",
    description: "Florida-ready AC diagnosis and repair.",
  },
  {
    id: "rough-ride",
    icon: "Gauge",
    title: "Rough Ride",
    description: "Suspension work for comfort and control.",
  },
  {
    id: "shifting",
    icon: "Cog",
    title: "Shifting Issues",
    description: "Transmission service and repair options.",
  },
];

export const SERVICE_SECTION_IMAGES: Record<string, string> = {
  "general-maintenance": MINHS_IMAGES.preventiveMaintenance,
  suspension: MINHS_IMAGES.suspension,
  transmission: MINHS_IMAGES.transmission,
  "oil-changes": MINHS_IMAGES.oilChange,
  brakes: MINHS_IMAGES.brakeService,
  diagnostics: MINHS_IMAGES.engineDiag,
  "engine-repair": MINHS_IMAGES.engineRepair,
  "ac-repair": MINHS_IMAGES.acRepair,
};

export const SERVICE_DEEP_DIVES = SERVICES.map(s => ({
  id: s.id,
  category: "AUTO REPAIR",
  title: s.title,
  subtitle: "ELSHADAI J&N AUTO REPAIR LLC",
  body: [
    s.description,
    "Honest diagnosis, tailored estimates, and quality workmanship for Orlando drivers.",
  ],
  image: SERVICE_SECTION_IMAGES[s.id] ?? s.image,
  inclusions: [
    "Vehicle inspection",
    "Clear diagnosis",
    "Written estimate",
    "Quality parts",
    "Professional repair",
    "Appointment follow-up",
  ],
}));

export const LEAD_FORM = {
  title: "Schedule Your Service",
  description: "Tell us about your vehicle — we’ll confirm your appointment and send reminders.",
  bullets: [
    "Online appointment booking",
    "Tailored repair estimates",
    "Same-week availability often",
    "AI chat for quick answers",
  ],
};

export const STORM_CHECKLIST = PROCESS_STEPS;

export const INSPECTION_BENEFITS = WHY_BENEFITS.slice(0, 5).map((b, i) => ({
  id: `benefit-${i}`,
  title: b.title,
  description: b.description,
  icon: b.icon,
}));

export const INSPECTION_TYPES = SERVICES.slice(0, 4).map(s => ({
  id: s.id,
  title: s.title,
  description: s.description,
  image: s.image,
}));

export const INSPECTION_CHECKLIST = [
  "Oil level and filter condition",
  "Brake pad and rotor wear",
  "Check-engine and sensor codes",
  "Suspension and tire wear indicators",
  "Transmission fluid condition",
  "AC performance in Florida heat",
];

export const CONTACT_TRUST_STRIP = [
  {
    id: "honest",
    title: "Honest Diagnostics",
    description: "Clear findings before any repair.",
    icon: "ShieldCheck" as const,
  },
  {
    id: "estimates",
    title: "Tailored Estimates",
    description: "Know the cost before we start.",
    icon: "Award" as const,
  },
  {
    id: "hours",
    title: "Open 6 Days",
    description: "Mon–Sat 9 AM – 6 PM EST.",
    icon: "Clock" as const,
  },
  {
    id: "community",
    title: "Community Discount",
    description: "5% off oil changes for heroes.",
    icon: "Users" as const,
  },
];

export const ABOUT_HERO_BADGES = [
  { id: "maint", title: "Maintenance", icon: "ShieldCheck" as const },
  { id: "brakes", title: "Brakes", icon: "Award" as const },
  { id: "diag", title: "Diagnostics", icon: "Tag" as const },
  { id: "ac", title: "AC Repair", icon: "HomeIcon" as const },
];

export const CTA_SECTION = {
  headline: "Ready To Get Back On The Road?",
  subheadline: "Schedule now — Mon–Sat 9 AM–6 PM EST — or call for same-day advice.",
  primaryCta: { label: "Schedule Now", to: "/contact" },
  secondaryCta: { label: "Call 407-719-3539", to: "tel:4077193539" },
};

export const NEWSLETTER = {
  eyebrow: "Stay In The Loop",
  title: "Monthly Custom Newsletter",
  description: "Maintenance tips, seasonal reminders, and shop updates for Orlando drivers.",
  placeholder: "Your email address",
  buttonLabel: "Sign Up",
  successMessage: "You're on the list — thanks for joining our newsletter!",
};
