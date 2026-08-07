import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { useSiteContent } from "@/contexts/SiteContentContext";

const Privacy = () => {
  const { company: COMPANY } = useSiteContent();
  const updated = "July 30, 2026";

  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | {COMPANY.name}</title>
        <meta
          name="description"
          content={`Privacy Policy for ${COMPANY.name} — how we collect, use, and protect your information.`}
        />
      </Helmet>

      <section className="bg-[hsl(var(--primary))] text-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-display font-bold uppercase tracking-[0.28em] text-[hsl(var(--secondary))] mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-wide">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/70 text-sm">Last updated {updated}</p>
        </div>
      </section>

      <section className="bg-[hsl(var(--background))] py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-[hsl(var(--foreground))]/85 leading-relaxed">
          <p>
            {COMPANY.name} (“we,” “us,” or “our”) respects your privacy. This policy explains what
            information we collect when you visit our website or contact our dealership, how we use it, and
            the choices you have.
          </p>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Information we collect
            </h2>
            <p className="mb-3">We may collect information you provide directly, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name, phone number, email address, and vehicle details from contact or booking forms</li>
              <li>Messages you send us about buying, selling, trade-ins, or other services</li>
              <li>Communications when you call, email, or visit our lot</li>
            </ul>
            <p className="mt-3">
              We may also collect basic technical data such as browser type, device information, and
              pages visited to help us improve the site experience.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              How we use your information
            </h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to quotes, consults, and service requests</li>
              <li>Schedule visits and follow up on buy/sell inquiries</li>
              <li>Improve our website, marketing, and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell your personal information.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Sharing
            </h2>
            <p>
              We may share information with trusted service providers who help us operate the website,
              process communications, or run our business — only as needed to perform those services.
              We may also disclose information if required by law or to protect our rights and customers.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Cookies and analytics
            </h2>
            <p>
              Our site may use cookies or similar technologies for basic functionality and analytics.
              You can control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Data retention
            </h2>
            <p>
              We keep personal information only as long as needed for the purposes described above, or
              as required by law.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Your choices
            </h2>
            <p>
              You may request access to, correction of, or deletion of personal information we hold about
              you by contacting us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[hsl(var(--primary))] mb-3">
              Contact us
            </h2>
            <p className="mb-3">Questions about this policy? Reach {COMPANY.name} at:</p>
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

export default Privacy;
