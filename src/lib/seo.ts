/**
 * Technical SEO helpers for NextLevel Auto Group USA.
 * Titles, descriptions, canonicals, and JSON-LD use only verified site data.
 */

import {
  BLOG_POSTS,
  COMPANY,
  FAQ_ITEMS,
  PROJECTS,
  SERVICE_AREAS,
  SERVICES,
} from "../data/siteData";

export const DEFAULT_SITE_ORIGIN = "https://www.nextlevelautogroupusa.com";
export const SITE_NAME_SHORT = "NextLevel Auto Group";
export const INVENTORY_PATH = "/inventory";
export const DEFAULT_OG_IMAGE = "/og-image.png";
export const DEFAULT_LOGO = "/logo.png";
export const GEO = { latitude: 28.5085, longitude: -81.3975 } as const;

export const KNOWN_MAKES = [
  "Mercedes-Benz",
  "Volkswagen",
  "Mitsubishi",
  "Chevrolet",
  "Chrysler",
  "Hyundai",
  "Nissan",
  "Toyota",
  "Lexus",
  "Dodge",
  "Audi",
  "Ford",
  "Jeep",
  "BMW",
  "Kia",
  "Honda",
] as const;

export type SeoVehicle = {
  id: string;
  title: string;
  category?: string;
  location?: string;
  year?: string;
  client?: string;
  mileage?: string;
  value?: string;
  features?: string[];
  description?: string;
  image?: string;
  gallery?: string[];
  serviceId?: string;
};

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
};

function envValue(name: string): string {
  try {
    if (typeof process !== "undefined" && process.env?.[name]) {
      return String(process.env[name]);
    }
  } catch {
    /* ignore */
  }
  try {
    const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
    if (env?.[name]) return String(env[name]);
  } catch {
    /* ignore */
  }
  return "";
}

export function getSiteOrigin(): string {
  const fromEnv = (envValue("VITE_SITE_URL") || envValue("SITE_URL")).replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return DEFAULT_SITE_ORIGIN;
}

export function absoluteUrl(pathOrUrl = "/"): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const origin = getSiteOrigin();
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${origin}${path}`;
}

export function inventoryPath(id?: string): string {
  return id ? `${INVENTORY_PATH}/${id}` : INVENTORY_PATH;
}

export function parsePriceAmount(value?: string): number | undefined {
  if (!value) return undefined;
  const n = Number(String(value).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

export function parseMileageValue(mileage?: string): number | undefined {
  if (!mileage) return undefined;
  const n = Number(String(mileage).replace(/[^0-9]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

export function parseVehicleTitle(title: string, yearHint?: string) {
  const year = yearHint || title.match(/^(?:19|20)\d{2}/)?.[0] || "";
  let rest = title.replace(/^(?:19|20)\d{2}\s+/, "").trim();
  const make =
    [...KNOWN_MAKES].sort((a, b) => b.length - a.length).find(m => rest.toLowerCase().startsWith(m.toLowerCase())) ||
    "";
  if (make) rest = rest.slice(make.length).trim();
  return { year, make, model: rest };
}

export function vehicleDocumentTitle(vehicle: SeoVehicle): string {
  return `${vehicle.title} for Sale in Orlando, FL | ${SITE_NAME_SHORT}`;
}

export function vehicleMetaDescription(vehicle: SeoVehicle): string {
  const loc = vehicle.location || "Orlando, FL";
  const bits = [`Explore this ${vehicle.title} at ${SITE_NAME_SHORT} in ${loc}.`];

  if (vehicle.category && vehicle.mileage && vehicle.value) {
    bits.push(`This used ${vehicle.category} has ${vehicle.mileage} and is listed at ${vehicle.value}.`);
  } else if (vehicle.mileage && vehicle.value) {
    bits.push(`It has ${vehicle.mileage} and is listed at ${vehicle.value}.`);
  } else if (vehicle.value) {
    bits.push(`Listed at ${vehicle.value}.`);
  } else if (vehicle.mileage) {
    bits.push(`It has ${vehicle.mileage}.`);
  }

  if (vehicle.features?.[0]) bits.push(`${vehicle.features[0]}.`);
  bits.push("View photos and contact us for more information.");
  return bits.join(" ").replace(/\s+/g, " ").trim();
}

export function vehicleImageAlt(vehicle: Pick<SeoVehicle, "title">, photoIndex = 0): string {
  if (photoIndex <= 0) return `${vehicle.title} for sale in Orlando, FL`;
  return `${vehicle.title} photo ${photoIndex + 1} in Orlando, FL`;
}

export function truncateMeta(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const sliced = clean.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced).trim()}…`;
}

