import { Link } from "react-router-dom";
import { ArrowRight, Palette, Sun } from "lucide-react";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { useTheme } from "@/contexts/ThemeContext";
import { MINHS_IMAGES } from "@/data/siteData";

const ResidentialCommercialSplit = () => {
  const { services } = useSiteContent();
  const { resolveServiceImage } = useTheme();

  const wrapsSvc = services.find(s => s.id === "vehicle-wraps");
  const tintSvc = services.find(s => s.id === "window-tint");

  const wrapsImg = wrapsSvc
    ? resolveServiceImage(wrapsSvc.id, wrapsSvc.image || MINHS_IMAGES.residentialSplit)
    : MINHS_IMAGES.residentialSplit;
  const tintImg = tintSvc
    ? resolveServiceImage(tintSvc.id, tintSvc.image || MINHS_IMAGES.commercialSplit)
    : MINHS_IMAGES.commercialSplit;

  const panels = [
    {
      id: "wraps",
      icon: Palette,
      eyebrow: "Color & Graphics",
      title: wrapsSvc?.title || "Vehicle Wraps",
      body:
        wrapsSvc?.description ||
        "Full color-change, accents, chrome delete, and custom graphics that transform your ride.",
      image: wrapsImg,
      to: wrapsSvc ? `/services/${wrapsSvc.id}` : "/services/vehicle-wraps",
      cta: "Explore Wraps",
    },
    {
      id: "tint",
      icon: Sun,
      eyebrow: "Heat & Privacy",
      title: tintSvc?.title || "Window Tint",
      body:
        tintSvc?.description ||
        "Ceramic and performance tint for heat rejection, privacy, and a clean finished look.",
      image: tintImg,
      to: tintSvc ? `/services/${tintSvc.id}` : "/services/window-tint",
      cta: "Explore Tint",
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
                <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">{panel.body}</p>
                <span
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider group-hover:gap-3 transition-all ${
                    accent === "pink" ? "text-[hsl(var(--envision-pink))]" : "text-[hsl(var(--secondary))]"
                  }`}
                >
                  {panel.cta}
                  <ArrowRight className="h-4 w-4" />
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
