import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion-primitives";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Request a Consultation",
  primaryHref = "/contact#inquiry",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pt-36">
      <div className="absolute inset-0 bg-radial-cyan" />
      <div className="absolute inset-0 bg-enterprise-grid bg-[size:44px_44px] opacity-30" />
      <div className="section-shell relative">
        <FadeIn className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">{description}</p>
          <Button variant="cyan" size="lg" className="mt-8" asChild>
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