function dealershipId(): string {
  return `${getSiteOrigin()}/#dealership`;
}

export function buildAutoDealerSchema(): Record<string, unknown> {
  const origin = getSiteOrigin();
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": dealershipId(),
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    description: COMPANY.tagline,
    url: `${origin}/`,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    logo: absoluteUrl(DEFAULT_LOGO),
    address: {
      "@type": "PostalAddress",
      streetAddress: "2120 S Orange Blossom Trl",
      addressLocality: "Orlando",
      addressRegion: "FL",
      postalCode: "32805",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:30",
        closes: "16:00",
      },
    ],
    areaServed: SERVICE_AREAS.map(name => ({ "@type": "Place", name })),
    hasMap: "https://www.openstreetmap.org/?mlat=28.5085&mlon=-81.3975#map=17/28.5085/-81.3975",
  };
  return schema;
}

export function buildWebSiteSchema(): Record<string, unknown> {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    name: COMPANY.name,
    url: `${origin}/`,
    publisher: { "@id": dealershipId() },
    inLanguage: "en-US",
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(items: { question: string; answer: string }[]): Record<string, unknown> | null {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildVehicleSchema(vehicle: SeoVehicle): Record<string, unknown> {
  const parsed = parseVehicleTitle(vehicle.title, vehicle.year);
  const url = absoluteUrl(inventoryPath(vehicle.id));
  const images = (vehicle.gallery?.length ? vehicle.gallery : vehicle.image ? [vehicle.image] : [])
    .filter(Boolean)
    .map(src => absoluteUrl(src));
  const price = parsePriceAmount(vehicle.value);
  const mileage = parseMileageValue(vehicle.mileage);
  const available = /available/i.test(vehicle.client || "");

  const car: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Car",
    "@id": `${url}#vehicle`,
    name: vehicle.title,
    url,
    itemCondition: "https://schema.org/UsedCondition",
  };

  if (vehicle.description) car.description = vehicle.description;
  if (images.length) car.image = images;
  if (parsed.year) car.vehicleModelDate = parsed.year;
  if (parsed.make) car.brand = { "@type": "Brand", name: parsed.make };
  if (parsed.model) car.model = parsed.model;
  if (vehicle.category) car.bodyType = vehicle.category;
  if (vehicle.location) car.areaServed = vehicle.location;

  if (mileage) {
    car.mileageFromOdometer = {
      "@type": "QuantitativeValue",
      value: mileage,
      unitCode: "SMI",
    };
  }

  if (price) {
    const offer: Record<string, unknown> = {
      "@type": "Offer",
      url,
      price,
      priceCurrency: "USD",
      itemCondition: "https://schema.org/UsedCondition",
      seller: { "@id": dealershipId() },
    };
    if (available) offer.availability = "https://schema.org/InStock";
    car.offers = offer;
  }

  return car;
}

export function buildInventoryItemListSchema(vehicles: SeoVehicle[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Used cars for sale in Orlando, FL",
    itemListElement: vehicles.map((vehicle, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(inventoryPath(vehicle.id)),
      name: vehicle.title,
    })),
  };
}

