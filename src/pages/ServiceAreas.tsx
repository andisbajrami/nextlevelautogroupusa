import { SeoHead } from "@/components/seo/SeoHead";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { MINHS_IMAGES } from "@/data/siteData";
import ElectricalPageHero from "@/components/sections/ElectricalPageHero";
import CTASection from "@/components/sections/CTASection";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { SERVICE_AREAS } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { buildAutoDealerSchema, staticPageSeo } from "@/lib/seo";

const ServiceAreas = () => {
  const { company: COMPANY, mapEmbedUrl } = useSiteContent();
  const phoneHref = `tel:${(COMPANY.phone || "").replace(/[^+\d]/g, "")}`;

  return (
    <Layout>
      <SeoHead
        title={staticPageSeo()["/service-areas"].title}
        description={staticPageSeo()["/service-areas"].description}
        path="/service-areas"
        jsonLd={[buildAutoDealerSchema()]}
      />

      <ElectricalPageHero
        eyebrow="Coverage"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Service Areas" }]}
        title="Serving Orlando & Nearby"
        eyebrowAfter="Orlando · Surrounding Areas"
        body={`${COMPANY.name} helps drivers across Orlando and nearby communities buy, sell, and trade vehicles.`}
        image={MINHS_IMAGES.serviceAreasHero}
        imageAlt="Orlando service area for NextLevel Auto Group USA LLC"
      />

      <section className="bg-[hsl(var(--minhs-surface))] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Who We Serve
            </h2>
            <p className="text-slate-600 leading-relaxed">
              From first-time buyers to sellers ready for a cash offer — if you need a trusted Orlando dealership, we can help.
              Reach out if you&apos;re unsure we cover your area.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {SERVICE_AREAS.map(city => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-[hsl(var(--secondary))] px-4 py-2 text-sm font-display font-bold uppercase tracking-wide text-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))]/10 transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-[hsl(var(--secondary))]" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))]">
              Visit The Lot
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Visit us at 2120 S Orange Blossom Trl to browse inventory, sell your vehicle, or discuss a trade-in.
              Use Get Directions below for an OpenStreetMap route.
            </p>
            <ul className="space-y-4 text-sm">
              {COMPANY.address ? (
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[hsl(var(--secondary))] shrink-0 mt-0.5" />
                  <span className="font-semibold text-[hsl(var(--primary))]">{COMPANY.address}</span>
                </li>
              ) : null}
              {COMPANY.phone ? (
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[hsl(var(--secondary))] shrink-0 mt-0.5" />
                  <a href={phoneHref} className="font-display font-bold text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))]">
                    {COMPANY.phone}
                  </a>
                </li>
              ) : null}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 font-display font-bold uppercase tracking-wide"
              >
                <Link to="/contact">
                  Schedule Visit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="minhs-btn-outline-on-light font-display font-bold uppercase tracking-wide"
              >
                <a
                  href="https://www.openstreetmap.org/directions?to=2120%20S%20Orange%20Blossom%20Trl%2C%20Orlando%2C%20FL%2032805#map=17/28.5085/-81.3975"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7 rounded-lg overflow-hidden min-h-[360px] ring-1 ring-slate-200 bg-[hsl(var(--minhs-surface))]">
            {mapEmbedUrl ? (
              <iframe
                title="NextLevel Auto Group USA LLC map"
                src={mapEmbedUrl}
                className="w-full h-full min-h-[360px]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full min-h-[360px] items-center justify-center p-8 text-center">
                <div>
                  <MapPin className="mx-auto h-10 w-10 text-[hsl(var(--secondary))] mb-4" />
                  <p className="font-display text-lg font-bold uppercase tracking-wide text-[hsl(var(--primary))]">
                    Lot map coming soon
                  </p>
                  <p className="mt-2 text-sm text-slate-600 max-w-sm">
                    Contact NextLevel Auto Group USA for directions and visit availability.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to buy or sell?"
        subtitle="Browse inventory, get a cash offer, or schedule a visit — Orlando and surrounding areas."
        primaryLabel="VIEW INVENTORY"
        secondaryLabel="CALL NOW"
      />
    </Layout>
  );
};

export default ServiceAreas;
