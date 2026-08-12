import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { Gauge, Phone, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PaginationControls from "@/components/layout/PaginationControls";
import CTASection from "@/components/sections/CTASection";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { useTheme } from "@/contexts/ThemeContext";
import { COMPANY, MINHS_IMAGES, PROJECTS_LATEST_PAGE_SIZE } from "@/data/siteData";
import { clampPage, parsePageParam, slicePage, totalPages as totalPagesCount } from "@/lib/pagination";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "price-asc" | "price-desc" | "year-desc" | "mileage-asc";

function parsePrice(value: string | undefined): number {
  if (!value) return 0;
  const n = Number(String(value).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function parseMileage(mileage: string | undefined): number {
  if (!mileage) return Number.POSITIVE_INFINITY;
  const n = Number(String(mileage).replace(/[^0-9]/g, ""));
  return Number.isFinite(n) ? n : Number.POSITIVE_INFINITY;
}

const Projects = () => {
  const { projects, company } = useSiteContent();
  const { resolveProjectImage } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach(p => set.add(p.category));
    return ["All", ...Array.from(set).sort()];
  }, [projects]);

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    const list = filter === "All" ? [...projects] : projects.filter(p => p.category === filter);
    list.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return parsePrice(a.value) - parsePrice(b.value);
        case "price-desc":
          return parsePrice(b.value) - parsePrice(a.value);
        case "year-desc":
          return Number(b.year) - Number(a.year);
        case "mileage-asc": {
          const am = "mileage" in a && typeof a.mileage === "string" ? a.mileage : "";
          const bm = "mileage" in b && typeof b.mileage === "string" ? b.mileage : "";
          return parseMileage(am) - parseMileage(bm);
        }
        default:
          return (a.number ?? 0) - (b.number ?? 0);
      }
    });
    return list;
  }, [projects, filter, sort]);

  const pageCount = totalPagesCount(filtered.length, PROJECTS_LATEST_PAGE_SIZE);
  const rawPage = parsePageParam(searchParams.get("page"));
  const page = clampPage(rawPage, pageCount);
  const pageProjects = slicePage(filtered, page, PROJECTS_LATEST_PAGE_SIZE);

  useEffect(() => {
    if (rawPage === page) return;
    setSearchParams(
      prev => {
        const n = new URLSearchParams(prev);
        if (page <= 1) n.delete("page");
        else n.set("page", String(page));
        return n;
      },
      { replace: true },
    );
  }, [rawPage, page, setSearchParams]);

  useEffect(() => {
    setSearchParams(
      prev => {
        const n = new URLSearchParams(prev);
        n.delete("page");
        return n;
      },
      { replace: true },
    );
  }, [filter, sort, setSearchParams]);

  const phoneHref = `tel:${COMPANY.phone.replace(/\D/g, "")}`;

  return (
    <Layout>
      <Helmet>
        <title>Shop Inventory | {company.name}</title>
        <meta
          name="description"
          content={`Shop vehicles for sale at ${company.name} — cars, SUVs, and more in Orlando.`}
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[hsl(var(--primary))] text-white">
        <img
          src={MINHS_IMAGES.projectsPageHero}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary))]/92 to-[hsl(var(--primary))]/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <p className="text-[hsl(var(--secondary))] text-xs font-display font-bold uppercase tracking-[0.22em]">
            Orlando Dealership
          </p>
          <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight">
                Shop Our Inventory
              </h1>
              <p className="mt-3 text-white/75 leading-relaxed">
                {projects.length} vehicles in stock — browse by type, compare prices, and schedule a test drive.
              </p>
            </div>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[hsl(var(--secondary))] px-5 py-3 text-sm font-display font-bold uppercase tracking-wider text-[hsl(var(--secondary-foreground))] hover:brightness-110 transition"
            >
              <Phone className="h-4 w-4" />
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--minhs-surface))] py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200/80 pb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={cn(
                    "px-3.5 py-2 text-xs font-display font-bold uppercase tracking-wider border transition-colors",
                    filter === c
                      ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-white"
                      : "border-slate-300 bg-white text-[hsl(var(--primary))] hover:border-[hsl(var(--primary))]",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-500">
                {filtered.length} {filtered.length === 1 ? "vehicle" : "vehicles"}
              </span>
              <label className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-slate-600">
                Sort
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value as SortKey)}
                  className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold normal-case tracking-normal text-[hsl(var(--primary))] outline-none focus:border-[hsl(var(--secondary))]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="year-desc">Newest Year</option>
                  <option value="mileage-asc">Lowest Mileage</option>
                </select>
              </label>
            </div>
          </div>

          {pageProjects.length === 0 ? (
            <div className="border-2 border-dashed border-slate-200 bg-white p-16 text-center">
              <p className="text-sm text-slate-500">No vehicles in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {pageProjects.map(p => {
                const mileage = "mileage" in p && typeof p.mileage === "string" ? p.mileage : "";
                const features =
                  "features" in p && Array.isArray(p.features) ? (p.features as string[]).slice(0, 3) : [];
                const photoCount = p.gallery?.length || 1;

                return (
                  <article
                    key={p.id}
                    className="group flex flex-col overflow-hidden bg-white ring-1 ring-slate-200 transition hover:ring-[hsl(var(--secondary))]/60"
                  >
                    <Link to={`/projects/${p.id}`} className="relative block aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={resolveProjectImage(p.id, p.image)}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-[hsl(var(--primary))] px-2.5 py-1 text-[10px] font-display font-bold uppercase tracking-wider text-white">
                        {p.category}
                      </span>
                      <span className="absolute bottom-3 right-3 bg-black/65 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                        {photoCount} photos
                      </span>
                    </Link>

                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-display font-bold uppercase tracking-[0.18em] text-slate-500">
                            {p.year} · {p.client}
                          </p>
                          <h2 className="mt-1 font-display text-lg font-bold uppercase tracking-wide text-[hsl(var(--primary))] leading-snug">
                            <Link to={`/projects/${p.id}`} className="hover:text-[hsl(var(--secondary))] transition-colors">
                              {p.title}
                            </Link>
                          </h2>
                        </div>
                        <p className="shrink-0 font-display text-xl font-bold text-[hsl(var(--secondary))]">
                          {p.value}
                        </p>
                      </div>

                      {mileage ? (
                        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-slate-600">
                          <Gauge className="h-4 w-4 text-[hsl(var(--secondary))]" />
                          {mileage}
                        </p>
                      ) : null}

                      {features.length > 0 ? (
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {features.map(feature => (
                            <li
                              key={feature}
                              className="bg-[hsl(var(--minhs-surface))] px-2 py-1 text-[10px] font-display font-bold uppercase tracking-wider text-[hsl(var(--primary))]"
                            >
                              {feature}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <div className="mt-auto pt-5 flex gap-2">
                        <Link
                          to={`/projects/${p.id}`}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 bg-[hsl(var(--primary))] px-3 py-2.5 text-xs font-display font-bold uppercase tracking-wider text-white hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] transition-colors"
                        >
                          View Details
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <a
                          href={phoneHref}
                          className="inline-flex items-center justify-center border border-slate-300 px-3 py-2.5 text-xs font-display font-bold uppercase tracking-wider text-[hsl(var(--primary))] hover:border-[hsl(var(--primary))] transition-colors"
                          aria-label={`Call about ${p.title}`}
                        >
                          <Phone className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <PaginationControls page={page} totalPages={pageCount} searchParams={searchParams} className="mt-10" />
        </div>
      </section>

      <CTASection
        title="Ready to buy or sell?"
        subtitle="Schedule a test drive, get a cash offer, or ask about trade-ins and financing."
        primaryLabel="SCHEDULE VISIT"
        secondaryLabel="CALL NOW"
      />
    </Layout>
  );
};

export default Projects;