export const HOME_SEO = {
  path: "/",
  title: "Used Cars & Vehicles in Orlando, FL | NextLevel Auto Group USA",
  description:
    "Shop used cars and vehicles at NextLevel Auto Group USA in Orlando, FL. Browse current inventory, apply for financing, or visit us at 2120 S Orange Blossom Trl.",
} as const;

export const INVENTORY_SEO = {
  path: INVENTORY_PATH,
  title: "Used Cars for Sale in Orlando, FL | NextLevel Auto Group USA",
  description:
    "Browse used cars, SUVs, and vehicles for sale at NextLevel Auto Group USA in Orlando, FL. View photos, mileage, and pricing, then schedule a visit or apply for financing.",
} as const;

export function staticPageSeo(): Record<string, Omit<PageSeo, "jsonLd">> {
  return {
    "/": { ...HOME_SEO, image: DEFAULT_OG_IMAGE, imageAlt: `${COMPANY.name} in Orlando, FL` },
    [INVENTORY_PATH]: {
      ...INVENTORY_SEO,
      image: DEFAULT_OG_IMAGE,
      imageAlt: "Used cars for sale at NextLevel Auto Group USA in Orlando",
    },
    "/about": {
      path: "/about",
      title: `About ${SITE_NAME_SHORT} | Used Car Dealership in Orlando, FL`,
      description:
        "Learn about NextLevel Auto Group USA, an Orlando used car dealership on S Orange Blossom Trail offering quality inventory, fair offers, trade-ins, and personal service.",
    },
    "/services": {
      path: "/services",
      title: `Vehicle Sales, Trade-Ins & Financing | ${SITE_NAME_SHORT}`,
      description: `Buy used vehicles, sell or trade yours, and get financing guidance at ${COMPANY.name} in Orlando, FL.`,
    },
    "/financing/apply": {
      path: "/financing/apply",
      title: `Auto Financing in Orlando, FL | ${COMPANY.name}`,
      description:
        "Apply for auto financing at NextLevel Auto Group USA in Orlando, FL. Submit your information and the vehicle you want — we send it for bank review and call you with the result.",
    },
    "/contact": {
      path: "/contact",
      title: `Contact ${COMPANY.name} | Orlando, FL`,
      description: `Contact NextLevel Auto Group USA at 2120 S Orange Blossom Trl, Orlando, FL 32805. Call ${COMPANY.phone} to schedule a visit, ask about inventory, or apply for financing.`,
    },
    "/faq": {
      path: "/faq",
      title: `Used Car Dealership FAQ | ${SITE_NAME_SHORT} Orlando`,
      description: `Answers about used cars, financing, hours, and scheduling at ${COMPANY.name} in Orlando, FL.`,
    },
    "/reviews": {
      path: "/reviews",
      title: `Customer Reviews | ${SITE_NAME_SHORT} Orlando`,
      description: `Read customer feedback about buying, selling, and trading vehicles at ${COMPANY.name} in Orlando, FL.`,
    },
    "/service-areas": {
      path: "/service-areas",
      title: `Orlando Service Areas | ${SITE_NAME_SHORT}`,
      description: `${COMPANY.name} serves Orlando and nearby Central Florida communities with used vehicles, trade-ins, and financing help.`,
    },
    "/blog": {
      path: "/blog",
      title: `Used Car Buying & Selling Tips | ${SITE_NAME_SHORT}`,
      description: `Practical advice on buying used vehicles, selling for a fair price, and trade-ins from ${COMPANY.name} in Orlando.`,
    },
    "/team": {
      path: "/team",
      title: `Our Team | ${COMPANY.name}`,
      description: `Meet the sales, purchase, and customer care team helping Orlando drivers buy and sell vehicles at ${COMPANY.name}.`,
    },
    "/careers": {
      path: "/careers",
      title: `Careers | ${COMPANY.name}`,
      description: `Join ${COMPANY.name} in Orlando — sales, purchase, and customer care roles at a local used car dealership.`,
    },
    "/privacy": {
      path: "/privacy",
      title: `Privacy Policy | ${COMPANY.name}`,
      description: `Privacy Policy for ${COMPANY.name} — how we collect, use, and protect your information.`,
    },
    "/terms": {
      path: "/terms",
      title: `Terms of Service | ${COMPANY.name}`,
      description: `Terms of Service for ${COMPANY.name} — website use and service guidelines.`,
    },
  };
}

