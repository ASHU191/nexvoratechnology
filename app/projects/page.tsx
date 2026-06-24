import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { Stagger, StaggerItem } from "@/components/motion-primitives";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Review Nexvora Technology enterprise projects including corporate network deployment, server migration, data center upgrade, and cybersecurity implementation outcomes.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Case-study driven execution for enterprise infrastructure outcomes"
        description="Nexvora projects are planned around business continuity, implementation discipline, measurable outcomes, documentation, and support handover."
        primaryLabel="Discuss a Project"
      />

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Selected Work"
            title="Enterprise projects with measurable business outcomes"
            description="The examples below represent common engagement patterns for corporate offices, regulated environments, and multi-site operations."
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
            {caseStudies.map((study) => (
              <StaggerItem key={study.title}>
                <Card className="h-full overflow-hidden hover:shadow-enterprise">
                  <div className="relative h-56 bg-navy-950">
                    <Image
                      src="/images/nexvora-security-ops.png"
                      alt={`${study.title} visual`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-72"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                      <h2 className="text-2xl font-bold">{study.title}</h2>
                      <ArrowUpRight className="size-6 text-cyan-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-6 text-steel-600">{study.description}</p>
                    <div className="mt-6 grid grid-cols-[auto_1fr] gap-4 rounded-md bg-steel-100 p-4">
                      <p className="text-3xl font-bold text-navy-900">{study.metric}</p>
                      <p className="text-sm font-semibold leading-6 text-steel-600">{study.outcome}</p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-steel-100 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Project Method"
            title="A controlled path from discovery to support handover"
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {["Discovery", "Architecture", "Procurement", "Deployment", "SLA Handover"].map((step, index) => (
              <Card key={step} className="p-5">
                <CheckCircle2 className="size-6 text-success" />
                <p className="mt-5 text-sm font-bold text-cyan-500">Step {index + 1}</p>
                <h2 className="mt-2 text-lg font-bold text-navy-900">{step}</h2>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
