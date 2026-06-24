import type { Metadata } from "next";
import { CheckCircle2, Cpu, FileText, MapPinned, ShieldCheck, Users } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion-primitives";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nexvora Technology, an enterprise IT infrastructure, procurement, managed services, AMC, and SLA support partner serving businesses across Pakistan.",
  alternates: { canonical: "/about" },
};

const principles = [
  { title: "Engineering Discipline", icon: Cpu, copy: "We design infrastructure around business risk, capacity, security, and lifecycle realities." },
  { title: "Support Accountability", icon: FileText, copy: "Our SLA and AMC models define ownership, response expectations, and reporting cadence." },
  { title: "Security First", icon: ShieldCheck, copy: "Every implementation considers access, segmentation, continuity, and operational resilience." },
  { title: "Nationwide Readiness", icon: MapPinned, copy: "We support organizations with multi-city requirements and standardized technology rollouts." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nexvora"
        title="Enterprise technology execution for organizations that cannot afford infrastructure uncertainty"
        description="Nexvora Technology helps businesses across Pakistan procure, deploy, secure, maintain, and support the IT systems that keep operations moving."
      />

      <section className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="Company Overview"
              title="Built for enterprise procurement, deployment, and support"
              description="We bring together hardware sourcing, network engineering, server and storage planning, cybersecurity controls, managed IT services, AMC coverage, and response-time backed technical support."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid gap-4">
              {[
                "Enterprise IT Infrastructure",
                "Hardware Procurement",
                "Network Infrastructure",
                "Server Solutions",
                "Data Center Solutions",
                "Cybersecurity",
                "Managed IT Services",
                "Annual Maintenance Contracts",
                "SLA-Based Technical Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-steel-200 bg-steel-100 p-4">
                  <CheckCircle2 className="size-5 shrink-0 text-cyan-500" />
                  <span className="font-semibold text-navy-900">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-steel-100 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Operating Principles"
            title="How Nexvora approaches enterprise technology work"
            align="center"
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full p-6">
                  <item.icon className="size-9 text-cyan-500" />
                  <h2 className="mt-5 text-lg font-bold text-navy-900">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-steel-600">{item.copy}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="section-shell grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading
              eyebrow="Who We Serve"
              title="Enterprise clients across Pakistan"
              description="Nexvora is positioned for organizations with distributed users, uptime requirements, procurement complexity, compliance expectations, and leadership visibility needs."
              light
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {[
              "Corporate Offices",
              "Banks",
              "Software Houses",
              "Hospitals",
              "Universities",
              "Manufacturing Companies",
              "Call Centers",
              "Retail Chains",
              "Government Organizations",
            ].map((client) => (
              <div key={client} className="glass-panel flex items-center gap-3 rounded-md p-4">
                <Users className="size-5 text-cyan-600" />
                <span className="font-semibold">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
