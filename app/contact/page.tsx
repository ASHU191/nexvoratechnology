import type { Metadata } from "next";
import { Mail, MapPinned, Phone, Send } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/motion-primitives";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Nexvora Technology for enterprise IT consultation, hardware procurement, SLA support contracts, AMC, cybersecurity, data center, server, and managed IT service inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a business inquiry with Nexvora Technology"
        description="Request a consultation, hardware quote, SLA support discussion, AMC proposal, cybersecurity review, or infrastructure assessment for your organization."
        primaryLabel="Go to Inquiry Form"
        primaryHref="#inquiry"
      />

      <section className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="Business Inquiry"
              title="Tell us what your team needs next"
              description="Nexvora can help scope procurement, infrastructure deployments, managed services, AMC coverage, and SLA response models."
            />
            <div className="mt-8 grid gap-4">
              {[
                { title: "Email", value: "sales@nexvoratechnology.com", icon: Mail },
                { title: "Phone", value: "+92 300 0000000", icon: Phone },
                { title: "Coverage", value: "Pakistan nationwide support", icon: MapPinned },
                { title: "Response", value: "Consultation and quote requests", icon: Send },
              ].map((item) => (
                <Card key={item.title} className="flex items-center gap-4 p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-cyan-600">
                    <item.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-steel-600">{item.title}</span>
                    <span className="block font-bold text-navy-900">{item.value}</span>
                  </span>
                </Card>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
