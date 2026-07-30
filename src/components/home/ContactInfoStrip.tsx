import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useSiteContent } from "@/contexts/SiteContentContext";

const ContactInfoStrip = () => {
  const { company: COMPANY, siteTop: SITE_TOP, officeHours } = useSiteContent();
  const phone = (COMPANY.phone || "").trim();
  const email = (COMPANY.email || "").trim();
  const phoneHref = phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : "/contact";
  const mailHref = email ? `mailto:${email}` : "/contact";
  const hoursLine = COMPANY.hours || officeHours[0]?.hours || "Mon–Fri 8AM–5PM";
  const serviceArea = SITE_TOP.locations || "Serving our local area";

  return (
    <div className="border-b border-white/8 bg-[hsl(var(--minhs-dark-panel))] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-2.5 text-xs sm:text-[13px]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
            {phone ? (
              <a
                href={phoneHref}
                className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[hsl(var(--envision-pink))] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[hsl(var(--envision-pink))]" />
                {phone}
              </a>
            ) : null}
            {email ? (
              <a
                href={mailHref}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[hsl(var(--secondary))]" />
                <span className="truncate max-w-[200px] sm:max-w-none">{email}</span>
              </a>
            ) : null}
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[hsl(var(--envision-pink))]" />
              {hoursLine}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-white/65 sm:text-right">
            <MapPin className="h-3.5 w-3.5 text-[hsl(var(--secondary))] shrink-0" />
            {serviceArea}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoStrip;
