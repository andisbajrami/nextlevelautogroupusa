import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { MINHS_IMAGES } from "@/data/siteData";
import ElectricalPageHero from "@/components/sections/ElectricalPageHero";
import CTASection from "@/components/sections/CTASection";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { SERVICE_AREAS } from "@/data/siteData";
import { Button } from "@/components/ui/button";

const ServiceAreas = () => {
  const { company: COMPANY, mapEmbedUrl } = useSiteContent();
  const phoneHref = `tel:${(COMPANY.phone || "").replace(/[^+\d]/g, "")}`;

  return (
    <Layout>
      <Helmet>
        <title>Service Areas | {COMPANY.name}</title>
        <meta
          name="description"
          content={`${COMPANY.name} serves drivers across our local area with wraps, tint, paint protection, and custom builds.`}
        />
      </Helmet>

      <ElectricalPageHero
        eyebrow="Coverage"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Service Areas" }]}
        title="Personalization Near You"
        eyebrowAfter="Local Shop · Surrounding Areas"
        body="Envision serves drivers across our local area with professional wraps, tint, paint protection, and custom builds."
        image={MINHS_IMAGES.serviceAreasHero}
        imageAlt="Custom wrapped vehicles at Envision Wraps"
      />

      <section className="bg-[hsl(var(--minhs-surface))] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Who We Serve
            </h2>
            <p className="text-slate-600 leading-relaxed">
              From daily drivers to show builds and fleet accounts — if you want a custom look, we can help. Reach out if you&apos;re unsure we cover your area.
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
              Visit The Shop
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Book a consult for wraps, tint, PPF, detail, or a full visual build. Share your vehicle and goals — we’ll map materials, scope, and timeline.
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
            <Button
              asChild
              className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 font-display font-bold uppercase tracking-wide"
            >
              <Link to="/contact">
                Start Your Build
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-7 rounded-lg overflow-hidden min-h-[360px] ring-1 ring-slate-200 bg-[hsl(var(--minhs-surface))]">
            {mapEmbedUrl ? (
              <iframe
                title="Envision service area map"
                src={mapEmbedUrl}
                className="w-full h-full min-h-[360px]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full min-h-[360px] items-center justify-center p-8 text-center">
                <div>
                  <MapPin className="mx-auto h-10 w-10 text-[hsl(var(--secondary))] mb-4" />
                  <p className="font-display text-lg font-bold uppercase tracking-wide text-[hsl(var(--primary))]">
                    Shop map coming soon
                  </p>
                  <p className="mt-2 text-sm text-slate-600 max-w-sm">
                    Contact Envision for directions and consult availability.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start your build?"
        subtitle="Book a consult for wraps, tint, PPF, detail, and custom builds."
        primaryLabel="START YOUR BUILD"
        secondaryLabel="CONTACT US"
      />
    </Layout>
  );
};

export default ServiceAreas;
