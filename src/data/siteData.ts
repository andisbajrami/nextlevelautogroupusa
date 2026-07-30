/**
 * ENVISION WRAPS — content registry.
 * Automotive personalization: wraps, tint, PPF, detail, and builds.
 */

const u = (id: string, w = 600, h = 400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=85`;

/** Verified Unsplash IDs — wraps / tint / PPF / detail / custom automotive. */
export const MINHS_IMAGES = {
  // Heroes & shop atmosphere
  heroLuxury: u("1670408314526-be91145631c0", 1920, 1080), // color-shift wrap detail
  serviceBay: u("1492144534655-ae79c964c9d7", 1400, 900), // luxury cars in shop
  shopFloor: u("1492144534655-ae79c964c9d7", 1400, 900),
  warrantyHero: u("1503376780353-7e6692767b70", 1600, 700), // tinted black sports sedan
  contactHero: u("1670408314526-be91145631c0", 1400, 900),
  aboutHero: u("1632605157148-6313421c504b", 1400, 900), // wrap install hands
  reviewsHero: u("1605559424843-9e4c228bf1c2", 1400, 900),
  blogHero: u("1617898528081-20d57598d40d", 1400, 900), // PPF install
  troubleshootSection: u("1632605179016-7e21ad342b14", 1200, 800), // prep tape
  serviceAreasHero: u("1541899481282-d53bffe3c35d", 1400, 900),
  emergencyScene: u("1525609004556-c46c7d6cf023", 1400, 900),
  residentialSplit: u("1632605157148-6313421c504b", 900, 700),
  commercialSplit: u("1563720223185-11003d516935", 900, 700),
  servicesPageHero: u("1670408314526-be91145631c0", 1920, 600),
  projectsPageHero: u("1525609004556-c46c7d6cf023", 1920, 600),

  // Process / installer shots (replaces broken mechanic URLs)
  technician: u("1632605157148-6313421c504b", 900, 1100),
  technician2: u("1632605179016-7e21ad342b14", 1400, 900),
  diagnostic: u("1617898528081-20d57598d40d", 900, 900),
  workshopTools: u("1657658452796-f400daeba3e2", 900, 700),

  // Brand / model lifestyle
  bmwDetail: u("1555215695-3004980ad54e", 900, 600),
  mercedesDetail: u("1618843479313-40f8afb4b4d8", 900, 600),
  porscheDetail: u("1667574880898-6abf52aa546b", 900, 600),

  // Core services
  wraps: u("1632605157148-6313421c504b", 800, 600), // vinyl wrap application
  tint: u("1503376780353-7e6692767b70", 800, 600), // dark tinted windows
  ppf: u("1617898528081-20d57598d40d", 800, 600), // PPF wet install
  detail: u("1657658452796-f400daeba3e2", 800, 600), // hand wash / detail
  ceramic: u("1608412217889-1ec8ac1d5878", 800, 600), // hydrophobic water beads
  performance: u("1605559424843-9e4c228bf1c2", 800, 600), // AMG performance look
  bodyKits: u("1667574880898-6abf52aa546b", 800, 600), // aero front detail
  customDesign: u("1670408314526-be91145631c0", 800, 600), // color-shift wrap
  fleet: u("1563720223185-11003d516935", 800, 600), // premium SUV branding vibe
  builds: u("1525609004556-c46c7d6cf023", 900, 1100), // show build supercar

  // Gallery / before-after pool
  galleryWrenches: u("1503376780353-7e6692767b70", 800, 600),
  galleryEngine: u("1617898528081-20d57598d40d", 800, 600),
  galleryGarageRed: u("1552519507-da3b142c6e3d", 800, 600),
  galleryGarageBlack: u("1544636331-e26879cd4d9b", 800, 600),
  galleryTireBay: u("1550355291-bbee04a92027", 800, 600),
  galleryTools: u("1632605179016-7e21ad342b14", 800, 600),

  // Legacy key aliases (point at wraps-appropriate stock)
  oilChange: u("1657658452796-f400daeba3e2", 800, 600),
  brakeService: u("1503376780353-7e6692767b70", 800, 600),
  transmission: u("1617898528081-20d57598d40d", 800, 600),
  engineDiag: u("1632605179016-7e21ad342b14", 800, 600),
  preventiveMaintenance: u("1608412217889-1ec8ac1d5878", 800, 600),
  suspension: u("1667574880898-6abf52aa546b", 800, 600),
  electricalDiagnostics: u("1555215695-3004980ad54e", 800, 600),
  generalRepairs: u("1632605157148-6313421c504b", 900, 1100),
  smartHome: u("1632605179016-7e21ad342b14", 600, 400),
  panelUpgrade: u("1670408314526-be91145631c0", 1400, 900),
} as const;

export const COMPANY = {
  name: "Envision Wraps",
  legalName: "Envision Wraps",
  tagline:
    "Professional automotive personalization — wraps, tint, paint protection, and custom builds.",
  phone: "",
  email: "",
  address: "",
  hours: "Mon - Fri: 8:00 AM - 5:00 PM · Sat: By Appointment",
};

export const SITE_TOP = {
  line: "Automotive Personalization",
  badges: ["Pro Install", "Wraps & Tint", "PPF Specialists"],
  ratingValue: "5.0",
  ratingCount: "200+",
  ratingLabel: "Reviews",
  locations: "Serving drivers across our local area",
};

export const OFFICE_HOURS = [
  { days: "Monday – Friday", hours: "8:00 AM - 5:00 PM" },
  { days: "Saturday", hours: "By Appointment" },
  { days: "Sunday", hours: "Closed" },
];

export const MAP_EMBED_URL = "";

export const HOME_HERO = {
  body: "From full color-change wraps to ceramic tint and paint protection film — Envision delivers shop-quality installation for drivers who want their vehicle to stand out and stay protected.",
  image: MINHS_IMAGES.heroLuxury,
  eyebrow: "ENVISION · AUTOMOTIVE PERSONALIZATION",
  primaryCta: { to: "/contact", label: "Start Your Build" },
  ratingCard: {
    score: "5.0",
    avatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
    ],
    countLabel: "Based on 200+ Customer Reviews",
  },
  trustPills: [
    { sub: "Precision Install", icon: "ShieldCheck", label: "Pro Shop" },
    { sub: "Color & Design", icon: "Award", label: "Custom Wraps" },
    { sub: "Film Protection", icon: "Tag", label: "PPF & Tint" },
  ],
  ratingQuote:
    "Envision wrapped my car exactly how I envisioned it — clean lines, perfect finish, and the whole shop treated the build like art.",
  featuredMeta: "Wraps · Tint · PPF · Detail · Builds",
  secondaryCta: { to: "/contact", label: "Contact Us" },
  featuredTitle: "Custom Automotive Specialists",
  headlineAfter: "",
  headlineBefore: "Your Trusted",
  featuredEyebrow: "ANYTHING YOU CAN ENVISION",
  headlineHighlight: "Wraps & Tint Shop",
};

export const TRUST_BAR_ITEMS = [
  { label: "Professional Installation", icon: "ShieldCheck" as const },
  { label: "Custom Color Wraps", icon: "Award" as const },
  { label: "Ceramic Window Tint", icon: "Eye" as const },
  { label: "Paint Protection Film", icon: "Tag" as const },
  { label: "Passion Shop", icon: "Heart" as const },
];

export const VEHICLE_BRANDS = [
  { id: "bmw", name: "BMW", tagline: "Color & clear protection" },
  { id: "audi", name: "Audi", tagline: "Precision film work" },
  { id: "mercedes", name: "Mercedes-Benz", tagline: "Luxury finishes" },
  { id: "porsche", name: "Porsche", tagline: "Performance aesthetics" },
  { id: "tesla", name: "Tesla", tagline: "PPF & chrome delete" },
  { id: "ford", name: "Ford", tagline: "Trucks & performance" },
  { id: "chevy", name: "Chevrolet", tagline: "Street & show builds" },
  { id: "toyota", name: "Toyota", tagline: "Daily driver upgrades" },
  { id: "subaru", name: "Subaru", tagline: "Rally-inspired wraps" },
];

export const SERVICES_RIBBON = [
  {
    id: "vehicle-wraps",
    to: "/services/vehicle-wraps",
    icon: "Palette",
    label: "WRAPS",
    description: "Full color-change, accents, and commercial wraps.",
  },
  {
    id: "window-tint",
    to: "/services/window-tint",
    icon: "Sun",
    label: "TINT",
    description: "Ceramic and performance films for heat & privacy.",
  },
  {
    id: "paint-protection",
    to: "/services/paint-protection",
    icon: "Shield",
    label: "PAINT PROTECTION",
    description: "PPF that keeps factory paint looking new.",
  },
  {
    id: "auto-detail",
    to: "/services/auto-detail",
    icon: "Sparkles",
    label: "DETAIL",
    description: "Correction, ceramic coating, and show finishes.",
  },
  {
    id: "custom-builds",
    to: "/services/custom-builds",
    icon: "Gauge",
    label: "BUILDS",
    description: "Aero, body kits, and full visual packages.",
  },
];

export const CAPABILITIES = [
  {
    id: "precision-install",
    to: "/about",
    icon: "ShieldCheck",
    title: "Precision Installation",
    description: "Clean edges, proper prep, and finishes built to last.",
  },
  {
    id: "custom-design",
    to: "/services/custom-design",
    icon: "Palette",
    title: "Custom Design",
    description: "From subtle accents to full concept wraps.",
  },
  {
    id: "protection",
    to: "/services/paint-protection",
    icon: "Shield",
    title: "Paint & Glass Protection",
    description: "PPF and ceramic tint that defend against sun, heat, and road debris.",
  },
  {
    id: "full-shop",
    to: "/services",
    icon: "Wrench",
    title: "Full Personalization Shop",
    description: "Wraps, tint, detail, aero, and builds under one roof.",
  },
];

export const PROCESS_STEPS = [
  {
    id: "consult",
    label: "Consult & Design",
    description: "Tell us the look — color, tint shade, PPF coverage, or full build vision.",
  },
  {
    id: "quote",
    label: "Transparent Quote",
    description: "Clear scope, materials, and timeline before we start.",
  },
  {
    id: "prep",
    label: "Prep & Protect",
    description: "Paint correction, surface prep, and careful disassembly when needed.",
  },
  {
    id: "install",
    label: "Pro Installation",
    description: "Film and wrap installed with shop-level precision.",
  },
  {
    id: "reveal",
    label: "Reveal & Care",
    description: "Final inspection, aftercare tips, and a finish you’ll want to show off.",
  },
];

export const HOME_STATS = [
  { icon: "Award", label: "Years Personalizing", value: "15+" },
  { icon: "Palette", label: "Core Services", value: "6+" },
  { icon: "ShieldCheck", label: "Pro Install Shop", value: "100%" },
  { icon: "Sparkles", label: "Custom Builds", value: "∞" },
];

export const WHY_BENEFITS = [
  {
    icon: "Palette",
    title: "Wraps That Turn Heads",
    description: "Color-change, chrome delete, racing stripes, and commercial fleet graphics.",
  },
  {
    icon: "Sun",
    title: "Tint Built for Heat & Glare",
    description: "Ceramic films that cut heat and glare while keeping the cabin comfortable.",
  },
  {
    icon: "Shield",
    title: "Paint Protection Film",
    description: "Invisible armor for high-impact zones or full-front coverage.",
  },
  {
    icon: "Sparkles",
    title: "Detail & Ceramic Coatings",
    description: "Correction and coatings that make wrap and paint pop.",
  },
  {
    icon: "Gauge",
    title: "Builds & Body Kits",
    description: "Aero, suspension looks, and package installs that match your vision.",
  },
  {
    icon: "Eye",
    title: "Design-First Approach",
    description: "We help you envision the end result before a single panel is wrapped.",
  },
  {
    icon: "Heart",
    title: "Passion-Driven Shop",
    description: "A team that lives cars — from daily drivers to show builds.",
  },
];

export const WARRANTY_SECTION = {
  eyebrow: "INSTALLED WITH CONFIDENCE",
  headline: "Premium Films.",
  highlight: "Professional Results.",
  body: "We install industry-leading wrap, tint, and PPF materials with the prep and technique that protect your investment — so your vehicle looks sharp long after it leaves the bay.",
  cta: { label: "See Our Work", to: "/projects" },
  image: MINHS_IMAGES.warrantyHero,
  bullets: [
    "Premium wrap & film brands",
    "Clean, professional installation",
    "Care guidance after install",
    "Shop consults for every build",
  ],
};

export const ABOUT_HOME = {
  eyebrow: "OUR STORY",
  headline: "Anything You Can Envision.",
  body: [
    "Here at Envision you will find the standard in Automotive Personalization. We have crafted the highest quality of professional installation in automotive wraps, tint, and paint protection.",
    "Following our passion in the automotive world has driven Envision into customization ranging from tint and wraps to just about anything you can Envision — detail, aero, body kits, and full visual builds.",
  ],
  image: MINHS_IMAGES.shopFloor,
  cta: { label: "About Envision", to: "/about" },
};

export const SERVICES = [
  {
    id: "vehicle-wraps",
    icon: "Palette",
    image: MINHS_IMAGES.wraps,
    title: "Vehicle Wraps",
    description: "Full color-change, accents, chrome delete, and custom graphics that transform your ride.",
  },
  {
    id: "window-tint",
    icon: "Sun",
    image: MINHS_IMAGES.tint,
    title: "Window Tint",
    description: "Ceramic and performance tint for heat rejection, privacy, and a clean finished look.",
  },
  {
    id: "paint-protection",
    icon: "Shield",
    image: MINHS_IMAGES.ppf,
    title: "Paint Protection Film",
    description: "Self-healing PPF for bumpers, hoods, full front ends, or complete coverage.",
  },
  {
    id: "auto-detail",
    icon: "Sparkles",
    image: MINHS_IMAGES.detail,
    title: "Auto Detail",
    description: "Paint correction, interior detail, and ceramic coatings for lasting gloss.",
  },
  {
    id: "custom-builds",
    icon: "Gauge",
    image: MINHS_IMAGES.builds,
    title: "Custom Builds",
    description: "Visual packages that combine wrap, tint, PPF, aero, and styling into one cohesive build.",
  },
  {
    id: "body-kits",
    icon: "Wrench",
    image: MINHS_IMAGES.bodyKits,
    title: "Body Kits & Aero",
    description: "Lip kits, spoilers, and aero components installed to match your style goals.",
  },
  {
    id: "custom-design",
    icon: "PenTool",
    image: MINHS_IMAGES.customDesign,
    title: "Custom Design",
    description: "One-off graphics, racing liveries, and brand wraps designed around your concept.",
  },
  {
    id: "commercial-fleet",
    icon: "Truck",
    image: MINHS_IMAGES.fleet,
    title: "Commercial & Fleet",
    description: "Business branding, wall wraps, and fleet graphics that look sharp on the road.",
  },
  {
    id: "ceramic-coating",
    icon: "Droplets",
    image: MINHS_IMAGES.ceramic,
    title: "Ceramic Coating",
    description: "Hydrophobic protection and deep gloss for paint or vinyl wrap finishes.",
  },
  {
    id: "performance-styling",
    icon: "Zap",
    image: MINHS_IMAGES.performance,
    title: "Performance Styling",
    description: "Visual performance upgrades — blackout packages, accents, and show-ready finishes.",
  },
];

export const BEFORE_AFTER_PROJECTS = [
  {
    id: "full-color-wrap",
    title: "Full Color-Change Wrap",
    location: "Local Shop",
    category: "Wraps",
    serviceId: "vehicle-wraps",
    beforeImage: MINHS_IMAGES.galleryGarageBlack,
    afterImage: MINHS_IMAGES.customDesign,
  },
  {
    id: "ceramic-tint-package",
    title: "Ceramic Tint Package",
    location: "Local Shop",
    category: "Tint",
    serviceId: "window-tint",
    beforeImage: MINHS_IMAGES.galleryWrenches,
    afterImage: MINHS_IMAGES.tint,
  },
  {
    id: "full-front-ppf",
    title: "Full Front PPF",
    location: "Local Shop",
    category: "PPF",
    serviceId: "paint-protection",
    beforeImage: MINHS_IMAGES.galleryTireBay,
    afterImage: MINHS_IMAGES.ppf,
  },
  {
    id: "chrome-delete",
    title: "Chrome Delete + Accents",
    location: "Local Shop",
    category: "Wraps",
    serviceId: "vehicle-wraps",
    beforeImage: MINHS_IMAGES.bmwDetail,
    afterImage: MINHS_IMAGES.galleryGarageRed,
  },
  {
    id: "detail-ceramic",
    title: "Correction & Ceramic Coat",
    location: "Local Shop",
    category: "Detail",
    serviceId: "auto-detail",
    beforeImage: MINHS_IMAGES.galleryTools,
    afterImage: MINHS_IMAGES.ceramic,
  },
  {
    id: "show-build",
    title: "Show Build Package",
    location: "Local Shop",
    category: "Builds",
    serviceId: "custom-builds",
    beforeImage: MINHS_IMAGES.porscheDetail,
    afterImage: MINHS_IMAGES.builds,
  },
  {
    id: "fleet-branding",
    title: "Commercial Fleet Wrap",
    location: "Local Shop",
    category: "Fleet",
    serviceId: "commercial-fleet",
    beforeImage: MINHS_IMAGES.mercedesDetail,
    afterImage: MINHS_IMAGES.fleet,
  },
  {
    id: "aero-kit",
    title: "Aero & Body Kit Install",
    location: "Local Shop",
    category: "Aero",
    serviceId: "body-kits",
    beforeImage: MINHS_IMAGES.galleryTireBay,
    afterImage: MINHS_IMAGES.bodyKits,
  },
  {
    id: "satin-blackout",
    title: "Satin Blackout Package",
    location: "Local Shop",
    category: "Styling",
    serviceId: "performance-styling",
    beforeImage: MINHS_IMAGES.serviceBay,
    afterImage: MINHS_IMAGES.performance,
  },
  {
    id: "custom-livery",
    title: "Custom Design Livery",
    location: "Local Shop",
    category: "Design",
    serviceId: "custom-design",
    beforeImage: MINHS_IMAGES.bmwDetail,
    afterImage: MINHS_IMAGES.customDesign,
  },
];

export const PROJECTS = BEFORE_AFTER_PROJECTS.map((p, i) => ({
  id: p.id,
  title: p.title,
  category: p.category,
  serviceId: p.serviceId,
  location: p.location,
  year: "2025",
  client: "Envision Client",
  value: "—",
  description: `${p.title} — precision prep, premium materials, and a finish built to turn heads.`,
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
    id: "lead-installer",
    bio: "Leads complex wrap and PPF installs with obsessive attention to panel gaps and edge work.",
    name: "Alex",
    role: "Lead Installer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=85",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "design-lead",
    bio: "Turns rough ideas into wrap-ready designs — colorways, liveries, and brand graphics.",
    name: "Jordan",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=85",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    id: "detail-specialist",
    bio: "Paint correction and ceramic coating specialist who preps every surface for a show finish.",
    name: "Sam",
    role: "Detail Specialist",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=300&h=300&q=85",
    social: { twitter: "#", linkedin: "#" },
  },
];

export const TESTIMONIALS = [
  {
    name: "Chris R.",
    role: "Wrap Client",
    quote: "Full color wrap looks factory — seams are invisible and the color hits different in the sun.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
  {
    name: "Megan T.",
    role: "Tint Client",
    quote: "Ceramic tint dropped the cabin heat immediately. Clean install, no bubbling, perfect edges.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
  {
    name: "Derek L.",
    role: "PPF Client",
    quote: "PPF on my front end already took rock chips that would’ve ruined the paint. Worth every dollar.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
  {
    name: "Ashley K.",
    role: "Full Build Client",
    quote: "They helped me envision the whole look — wrap, tint, and blackout package. Shop nailed it.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
  {
    name: "Jordan M.",
    role: "Commercial Client",
    quote: "Our vans look branded and professional. Fast turnaround and the vinyl still looks sharp.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
  {
    name: "Tyler B.",
    role: "Detail Client",
    quote: "Show-quality detail after the wrap. The ceramic coat makes water bead like glass.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=85",
    rating: 5,
  },
];

export const BLOG_POSTS = [
  {
    id: "wrap-vs-paint",
    title: "Wrap vs Paint: Which Is Right for Your Build?",
    excerpt: "Cost, protection, and design flexibility — how to choose between vinyl and paint.",
    date: "April 12, 2025",
    author: "Envision Team",
    category: "Wraps",
    image: MINHS_IMAGES.wraps,
    content:
      "A quality wrap can completely change your vehicle’s look without committing to permanent paint. We help drivers compare durability, design options, and long-term value.",
  },
  {
    id: "ceramic-tint-utah",
    title: "Why Ceramic Tint Matters",
    excerpt: "Heat rejection, UV protection, and clarity — what to look for in performance film.",
    date: "March 8, 2025",
    author: "Envision Team",
    category: "Tint",
    image: MINHS_IMAGES.tint,
    content:
      "Strong sun and heat make ceramic tint worth it. Quality film keeps cabins cooler, protects interiors, and maintains a clean exterior finish without heavy dye fade.",
  },
  {
    id: "ppf-coverage-guide",
    title: "PPF Coverage Guide: Partial vs Full Front",
    excerpt: "Where rock chips hit hardest and how much film coverage makes sense.",
    date: "February 2, 2025",
    author: "Envision Team",
    category: "PPF",
    image: MINHS_IMAGES.ppf,
    content:
      "From bumper-only to full-front or track packs, we map coverage to how you drive — highway miles, canyon runs, or show parking.",
  },
];

export const STATS = [
  { label: "Years Personalizing", value: 15, suffix: "+" },
  { label: "Core Services", value: 10, suffix: "+" },
  { label: "5-Star Reviews", value: 200, suffix: "+" },
  { label: "Custom Builds", value: 500, suffix: "+" },
];

export const FAQ_ITEMS = [
  {
    question: "What services does Envision offer?",
    answer:
      "Vehicle wraps, window tint, paint protection film, detail & ceramic coating, body kits/aero, custom design, commercial/fleet graphics, and full visual builds.",
  },
  {
    question: "Do you do full color-change wraps?",
    answer:
      "Yes — full color-change, accents, chrome delete, racing stripes, and custom graphics. We’ll help you pick materials and finishes that fit your goals.",
  },
  {
    question: "What tint options do you install?",
    answer:
      "We install ceramic and performance films chosen for heat rejection, clarity, and longevity. Shade legality guidance is part of the consult.",
  },
  {
    question: "How do I book a consult?",
    answer:
      "Use our contact form or call the shop — we’ll set up a consult to talk wraps, tint, PPF, or a full build.",
  },
  {
    question: "Do you wrap commercial vehicles?",
    answer:
      "Absolutely — fleet branding, commercial wraps, and wall wraps for businesses that want a sharp, consistent look.",
  },
  {
    question: "What are your hours?",
    answer: "Monday–Friday 8:00 AM–5:00 PM. Saturday by appointment only.",
  },
  {
    question: "Can you combine wrap, tint, and PPF?",
    answer:
      "Yes — many clients package services into one build. We’ll sequence prep and install so every layer looks intentional.",
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
  { to: "/services/vehicle-wraps", label: "Vehicle Wraps" },
  { to: "/services/window-tint", label: "Window Tint" },
  { to: "/services/paint-protection", label: "Paint Protection" },
  { to: "/services/auto-detail", label: "Auto Detail" },
  { to: "/services/custom-builds", label: "Custom Builds" },
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
  "Local Area",
  "Surrounding Cities",
  "Metro Drivers",
  "Daily Commuters",
  "Show Builds",
  "Fleet Accounts",
  "Performance Cars",
  "Luxury Vehicles",
  "Trucks & SUVs",
  "Commercial Vans",
];

export const BLOG_LIST_PAGE_SIZE = 2;

export function getBlogCategoryCounts(): { label: string; count: number }[] {
  const m = new Map<string, number>();
  for (const p of BLOG_POSTS) m.set(p.category, (m.get(p.category) || 0) + 1);
  return [...m.entries()].map(([label, count]) => ({ label, count })).sort((a, b) => a.label.localeCompare(b.label));
}

export const BLOG_TAGS = ["WRAPS", "TINT", "PPF", "DETAIL", "BUILDS"];

export const PROJECTS_PAGE_STATS = [
  { label: "Years Experience", value: "15+" },
  { label: "Core Services", value: "10+" },
  { label: "Pro Installs", value: "500+" },
  { label: "Shop Focus", value: "Custom" },
];

export const ABOUT_STATS = [
  { label: "Years Personalizing", value: "15+" },
  { label: "Wrap & Film Services", value: "10+" },
  { label: "Custom Builds", value: "500+" },
  { label: "Happy Clients", value: "200+" },
  { label: "Shop Focus", value: "Custom" },
];

export const CORE_VALUES = [
  {
    id: "vision",
    icon: "Eye",
    title: "Design first",
    description: "We help you envision the finish before install day.",
  },
  {
    id: "craft",
    icon: "Award",
    title: "Craftsmanship",
    description: "Prep, alignment, and edges that look factory-clean.",
  },
  {
    id: "materials",
    icon: "ShieldCheck",
    title: "Premium materials",
    description: "Films and vinyls chosen for durability, UV exposure, and longevity.",
  },
  {
    id: "passion",
    icon: "Heart",
    title: "Car culture",
    description: "A shop that lives wraps, tint, and builds — not just sells them.",
  },
  {
    id: "clarity",
    icon: "Sparkles",
    title: "Clear communication",
    description: "Honest timelines, transparent quotes, and photo updates.",
  },
  {
    id: "protection",
    icon: "Shield",
    title: "Protect the investment",
    description: "PPF, ceramic, and care guidance that keep the look lasting.",
  },
];

export const CERTIFICATIONS = [
  { id: "wraps", sub: "Color · Graphics · Fleet", label: "Wrap Specialists" },
  { id: "tint", sub: "Ceramic · Performance", label: "Tint Pros" },
  { id: "ppf", sub: "Partial · Full front", label: "PPF Install" },
  { id: "detail", sub: "Correction · Ceramic", label: "Detail Shop" },
  { id: "local", sub: "Design · Install", label: "Local Passion" },
];

export const PROCESS_STEPS_ABOUT = PROCESS_STEPS.map((s, i) => ({
  ...s,
  num: String(i + 1).padStart(2, "0"),
}));

export const FAQ_TABS = [
  { id: "general", label: "GENERAL" },
  { id: "services", label: "SERVICES" },
  { id: "warranty", label: "MATERIALS" },
  { id: "appointments", label: "BOOKING" },
] as const;

export type FaqTabId = (typeof FAQ_TABS)[number]["id"];

export const FAQ_BY_CATEGORY: Record<FaqTabId, { question: string; answer: string }[]> = {
  general: FAQ_ITEMS.slice(0, 3),
  services: [
    {
      question: "Can you match a specific wrap color?",
      answer: "Yes — we work with major vinyl lines and can help you sample colors and finishes in-shop.",
    },
    {
      question: "Do you offer chrome delete?",
      answer: "Chrome delete and trim blackout packages are a common add-on to wraps and styling builds.",
    },
  ],
  warranty: [
    {
      question: "What films do you use?",
      answer: "We install premium wrap, tint, and PPF materials suited for UV exposure and daily driving.",
    },
    {
      question: "How do I care for a new wrap or PPF?",
      answer: "We’ll give you wash and cure guidance after install so edges and finish stay perfect.",
    },
  ],
  appointments: [
    {
      question: "How long does a wrap take?",
      answer: "Depends on coverage and complexity — we’ll confirm timeline during your consult.",
    },
    {
      question: "Do you take Saturday appointments?",
      answer: "Saturday is by appointment only. Contact the shop to reserve a slot.",
    },
  ],
};

export const SERVICES_PAGE_INTRO =
  "Wraps, ceramic tint, paint protection film, detail, aero, and custom builds — professional automotive personalization for drivers who want more than stock.";

export const COMMERCIAL_FITOUT_CARDS = [
  {
    id: "color-change",
    icon: "Palette",
    title: "Color Change Wrap",
    description: "Transform the entire vehicle without permanent paint.",
  },
  {
    id: "heat-tint",
    icon: "Sun",
    title: "Cabin Heat Issues",
    description: "Ceramic tint that cuts heat and protects interiors.",
  },
  {
    id: "rock-chips",
    icon: "Shield",
    title: "Rock Chip Protection",
    description: "PPF for bumpers, hoods, and high-impact zones.",
  },
  {
    id: "dull-paint",
    icon: "Sparkles",
    title: "Dull or Swirled Paint",
    description: "Correction and ceramic coating for deep gloss.",
  },
  {
    id: "branding",
    icon: "Truck",
    title: "Business Branding",
    description: "Fleet and commercial wraps that look pro on the road.",
  },
  {
    id: "full-build",
    icon: "Gauge",
    title: "Full Visual Build",
    description: "Combine wrap, tint, PPF, and aero into one package.",
  },
];

export const SERVICE_SECTION_IMAGES: Record<string, string> = {
  "vehicle-wraps": MINHS_IMAGES.wraps,
  "window-tint": MINHS_IMAGES.tint,
  "paint-protection": MINHS_IMAGES.ppf,
  "auto-detail": MINHS_IMAGES.detail,
  "custom-builds": MINHS_IMAGES.builds,
  "body-kits": MINHS_IMAGES.bodyKits,
  "custom-design": MINHS_IMAGES.customDesign,
  "commercial-fleet": MINHS_IMAGES.fleet,
  "ceramic-coating": MINHS_IMAGES.ceramic,
  "performance-styling": MINHS_IMAGES.performance,
};

export const SERVICE_DEEP_DIVES = SERVICES.map(s => ({
  id: s.id,
  category: "PERSONALIZATION",
  title: s.title,
  subtitle: "ENVISION WRAPS",
  body: [
    s.description,
    "Consult-driven installs with premium materials, careful prep, and finishes built to last.",
  ],
  image: SERVICE_SECTION_IMAGES[s.id] ?? s.image,
  inclusions: [
    "Design consult",
    "Written scope & quote",
    "Surface prep",
    "Premium materials",
    "Precision installation",
    "Aftercare guidance",
  ],
}));

export const LEAD_FORM = {
  title: "Start Your Build",
  description: "Tell us about your vehicle and the look you want — wraps, tint, PPF, or a full package.",
  bullets: [
    "Free design consults",
    "Wrap, tint & PPF quotes",
    "Custom build packages",
    "In-shop visits welcome",
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
  "Paint condition and wrap readiness",
  "Tint shade goals and heat rejection needs",
  "PPF coverage map for high-impact zones",
  "Chrome delete / accent opportunities",
  "Detail and ceramic coating prep",
  "Full visual build sequencing",
];

export const CONTACT_TRUST_STRIP = [
  {
    id: "wraps",
    title: "Wrap Specialists",
    description: "Color-change, graphics, and fleet branding.",
    icon: "Palette" as const,
  },
  {
    id: "tint",
    title: "Ceramic Tint",
    description: "Cooler cabins and a clean finished look.",
    icon: "Sun" as const,
  },
  {
    id: "ppf",
    title: "PPF Protection",
    description: "Defend paint from chips and road debris.",
    icon: "Shield" as const,
  },
  {
    id: "local",
    title: "Local Shop",
    description: "Passion for automotive personalization.",
    icon: "Heart" as const,
  },
];

export const ABOUT_HERO_BADGES = [
  { id: "wraps", title: "Wraps", icon: "Palette" as const },
  { id: "tint", title: "Tint", icon: "Sun" as const },
  { id: "ppf", title: "PPF", icon: "Shield" as const },
  { id: "detail", title: "Detail", icon: "Sparkles" as const },
];

export const CTA_SECTION = {
  headline: "Ready To Envision Your Build?",
  subheadline: "Book a consult — wraps, tint, PPF, and more.",
  primaryCta: { label: "Start Your Build", to: "/contact" },
  secondaryCta: { label: "Contact Us", to: "/contact" },
};
