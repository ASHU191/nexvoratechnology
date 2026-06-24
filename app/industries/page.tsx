import type { Metadata } from "next";
import { Building2, Factory, GraduationCap, HeartPulse, Landmark, PhoneCall, ShoppingBag, TerminalSquare } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { Stagger, StaggerItem } from "@/components/motion-primitives";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Nexvora Technology serves banks, healthcare organizations, universities, manufacturing companies, retail chains, software houses, call centers, corporate offices, and government organizations.",
  alternates: { canonical: "/industries" },
};

const sectors = [
  { title: "Banking & Finance", icon: Landmark, copy: "Secure branch networks, firewall policies, endpoint standards, and rapid infrastructure response." },
  { title: "Healthcare", icon: HeartPulse, copy: "Reliable network, server, storage, and support coverage for hospitals and clinical operations." },
  { title: "Education", icon: GraduationCap, copy: "Campus connectivity, computer labs, data backup, and IT support for schools and universities." },
  { title: "Manufacturing", icon: Factory, copy: "Factory floor connectivity, office IT, surveillance networks, and uptime-focused support models." },
  { title: "Retail Chains", icon: ShoppingBag, copy: "Multi-branch rollouts, POS support, routers, switches, Wi-Fi, and AMC coverage." },
  { title: "Software Houses", icon: TerminalSquare, copy: "Developer hardware, internet resilience, cybersecurity, backup, and hybrid infrastructure support." },
  { title: "Call Centers", icon: PhoneCall, copy: "Network reliability, workstation fleets, connectivity escalation, and business-hour or 24/7 support." },
  { title: "Government Organizations", icon: Building2, copy: "Documented deployments, procurement assistance, secure infrastructure, and support accountability." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology support for regulated, distributed, and high-uptime organizations"
        description="Nexvora adapts enterprise infrastructure and support models to the demands of each sector, from branch-heavy operations to campus-wide environments."
      />

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Sector Expertise"
            title="Infrastructure patterns matched to your operating environment"
            description="Each industry has different uptime, security, procurement, and user-support pressures. Nexvora designs around those pressures from the start."
          />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <StaggerItem key={sector.title}>
                <Card className="h-full p-6 hover:border-cyan-600/55 hover:shadow-enterprise">
                  <sector.icon className="size-9 text-cyan-500" />
                  <h2 className="mt-5 text-lg font-bold text-navy-900">{sector.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-steel-600">{sector.copy}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="section-shell grid gap-8 lg:grid-cols-3">
          {[
            ["Procurement Governance", "Vendor coordination, business-grade hardware selection, asset documentation, and transparent project scoping."],
            ["Operational Continuity", "Support structures for multi-location teams, critical departments, and high-volume user environments."],
            ["Security Readiness", "Network segmentation, access policy, endpoint protection, backup validation, and response planning."],
          ].map(([title, copy]) => (
            <Card key={title} className="border-white/12 bg-white/[0.06] p-6 text-white">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/66">{copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