export function servicePageSeo(id: string, title: string, description: string): PageSeo {
  return {
    path: `/services/${id}`,
    title: `${title} in Orlando, FL | ${SITE_NAME_SHORT}`,
    description: `${description} Serving Orlando, FL at ${COMPANY.name}.`,
  };
}

export function vehiclePageSeo(vehicle: SeoVehicle): PageSeo {
  const path = inventoryPath(vehicle.id);
  return {
    path,
    title: vehicleDocumentTitle(vehicle),
    description: vehicleMetaDescription(vehicle),
    image: vehicle.image,
    imageAlt: vehicleImageAlt(vehicle),
    jsonLd: [
      buildAutoDealerSchema(),
      buildVehicleSchema(vehicle),
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Inventory", path: INVENTORY_PATH },
        { name: vehicle.title, path },
      ]),
    ],
  };
}

export function getSitemapEntries(): { path: string; changefreq: string; priority: string }[] {
  const entries: { path: string; changefreq: string; priority: string }[] = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: INVENTORY_PATH, changefreq: "weekly", priority: "0.9" },
    { path: "/financing/apply", changefreq: "monthly", priority: "0.8" },
    { path: "/contact", changefreq: "monthly", priority: "0.8" },
    { path: "/about", changefreq: "monthly", priority: "0.7" },
    { path: "/services", changefreq: "monthly", priority: "0.7" },
    { path: "/faq", changefreq: "monthly", priority: "0.6" },
    { path: "/service-areas", changefreq: "monthly", priority: "0.6" },
    { path: "/reviews", changefreq: "monthly", priority: "0.5" },
    { path: "/blog", changefreq: "monthly", priority: "0.5" },
    { path: "/team", changefreq: "yearly", priority: "0.3" },
    { path: "/careers", changefreq: "yearly", priority: "0.3" },
    { path: "/privacy", changefreq: "yearly", priority: "0.2" },
    { path: "/terms", changefreq: "yearly", priority: "0.2" },
  ];

  for (const service of SERVICES) {
    entries.push({ path: `/services/${service.id}`, changefreq: "monthly", priority: "0.6" });
  }
  for (const vehicle of PROJECTS) {
    entries.push({ path: inventoryPath(vehicle.id), changefreq: "weekly", priority: "0.8" });
  }
  for (const post of BLOG_POSTS) {
    entries.push({ path: `/blog/${post.id}`, changefreq: "monthly", priority: "0.4" });
  }

  return entries;
}

