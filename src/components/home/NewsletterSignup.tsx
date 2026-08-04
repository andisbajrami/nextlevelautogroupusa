import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { NEWSLETTER } from "@/data/siteData";

const NewsletterSignup = ({ variant = "footer" }: { variant?: "footer" | "section" }) => {
  const [submitting, setSubmitting] = useState(false);
  const n = NEWSLETTER;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success(n.successMessage);
      (event.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 500);
  };

  if (variant === "section") {
    return (
      <section className="bg-[hsl(var(--minhs-surface))] py-14 lg:py-16 border-y border-[hsl(var(--border))]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[hsl(var(--secondary))] text-xs font-bold uppercase tracking-[0.22em] font-display">
            {n.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase text-[hsl(var(--primary))]">
            {n.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">{n.description}</p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder={n.placeholder}
              className="flex-1 rounded-sm border border-[hsl(var(--border))] bg-white px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))]"
            />
            <Button
              type="submit"
              disabled={submitting}
              className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 font-display font-bold uppercase tracking-wider rounded-sm px-6"
            >
              {submitting ? "Signing up…" : n.buttonLabel}
            </Button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <div className="mt-6">
      <h4 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--secondary))] mb-2">
        {n.title}
      </h4>
      <p className="text-xs text-white/55 mb-3 leading-relaxed">{n.description}</p>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/40" />
          <input
            type="email"
            required
            placeholder={n.placeholder}
            className="w-full rounded-sm border border-white/15 bg-white/5 pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))]"
          />
        </div>
        <Button
          type="submit"
          disabled={submitting}
          size="sm"
          className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90 font-display font-bold uppercase tracking-wider rounded-sm"
        >
          {submitting ? "…" : n.buttonLabel}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
