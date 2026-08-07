import { Link } from "react-router-dom";
import { ArrowRight, Car, DollarSign } from "lucide-react";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { useTheme } from "@/contexts/ThemeContext";
import { MINHS_IMAGES } from "@/data/siteData";

const ResidentialCommercialSplit = () => {
  const { services } = useSiteContent();
  const { resolveServiceImage } = useTheme();

  const salesSvc = services.find(s => s.id === "vehicle-sales");
  const buySvc = services.find(s => s.id === "we-buy-cars");

  const salesImg = salesSvc
    ? resolveServiceImage(salesSvc.id, salesSvc.image || MINHS_IMAGES.residentialSplit)
    : MINHS_IMAGES.residentialSplit;
  const buyImg = buySvc
    ? resolveServiceImage(buySvc.id, buySvc.image || MINHS_IMAGES.commercialSplit)
    : MINHS_IMAGES.commercialSplit;

  const panels = [
    {
      id: "sales",
      icon: Car,
      eyebrow: "Buy a Vehicle",
      title: salesSvc?.title || "Vehicle Sales",
      body:
        salesSvc?.description ||
        "Quality cars, trucks, and SUVs ready for Orlando roads.",
      image: salesImg,
      to: salesSvc ? `/services/${salesSvc.id}` : "/services/vehicle-sales",
      cta: "Browse Inventory",
    },
    {
      id: "buy",
      icon: DollarSign,
      eyebrow: "Sell Your Car",
      title: buySvc?.title || "We Buy Cars",
      body:
        buySvc?.description ||
        "Competitive cash offers for vehicles of nearly any make or model.",
      image: buyImg,
      to: buySvc ? `/services/${buySvc.id}` : "/services/we-buy-cars",
      cta: "Get a Cash Offer",
    },
  ] as const;

  return (
    <section className="bg-[hsl(var(--minhs-surface))]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px] md:min-h-[560px]">
        {panels.map((panel, index) => {
          const Icon = panel.icon;
          const accent = index % 2 === 1 ? "pink" : "blue";
          return (
            <Link
              key={panel.id}
              to={panel.to}
              className="group relative overflow-hidden flex flex-col justify-end p-8 sm:p-10 lg:p-14 min-h-[320px]"
            >
              <img
                src={panel.image}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))] via-[hsl(var(--primary))]/70 to-[hsl(var(--primary))]/20"
              />
              <div className="relative z-10 text-white max-w-md">
                <span
                  className={`inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-[0.22em] ${
                    accent === "pink" ? "text-[hsl(var(--envision-pink))]" : "text-[hsl(var(--secondary))]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {panel.eyebrow}
                </span>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide">
                  {panel.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">{panel.body}</p>
                <span
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider ${
                    accent === "pink" ? "text-[hsl(var(--envision-pink))]" : "text-[hsl(var(--secondary))]"
                  }`}
                >
                  {panel.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ResidentialCommercialSplit;