export function buildSitemapXml(lastmod = new Date().toISOString().slice(0, 10)): string {
  const urls = getSitemapEntries()
    .map(
      entry => `  <url>
    <loc>${absoluteUrl(entry.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function buildRobotsTxt(): string {
  const sitemap = absoluteUrl("/sitemap.xml");
  return `User-agent: Googlebot
Allow: /
Disallow: /*?

User-agent: Bingbot
Allow: /
Disallow: /*?

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
Disallow: /*?

Sitemap: ${sitemap}
`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function upsertMeta(html: string, attr: "name" | "property", key: string, content: string): string {
  const safe = escapeHtml(content);
  const pattern = new RegExp(`<meta[^>]*${attr}=["']${key}["'][^>]*>`, "i");
  const tag = `<meta ${attr}="${key}" content="${safe}" />`;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function upsertLink(html: string, rel: string, href: string): string {
  const pattern = new RegExp(`<link[^>]*rel=["']${rel}["'][^>]*>`, "i");
  const tag = `<link rel="${rel}" href="${escapeHtml(href)}" />`;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

export function applyPageSeoToHtml(html: string, page: PageSeo): string {
  const url = absoluteUrl(page.path);
  const image = absoluteUrl(page.image || DEFAULT_OG_IMAGE);
  const imageAlt = page.imageAlt || `${COMPANY.name} — Orlando`;
  let out = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
  out = upsertMeta(out, "name", "description", page.description);
  out = upsertMeta(out, "property", "og:title", page.title);
  out = upsertMeta(out, "property", "og:description", page.description);
  out = upsertMeta(out, "property", "og:url", url);
  out = upsertMeta(out, "property", "og:type", page.type || "website");
  out = upsertMeta(out, "property", "og:image", image);
  out = upsertMeta(out, "property", "og:image:alt", imageAlt);
  out = upsertMeta(out, "property", "og:site_name", COMPANY.name);
  out = upsertMeta(out, "property", "og:locale", "en_US");
  out = upsertMeta(out, "name", "twitter:card", "summary_large_image");
  out = upsertMeta(out, "name", "twitter:title", page.title);
  out = upsertMeta(out, "name", "twitter:description", page.description);
  out = upsertMeta(out, "name", "twitter:image", image);
  out = upsertLink(out, "canonical", url);
  if (page.noindex) {
    out = upsertMeta(out, "name", "robots", "noindex, nofollow");
  }
  if (page.image && page.path !== "/") {
    const preloadHref = page.image.startsWith("http") ? page.image : page.image;
    out = out.replace(
      /<link rel="preload" as="image" href="\/images\/hero\.jpg"[^>]*>/i,
      `<link rel="preload" as="image" href="${escapeHtml(preloadHref)}" fetchpriority="high" />`,
    );
  }

  const graphs = page.jsonLd?.length ? page.jsonLd : [];
  if (graphs.length) {
    const scripts = graphs
      .map(data => `    <script type="application/ld+json">${JSON.stringify(data)}</script>`)
      .join("\n");
    out = out.replace("</head>", `${scripts}\n  </head>`);
  }
  return out;
}

export function getPrerenderPages(): PageSeo[] {
  const pages: PageSeo[] = [];
  const staticPages = staticPageSeo();

  pages.push({
    ...staticPages["/"],
    jsonLd: [buildAutoDealerSchema(), buildWebSiteSchema(), buildFaqSchema(FAQ_ITEMS)].filter(Boolean) as Record<
      string,
      unknown
    >[],
  });

  pages.push({
    ...staticPages[INVENTORY_PATH],
    jsonLd: [
      buildAutoDealerSchema(),
      buildInventoryItemListSchema(PROJECTS),
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Inventory", path: INVENTORY_PATH },
      ]),
    ],
  });

  for (const [path, page] of Object.entries(staticPages)) {
    if (path === "/" || path === INVENTORY_PATH) continue;
    const jsonLd: Record<string, unknown>[] = [buildAutoDealerSchema()];
    if (path === "/faq") {
      const faq = buildFaqSchema(FAQ_ITEMS);
      if (faq) jsonLd.push(faq);
    }
    if (path === "/contact" || path === "/about" || path === "/service-areas") {
      jsonLd.push(
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: page.title.split("|")[0].trim(), path },
        ]),
      );
    }
    pages.push({ ...page, jsonLd });
  }

  for (const service of SERVICES) {
    pages.push({
      ...servicePageSeo(service.id, service.title, service.description),
      jsonLd: [
        buildAutoDealerSchema(),
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.id}` },
        ]),
      ],
    });
  }

  for (const vehicle of PROJECTS) {
    pages.push(vehiclePageSeo(vehicle));
  }

  for (const post of BLOG_POSTS) {
    pages.push({
      path: `/blog/${post.id}`,
      title: `${post.title} | ${SITE_NAME_SHORT}`,
      description: post.excerpt,
      image: post.image,
      imageAlt: post.title,
      type: "article",
      jsonLd: [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.id}` },
        ]),
      ],
    });
  }

  return pages;
}

export { COMPANY, FAQ_ITEMS };
