import { FormEvent, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ElectricalPageHero from "@/components/sections/ElectricalPageHero";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { MINHS_IMAGES } from "@/data/siteData";
import { submitSiteForm, SubmitFormError } from "@/lib/submitForm";
import { toast } from "sonner";

const inputCls =
  "w-full rounded-md bg-white border border-slate-200 text-[hsl(var(--primary))] placeholder:text-slate-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))]";
const labelCls = "block text-xs font-display font-bold uppercase tracking-wider text-[hsl(var(--primary))] mb-1.5";

const FinancingApply = () => {
  const { company: COMPANY, projects } = useSiteContent();
  const [searchParams] = useSearchParams();
  const preselectedVehicle = searchParams.get("vehicle") || "";
  const [submitting, setSubmitting] = useState(false);

  const inventoryOptions = useMemo(
    () =>
      [...projects]
        .map(p => ({ id: p.id, title: p.title, value: p.value }))
        .sort((a, b) => a.title.localeCompare(b.title)),
    [projects],
  );

  const defaultVehicle = inventoryOptions.some(v => v.id === preselectedVehicle)
    ? preselectedVehicle
    : "";

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    try {
      await submitSiteForm(form, {
        subject: `Financing application — ${COMPANY.name}`,
        extras: { form_name: "Financing Application" },
      });
      toast.success("Application received. We'll call you after we review bank approval.");
      form.reset();
    } catch (err) {
      const message = err instanceof SubmitFormError ? err.message : "Unable to submit. Please try again.";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Apply for Financing | {COMPANY.name}</title>
        <meta
          name="description"
          content="Apply for vehicle financing with NextLevel Auto Group USA. Submit your info and the vehicle you're interested in — we'll call you with bank approval."
        />
      </Helmet>

      <ElectricalPageHero
        eyebrow="Financing"
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Apply for Financing" },
        ]}
        title="Apply for Financing"
        body="Fill out the application with your information and the vehicle you're interested in. We submit it for bank approval and call you with the result."
        image={MINHS_IMAGES.financing}
        imageAlt="Apply for vehicle financing"
      />

      <section className="bg-[hsl(var(--minhs-surface))] py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-lg bg-white p-6 sm:p-8 ring-1 ring-slate-200 shadow-sm">
            <div className="flex items-start gap-3 mb-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[hsl(var(--secondary))]/10 ring-1 ring-[hsl(var(--secondary))]/25">
                <ShieldCheck className="h-5 w-5 text-[hsl(var(--secondary))]" />
              </span>
              <div>
                <h2 className="font-display text-xl font-bold uppercase tracking-wide text-[hsl(var(--primary))]">
                  Financing Application
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Required for bank review. After you submit, our team receives your application and contacts you with approval details.
                </p>
              </div>
            </div>

            <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-5" noValidate={false}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="full_name">
                    Full Name
                  </label>
                  <input id="full_name" name="full_name" type="text" required autoComplete="name" className={inputCls} placeholder="Legal name" />
                </div>

                <div>
                  <label className={labelCls} htmlFor="email">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@email.com" />
                </div>

                <div>
                  <label className={labelCls} htmlFor="phone">
                    Phone Number
                  </label>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputCls} placeholder="(689) 000-0000" />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="address">
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    autoComplete="street-address"
                    className={inputCls}
                    placeholder="Street, city, state, ZIP"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="social_security_number">
                    Social Security Number
                  </label>
                  <input
                    id="social_security_number"
                    name="social_security_number"
                    type="password"
                    required
                    autoComplete="off"
                    inputMode="numeric"
                    className={inputCls}
                    placeholder="XXX-XX-XXXX"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="drivers_license">
                    Driver&apos;s License (photo or PDF)
                  </label>
                  <input
                    id="drivers_license"
                    name="drivers_license"
                    type="file"
                    required
                    accept="image/*,.pdf,application/pdf"
                    className={`${inputCls} file:mr-3 file:rounded-sm file:border-0 file:bg-[hsl(var(--primary))] file:px-3 file:py-1.5 file:text-xs file:font-bold file:uppercase file:tracking-wider file:text-white`}
                  />
                </div>
              </div>

              <div className="border-t border-slate-200 pt-5 space-y-4">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[hsl(var(--primary))]">
                  Employment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="job_name">
                      Name of the Job / Employer
                    </label>
                    <input id="job_name" name="job_name" type="text" required className={inputCls} placeholder="Employer or job title" />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="work_phone">
                      Work Phone
                    </label>
                    <input id="work_phone" name="work_phone" type="tel" required className={inputCls} placeholder="Work phone number" />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="monthly_income">
                      Monthly Income
                    </label>
                    <input
                      id="monthly_income"
                      name="monthly_income"
                      type="text"
                      required
                      inputMode="decimal"
                      className={inputCls}
                      placeholder="$0,000"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls} htmlFor="job_tenure">
                      How long have you worked at this job?
                    </label>
                    <input
                      id="job_tenure"
                      name="job_tenure"
                      type="text"
                      required
                      className={inputCls}
                      placeholder="e.g. 2 years 3 months"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-5 space-y-4">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[hsl(var(--primary))]">
                  Vehicle of Interest
                </h3>
                <div>
                  <label className={labelCls} htmlFor="vehicle_of_interest">
                    Select a vehicle from inventory
                  </label>
                  <select
                    id="vehicle_of_interest"
                    name="vehicle_of_interest"
                    required
                    defaultValue={defaultVehicle}
                    className={inputCls}
                  >
                    <option value="" disabled>
                      Choose a vehicle
                    </option>
                    {inventoryOptions.map(v => (
                      <option key={v.id} value={`${v.title}${v.value ? ` — ${v.value}` : ""}`}>
                        {v.title}
                        {v.value ? ` — ${v.value}` : ""}
                      </option>
                    ))}
                    <option value="Other / Not listed">Other / Not listed</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="vehicle_notes">
                    Notes (optional)
                  </label>
                  <textarea
                    id="vehicle_notes"
                    name="vehicle_notes"
                    rows={3}
                    className={`${inputCls} resize-none`}
                    placeholder="Anything else we should know about the vehicle or financing needs"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 font-display font-bold uppercase tracking-wide py-6"
              >
                {submitting ? "Submitting…" : "Submit Financing Application"}
                {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>

              <p className="flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed">
                <Lock className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>
                  Your application is sent securely to {COMPANY.email}. We use this information only to process financing
                  with our banking partners and to contact you about approval.{" "}
                  <Link to="/privacy" className="underline hover:text-[hsl(var(--primary))]">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FinancingApply;
