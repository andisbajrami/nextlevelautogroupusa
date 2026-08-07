import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Users, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/contexts/SiteContentContext";

const ROLES = [
  {
    title: "Sales Advisor",
    body: "Help customers find the right vehicle, schedule test drives, and guide purchases with clear, honest communication.",
  },
  {
    title: "Purchase Specialist",
    body: "Evaluate vehicles for purchase and trade-in — deliver fair offers and a smooth selling experience.",
  },
  {
    title: "Customer Care",
    body: "Coordinate visits, follow up on inquiries, and support buyers and sellers from first contact to drive-away.",
  },
];

const Careers = () => {
  const { company: COMPANY } = useSiteContent();

  return (
    <Layout>
      <Helmet>
        <title>Careers | {COMPANY.name}</title>
        <meta
          name="description"
          content={`Join ${COMPANY.name} in Orlando — sales, purchase, and customer care roles for a growing buy & sell dealership.`}
        />
      </Helmet>

      <section className="bg-[hsl(var(--primary))] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-[hsl(var(--secondary))] text-xs font-display font-bold uppercase tracking-[0.22em] mb-3">
            Careers
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight max-w-2xl">
            Grow With NextLevel
          </h1>
          <p className="mt-4 text-white/80 max-w-xl leading-relaxed">
            We&apos;re building Orlando&apos;s go-to destination to buy and sell vehicles. If you value honest deals and great customer care, we&apos;d like to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-[hsl(var(--minhs-surface))] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              { icon: Briefcase, title: "Meaningful Work", body: "Help real people buy and sell with confidence." },
              { icon: Users, title: "Local Team", body: "Serve Orlando and surrounding communities." },
              { icon: Heart, title: "Respect First", body: "No high-pressure culture — just clear communication." },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-lg p-6 ring-1 ring-slate-100">
                <item.icon className="h-8 w-8 text-[hsl(var(--secondary))] mb-4" />
                <h3 className="font-display font-bold uppercase text-[hsl(var(--primary))]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[hsl(var(--primary))] mb-6">
            Roles We Hire For
          </h2>
          <div className="space-y-4">
            {ROLES.map(role => (
              <article key={role.title} className="bg-white rounded-lg p-6 ring-1 ring-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-lg uppercase text-[hsl(var(--primary))]">{role.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 max-w-2xl">{role.body}</p>
                </div>
                <Button
                  asChild
                  className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 font-display font-bold uppercase shrink-0"
                >
                  <a href={`mailto:${COMPANY.email}?subject=Career inquiry — ${role.title}`}>
                    Apply
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-600">
            Don&apos;t see a perfect fit?{" "}
            <Link to="/contact" className="font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--secondary))]">
              Contact us
            </Link>{" "}
            or email{" "}
            <a href={`mailto:${COMPANY.email}`} className="font-semibold text-[hsl(var(--secondary))] hover:underline">
              {COMPANY.email}
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to join the team?"
        subtitle="Tell us about your experience — we'll follow up quickly."
        primaryLabel="CONTACT US"
        secondaryLabel="CALL NOW"
      />
    </Layout>
  );
};

export default Careers;
