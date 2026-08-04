import { Link } from "react-router-dom";
import { ArrowRight, Phone, Wrench, CircleDot, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { useTheme } from "@/contexts/ThemeContext";
import { MINHS_IMAGES } from "@/data/siteData";

const LICENSE_BADGES = [
  { icon: Wrench, label: "Full-Service Repair" },
  { icon: CircleDot, label: "Brake Specialists" },
  { icon: Cpu, label: "Diagnostics" },
] as const;

const HomeHero = () => {
  const { homeHero: HOME_HERO, company: COMPANY, siteTop: SITE_TOP } = useSiteContent();
  const { resolveServiceImage } = useTheme();
  const phoneHref = `tel:${(COMPANY.phone || "").replace(/[^+\d]/g, "")}`;
  const heroImage =
    HOME_HERO.image ||
    resolveServiceImage("general-maintenance", MINHS_IMAGES.heroLuxury);
  const secondaryTo = HOME_HERO.secondaryCta?.to || "/contact";
  const secondaryIsTel = secondaryTo.startsWith("tel:");

  return (
    <section className="relative overflow-hidden bg-[hsl(var(--primary))]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] lg:min-h-[580px]">
        <div className="relative z-10 flex flex-col justify-center py-12 lg:py-16 text-white">
          <div
            aria-hidden
            className="absolute inset-0 bg-[hsl(var(--primary))] lg:bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--primary))] to-[hsl(var(--minhs-dark-panel))]"
          />
          <div className="relative w-full px-4 sm:px-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-10 xl:pr-14">
            <div className="max-w-xl">
              {HOME_HERO.eyebrow && (
                <span className="inline-block text-[hsl(var(--envision-pink))] text-xs sm:text-sm font-bold tracking-[0.22em] uppercase font-display mb-4">
                  {HOME_HERO.eyebrow}
                </span>
              )}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[2.85rem] xl:text-[3.35rem] font-bold uppercase leading-[0.95] tracking-wide">
                <span className="block">{HOME_HERO.headlineBefore}</span>
                {HOME_HERO.headlineHighlight && (
                  <span className="mt-1 block whitespace-nowrap text-[hsl(var(--secondary))]">
                    {HOME_HERO.headlineHighlight}
                  </span>
                )}
              </h1>
              <p className="mt-4 text-base sm:text-lg font-display font-semibold uppercase tracking-wide text-[hsl(var(--envision-pink))]">
                {HOME_HERO.featuredEyebrow || "Orlando · Quality Repairs"}
              </p>
              <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed max-w-md">
                {HOME_HERO.body}
              </p>

              {(COMPANY.phone || "").trim() ? (
                <a
                  href={phoneHref}
                  className="mt-8 inline-flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 group"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] minhs-glow shrink-0 ring-2 ring-[hsl(var(--envision-pink))]/50">
                    <Phone className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--envision-pink))] font-semibold">
                      Call Now
                    </span>
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-wide group-hover:text-[hsl(var(--secondary))] transition-colors">
                      {COMPANY.phone}
                    </span>
                  </span>
                </a>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 font-display font-bold uppercase tracking-wider rounded-sm px-6"
                >
                  <Link to={HOME_HERO.primaryCta?.to || "/contact"}>
                    {HOME_HERO.primaryCta?.label || "Schedule Now"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="minhs-btn-outline-on-dark-pink font-display font-bold uppercase tracking-wider rounded-sm"
                >
                  {secondaryIsTel ? (
                    <a href={secondaryTo}>{HOME_HERO.secondaryCta?.label || "Call Now"}</a>
                  ) : (
                    <Link to={secondaryTo}>{HOME_HERO.secondaryCta?.label || "Contact Us"}</Link>
                  )}
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {LICENSE_BADGES.map(({ icon: Icon, label }, i) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-wider"
                  >
                    <Icon
                      className={`h-4 w-4 ${i % 2 === 0 ? "text-[hsl(var(--secondary))]" : "text-[hsl(var(--envision-pink))]"}`}
                    />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
          <img
            src={heroImage}
            alt={`${COMPANY.name} auto repair shop`}
            className="absolute inset-0 h-full w-full object-cover minhs-clip-diagonal"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/80 via-transparent to-transparent lg:bg-gradient-to-l from-transparent via-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/70 minhs-clip-diagonal"
          />
          <div className="absolute bottom-6 left-6 lg:left-auto lg:right-8 lg:bottom-10 max-w-[220px] rounded-sm border border-[hsl(var(--envision-pink))]/50 bg-[hsl(var(--primary))]/90 backdrop-blur-sm p-4 text-white shadow-[0_0_28px_-10px_hsl(var(--envision-pink)/0.55)]">
            <span className="font-display text-3xl font-bold text-[hsl(var(--secondary))]">
              {SITE_TOP.ratingValue || "5.0"}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-white/60 mt-1">
              {SITE_TOP.ratingCount || "Google"} {SITE_TOP.ratingLabel || "Reviews"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
