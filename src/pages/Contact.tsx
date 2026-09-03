import { Helmet } from "react-helmet-async";
import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Award, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { MINHS_IMAGES } from "@/data/siteData";
import ElectricalPageHero from "@/components/sections/ElectricalPageHero";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { CONTACT_TRUST_STRIP } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { submitSiteForm, SubmitFormError } from "@/lib/submitForm";
import FormSubmitHiddenFields from "@/components/forms/FormSubmitHiddenFields";

const trustIconMap = { ShieldCheck, Award, Users, Clock } as const;

const Contact = () => {
  const { company: COMPANY, officeHours, services } = useSiteContent();
  const [submitting, setSubmitting] = useState<string | null>(null);
  const phoneHref = `tel:${(COMPANY.phone || "").replace(/[^+\d]/g, "")}`;
  const mailHref = `mailto:${COMPANY.email || ""}`;

  const onSubmit = async (event: FormEvent<HTMLFormElement>, formKey: string, subject: string) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(formKey);
    try {
      await submitSiteForm(form, {
        subject,
        formName: formKey,
      });
      toast.success("Thanks! Our team will get back to you shortly.");
      form.reset();
    } catch (err) {
      toast.error(err instanceof SubmitFormError ? err.message : "Unable to send. Please try again.");
    } finally {
      setSubmitting(null);
    }
  };

  const inputCls =
    "w-full rounded-md bg-white border border-slate-200 text-[hsl(var(--primary))] placeholder:text-slate-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))]";

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | {COMPANY.name}</title>
        <meta name="description" content={`Contact ${COMPANY.name} to buy, sell, or schedule a visit in Orlando. Call 689-252-4265.`} />
      </Helmet>

      <ElectricalPageHero
        eyebrow="Contact"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        title="Schedule Your Visit"
        body="Book a test drive, request a purchase offer, or ask about trade-ins — our Orlando team responds fast. Open Mon–Fri 9:30–6 and Sat 9:30–4."
        image={MINHS_IMAGES.contactHero}
        imageAlt="Contact NextLevel Auto Group USA LLC"
      />

      <section className="bg-[hsl(var(--primary))] text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-2">
                Get In Touch
              </h2>
              <p className="text-white/75 text-sm leading-relaxed">
                Call to speak with our team. Use the forms below for visits, buy/sell requests, or general contact — or chat with our AI assistant anytime.
              </p>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--secondary))]/15 ring-1 ring-[hsl(var(--secondary))]/30">
                  <Phone className="h-5 w-5 text-[hsl(var(--secondary))]" />
                </span>
                <div>
                  <span className="block text-xs font-display font-bold uppercase tracking-wider text-white/60">Phone</span>
                  <a href={phoneHref} className="block font-display text-lg font-bold text-[hsl(var(--secondary))] hover:underline mt-0.5">
                    {COMPANY.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--secondary))]/15 ring-1 ring-[hsl(var(--secondary))]/30">
                  <Mail className="h-5 w-5 text-[hsl(var(--secondary))]" />
                </span>
                <div>
                  <span className="block text-xs font-display font-bold uppercase tracking-wider text-white/60">Email</span>
                  <a href={mailHref} className="block font-semibold text-white hover:text-[hsl(var(--secondary))] mt-0.5">
                    {COMPANY.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--secondary))]/15 ring-1 ring-[hsl(var(--secondary))]/30">
                  <MapPin className="h-5 w-5 text-[hsl(var(--secondary))]" />
                </span>
                <div>
                  <span className="block text-xs font-display font-bold uppercase tracking-wider text-white/60">Office</span>
                  <span className="block text-sm text-white/90 mt-0.5">{COMPANY.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--secondary))]/15 ring-1 ring-[hsl(var(--secondary))]/30">
                  <Clock className="h-5 w-5 text-[hsl(var(--secondary))]" />
                </span>
                <div>
                  <span className="block text-xs font-display font-bold uppercase tracking-wider text-white/60">Hours</span>
                  {officeHours.map(h => (
                    <span key={h.days} className="block text-sm text-white/90 mt-0.5">
                      <span className="font-semibold">{h.days}:</span> {h.hours}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white text-[hsl(var(--primary))] rounded-lg p-6 lg:p-8 shadow-2xl">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-1">
              Schedule a Visit
            </h3>
            <p className="text-sm text-slate-500 mb-5">Request a test drive, sell appointment, or trade-in review — we&apos;ll confirm your visit.</p>
            <form
              onSubmit={e => onSubmit(e, "Schedule a Visit", `Schedule a visit — ${COMPANY.name}`)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <FormSubmitHiddenFields />
              <input name="full_name" required type="text" placeholder="Full Name" autoComplete="name" className={inputCls} />
              <input name="phone" required type="tel" placeholder="Phone Number" autoComplete="tel" className={inputCls} />
              <input name="email" required type="email" placeholder="Email Address" autoComplete="email" className={`${inputCls} sm:col-span-2`} />
              <input name="vehicle_year" type="text" placeholder="Vehicle Year" className={inputCls} />
              <input name="make_model" type="text" placeholder="Make / Model" className={inputCls} />
              <select name="service_interest" required defaultValue="" className={`${inputCls} sm:col-span-2`}>
                <option value="" disabled>
                  How can we help?
                </option>
                {services.map(s => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Visit notes (optional)"
                rows={3}
                className={`${inputCls} sm:col-span-2 resize-none`}
              />
              <Button
                type="submit"
                disabled={submitting !== null}
                className="sm:col-span-2 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 font-display font-bold uppercase tracking-wide py-5"
              >
                {submitting === "Schedule a Visit" ? "Sending…" : "Schedule Visit"}
                {submitting !== "Schedule a Visit" && <ArrowRight className="ml-1.5 h-4 w-4" />}
              </Button>
            </form>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-1">
                Buy / Sell Request
              </h3>
              <p className="text-sm text-slate-500 mb-4">Tell us about the vehicle you want to buy or sell.</p>
              <form
                onSubmit={e => onSubmit(e, "Buy / Sell Request", `Buy / sell request — ${COMPANY.name}`)}
                className="grid grid-cols-1 gap-3"
              >
                <FormSubmitHiddenFields />
                <input name="full_name" required type="text" placeholder="Full Name" autoComplete="name" className={inputCls} />
                <input name="phone" required type="tel" placeholder="Phone" autoComplete="tel" className={inputCls} />
                <input name="email" type="email" placeholder="Email (optional)" autoComplete="email" className={inputCls} />
                <textarea name="message" required placeholder="Vehicle details or inventory interest" rows={3} className={`${inputCls} resize-none`} />
                <Button type="submit" variant="outline" disabled={submitting !== null} className="minhs-btn-outline-on-light font-display font-bold uppercase">
                  {submitting === "Buy / Sell Request" ? "Sending…" : "Submit Request"}
                </Button>
              </form>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-1">
                General Contact
              </h3>
              <form
                onSubmit={e => onSubmit(e, "General Contact", `General contact — ${COMPANY.name}`)}
                className="grid grid-cols-1 gap-3"
              >
                <FormSubmitHiddenFields />
                <input name="full_name" required type="text" placeholder="Name" autoComplete="name" className={inputCls} />
                <input name="phone" type="tel" placeholder="Phone (optional)" autoComplete="tel" className={inputCls} />
                <input name="email" required type="email" placeholder="Email" autoComplete="email" className={inputCls} />
                <textarea name="message" required placeholder="Your message" rows={3} className={`${inputCls} resize-none`} />
                <Button type="submit" variant="outline" disabled={submitting !== null} className="minhs-btn-outline-on-light font-display font-bold uppercase">
                  {submitting === "General Contact" ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </div>
            <p className="mt-3 text-[11px] text-slate-500 text-center">
              We respect your privacy. Your information stays with NextLevel Auto Group USA LLC.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))]">
              Get Directions
            </h3>
            <p className="text-sm text-slate-600">{COMPANY.address}</p>
            <Button
              asChild
              className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 font-display font-bold uppercase tracking-wide"
            >
              <a
                href="https://www.openstreetmap.org/directions?to=2120%20S%20Orange%20Blossom%20Trl%2C%20Orlando%2C%20FL%2032805#map=17/28.5085/-81.3975"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Street Map Directions
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="lg:col-span-8 rounded-lg overflow-hidden min-h-[280px] ring-1 ring-slate-200">
            <iframe
              title="NextLevel Auto Group USA LLC location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-81.4075%2C28.4985%2C-81.3875%2C28.5185&layer=mapnik&marker=28.5085%2C-81.3975"
              className="w-full h-full min-h-[280px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--minhs-surface))] py-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_TRUST_STRIP.map(item => {
            const Icon = trustIconMap[(item.icon as keyof typeof trustIconMap)] || ShieldCheck;
            return (
              <div key={item.id} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--secondary))]/10 ring-1 ring-[hsl(var(--secondary))]/25">
                  <Icon className="h-5 w-5 text-[hsl(var(--secondary))]" />
                </span>
                <div className="leading-tight">
                  <span className="block text-sm font-display font-bold uppercase tracking-wide text-[hsl(var(--primary))]">
                    {item.title}
                  </span>
                  <span className="block text-xs text-slate-600 mt-0.5">{item.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
