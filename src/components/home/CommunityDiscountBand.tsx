import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMMUNITY_DISCOUNT } from "@/data/siteData";

const CommunityDiscountBand = () => {
  const d = COMMUNITY_DISCOUNT;

  return (
    <section className="relative overflow-hidden bg-[hsl(var(--primary))] text-white py-12 sm:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 90% 20%, hsl(var(--secondary) / 0.35), transparent 55%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-[hsl(var(--secondary))] text-xs font-bold uppercase tracking-[0.22em] font-display">
            <Heart className="h-3.5 w-3.5" />
            {d.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide leading-tight">
            {d.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/75 max-w-xl leading-relaxed">{d.body}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {d.groups.map(group => (
              <span
                key={group}
                className="inline-flex items-center rounded-sm border border-[hsl(var(--secondary))]/40 bg-[hsl(var(--secondary))]/10 px-3 py-1.5 text-[11px] font-display font-bold uppercase tracking-wider text-[hsl(var(--secondary))]"
              >
                {group}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 lg:flex lg:justify-end">
          <Button
            asChild
            size="lg"
            className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 font-display font-bold uppercase tracking-wider rounded-sm px-8"
          >
            <Link to={d.cta.to}>
              {d.cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityDiscountBand;
