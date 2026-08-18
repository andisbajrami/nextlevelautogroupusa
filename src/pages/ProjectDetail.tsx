import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { MapPin, Calendar, User, ArrowLeft, Gauge, Tag, X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { useTheme } from "@/contexts/ThemeContext";

const ProjectDetail = () => {
  const { projects, company: COMPANY } = useSiteContent();
  const { resolveProjectImage } = useTheme();
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gallery = project?.gallery?.length ? project.gallery : project ? [project.image] : [];

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex(i => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex(i => (i === null ? i : (i + 1) % gallery.length));
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, gallery.length]);

  if (!project) {
    return (
      <Layout>
        <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-2xl font-bold text-[hsl(var(--primary))]">Vehicle not found</h1>
          <Link to="/projects" className="text-[hsl(var(--secondary))] hover:underline mt-4 inline-block">
            Back to Inventory
          </Link>
        </div>
      </Layout>
    );
  }

  const features = "features" in project && Array.isArray(project.features) ? project.features : [];
  const mileage = "mileage" in project && typeof project.mileage === "string" ? project.mileage : "";
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => setLightboxIndex(i => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
  const showNext = () => setLightboxIndex(i => (i === null ? i : (i + 1) % gallery.length));

  return (
    <Layout>
      <Helmet>
        <title>{project.title} | {COMPANY.name}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <section className="relative h-[380px] md:h-[480px] overflow-hidden">
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="absolute inset-0 block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--secondary))] focus-visible:ring-inset"
          aria-label={`View ${project.title} photos`}
        >
          <img
            src={resolveProjectImage(project.id, project.image)}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </button>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/95 via-[hsl(var(--primary))]/50 to-[hsl(var(--primary))]/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-end pb-10 text-white">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-[hsl(var(--secondary))] mb-4 w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Inventory
          </Link>
          <span className="inline-flex w-fit rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-3 py-1 text-[10px] font-display font-bold uppercase tracking-wider mb-3">
            {project.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wide">{project.title}</h1>
          {project.value ? (
            <p className="mt-3 font-display text-2xl md:text-3xl font-bold text-[hsl(var(--secondary))]">
              {project.value}
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-[hsl(var(--minhs-surface))] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-4">
              Vehicle Overview
            </h2>
            <p className="text-slate-600 leading-relaxed">{project.description}</p>

            {features.length > 0 ? (
              <div className="mt-8">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
                  Highlights
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {features.map(feature => (
                    <li
                      key={feature}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-display font-bold uppercase tracking-wider text-[hsl(var(--primary))] ring-1 ring-slate-200"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {gallery.length > 0 ? (
              <div className="mt-10">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-4">
                  Vehicle Photos
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {gallery.map((src, idx) => (
                    <button
                      key={src + idx}
                      type="button"
                      onClick={() => openLightbox(idx)}
                      className="group relative rounded-lg overflow-hidden aspect-[4/3] ring-1 ring-slate-200 cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--secondary))]"
                      aria-label={`Open photo ${idx + 1} of ${gallery.length}`}
                    >
                      <img
                        src={resolveProjectImage(project.id, src)}
                        alt={`${project.title} — photo ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15" />
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="bg-[hsl(var(--primary))] text-white rounded-lg p-6 h-fit space-y-5">
            <h3 className="font-display font-bold uppercase tracking-wide text-[hsl(var(--secondary))]">
              Vehicle Specs
            </h3>
            {"serviceId" in project && project.serviceId ? (
              <Link
                to={`/services/${project.serviceId}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--secondary))] hover:underline"
              >
                View related service →
              </Link>
            ) : null}
            {[
              { icon: Tag, label: "Price", value: project.value },
              { icon: Calendar, label: "Year", value: project.year },
              ...(mileage ? [{ icon: Gauge, label: "Mileage", value: mileage }] : []),
              { icon: User, label: "Status", value: project.client },
              { icon: MapPin, label: "Location", value: project.location },
            ].map(d => (
              <div key={d.label} className="flex items-start gap-3">
                <d.icon className="h-5 w-5 text-[hsl(var(--secondary))] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-display font-bold uppercase tracking-wider text-white/60">{d.label}</p>
                  <p className="text-sm font-semibold mt-0.5">{d.value}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <CTASection
        title="Interested in this vehicle?"
        subtitle="Schedule a test drive, apply for financing, or get a trade-in estimate — Orlando hours Mon–Sat."
        primaryLabel="APPLY FOR FINANCING"
        primaryTo={`/financing/apply?vehicle=${project.id}`}
        secondaryLabel="CONTACT US"
        secondaryTo="/contact"
      />

      {lightboxIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} photo gallery`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {gallery.length > 1 ? (
            <>
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-6"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6"
                aria-label="Next photo"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          ) : null}

          <figure
            className="relative flex max-h-full max-w-6xl flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={resolveProjectImage(project.id, gallery[lightboxIndex])}
              alt={`${project.title} — photo ${lightboxIndex + 1}`}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-3 text-sm text-white/70">
              {lightboxIndex + 1} / {gallery.length}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </Layout>
  );
};

export default ProjectDetail;
