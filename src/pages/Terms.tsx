import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { useSiteContent } from "@/contexts/SiteContentContext";

const Terms = () => {
  const { company: COMPANY } = useSiteContent();
  const updated = "July 30, 2026";

  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | {COMPANY.name}</title>
        <meta
          name="description"
          content={`Terms of Service for ${COMPANY.name} — website use and service guidelines.`}
        />
      </Helmet>

      <section className="bg-[hsl(var(--primary))] text-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-display font-bold uppercase tracking-[0.28em] text-[hsl(var(--secondary))] mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-wide">
            Terms of Service
          </h1>
          <p className="mt-4 text-white/70 text-sm">Last updated {updated}</p>
        </div>
      </section>

      <section className="bg-[hsl(var(--background))] py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-[hsl(var(--foreground))]/85 leading-relaxed">
          <p>
            Welcome to {COMPANY.name}. By accessing our website or requesting services, you agree to
            these Terms of Service. If you do not agree, please do not use the site.
          </p>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Website use
            </h2>
            <p>
              Content on this website — including text, images, logos, and branding — is owned by
              {` ${COMPANY.name} `}
              or its licensors and may not be copied or reused without permission. You agree not to
              misuse the site, attempt unauthorized access, or interfere with its operation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Services and quotes
            </h2>
            <p>
              Information on this site about wraps, tint, paint protection, detail, and related
              services is for general information. Final pricing, materials, timelines, and scope are
              confirmed in a written quote or work order after consultation. Vehicle condition, design
              complexity, and material availability may affect estimates.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Appointments
            </h2>
            <p>
              Booking requests submitted online or by phone are subject to shop confirmation. We may
              reschedule or cancel appointments due to capacity, material delays, or other operational
              needs and will make reasonable efforts to notify you.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Installations and warranties
            </h2>
            <p>
              Workmanship and material coverage, if any, are described at the time of sale or in
              product/manufacturer documentation. Proper aftercare is required. Damage from misuse,
              accidents, improper washing, or third-party work may void coverage.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, {COMPANY.name} is not liable for indirect,
              incidental, or consequential damages arising from use of this website or services,
              except where liability cannot be limited under applicable law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Third-party links
            </h2>
            <p>
              Our site may link to third-party sites or tools (including chat assistants). We are not
              responsible for their content or privacy practices.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Changes
            </h2>
            <p>
              We may update these terms from time to time. Continued use of the website after changes
              means you accept the revised terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Contact
            </h2>
            <p className="mb-3">Questions about these terms? Contact us:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Phone: {COMPANY.phone}</li>
              <li>Email: {COMPANY.email}</li>
              <li>Address: {COMPANY.address}</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
