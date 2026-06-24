import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock3, Headphones, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { Stagger, StaggerItem } from "@/components/motion-primitives";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supportPlans } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "SLA Support Plans",
  description:
    "Compare Nexvora Technology Basic, Standard, and Premium SLA support plans with 8 business hour, 4 business hour, and 1-2 hour response options plus 24/7 priority support.",
  alternates: { canonical: "/sla-support" },
};

export default function SlaSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="SLA Support"
        title="Response-time backed technical support for enterprise teams"
        description="Move beyond informal IT support. Nexvora SLA plans define response commitments, escalation ownership, reporting expectations, and support coverage aligned with business priority."
        primaryLabel="Request SLA Consultation"
      />

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Plan Options"
            title="Choose the support model that matches your operational risk"
            align="center"
          />
          <Stagger className="mt-10 grid gap-5 lg:grid-cols-3">
            {supportPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <Card className={`relative h-full p-6 ${plan.highlighted ? "border-cyan-600 shadow-enterprise" : ""}`}>
                  {plan.highlighted ? (
                    <span className="absolute right-5 top-5 rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-navy-950">
                      Recommended
                    </span>
                  ) : null}
                  <h2 className="text-2xl font-bold text-navy-900">{plan.name}</h2>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-steel-600">{plan.description}</p>
                  <div className="mt-6 rounded-md bg-navy-900 p-5 text-white">
                    <Clock3 className="size-6 text-cyan-600" />
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/58">Response Time</p>
                    <p className="mt-2 text-3xl font-bold">{plan.response}</p>
                    {plan.name === "Premium SLA" ? <p className="mt-2 font-semibold text-cyan-600">24/7 Priority Support</p> : null}
                  </div>
                  <div className="mt-6 grid gap-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm font-medium text-steel-600">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant={plan.highlighted ? "cyan" : "default"} className="mt-7 w-full" asChild>
                    <Link href="/contact#inquiry">Ask About {plan.name}</Link>
                  </Button>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-steel-100 py-20">
        <div className="section-shell grid gap-5 lg:grid-cols-3">
          {[
            { title: "Ticket Visibility", icon: Headphones, copy: "Structured request logging helps leadership understand support volume, recurring issues, and service outcomes." },
            { title: "Escalation Ownership", icon: ShieldCheck, copy: "Each plan defines how incidents move from first response to engineering attention and management visibility." },
            { title: "Operational Reporting", icon: Clock3, copy: "Regular summaries help enterprise teams track response, maintenance, health checks, and improvement priorities." },
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <item.icon className="size-9 text-cyan-500" />
              <h2 className="mt-5 text-xl font-bold text-navy-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-steel-600">{item.copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
