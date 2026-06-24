import type { Metadata } from "next";
import {
  Activity,
  CloudCog,
  Database,
  Headphones,
  LockKeyhole,
  MonitorCheck,
  Network,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { Stagger, StaggerItem } from "@/components/motion-primitives";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Nexvora Technology enterprise services including hardware procurement, server and storage, network infrastructure, cybersecurity, data center solutions, managed IT, AMC, SLA support, cloud backup, and consultancy.",
  alternates: { canonical: "/services" },
};

const icons = [Server, Database, Network, LockKeyhole, ShieldCheck, MonitorCheck, Wrench, Headphones, CloudCog, Activity];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Enterprise IT services from procurement to SLA-backed operations"
        description="Nexvora supports the full infrastructure lifecycle: assessment, vendor selection, deployment, documentation, monitoring, maintenance, and measurable technical response."
        primaryLabel="Get a Services Quote"
      />

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Capabilities"
            title="A complete technology partner for enterprise infrastructure"
            description="Every service is shaped around operational continuity, security, scalability, and executive-level accountability."
          />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index];
              return (
                <StaggerItem key={service.title}>
                  <Card className="h-full p-6 hover:border-cyan-600/55 hover:shadow-enterprise">
                    <div className="flex size-12 items-center justify-center rounded-md bg-navy-900 text-cyan-600">
                      <Icon className="size-6" />
                    </div>
                    <h2 className="mt-5 text-xl font-bold text-navy-900">{service.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-steel-600">{service.description}</p>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-steel-100 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Delivery Model"
            title="Structured execution with clear handover and support paths"
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {[
              ["Assess", "Understand sites, users, workloads, vendors, assets, risks, and business priorities."],
              ["Design", "Create infrastructure plans, bill of materials, deployment sequence, and support scope."],
              ["Deploy", "Implement hardware, network, server, security, backup, or managed service requirements."],
              ["Support", "Document systems, monitor critical points, track tickets, and deliver SLA accountability."],
            ].map(([title, copy], index) => (
              <Card key={title} className="p-6">
                <span className="text-sm font-bold text-cyan-500">0{index + 1}</span>
                <h2 className="mt-4 text-xl font-bold text-navy-900">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-steel-600">{copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
