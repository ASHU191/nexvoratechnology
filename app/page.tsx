import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Database,
  Factory,
  GraduationCap,
  Headphones,
  HeartPulse,
  Landmark,
  Layers3,
  LockKeyhole,
  MonitorCheck,
  Network,
  Radar,
  RefreshCcw,
  Router,
  Server,
  ShieldCheck,
  ShoppingBag,
  Timer,
  Wrench,
  Zap,
} from "lucide-react";

import { CarouselSlider } from "@/components/carousel-slider";
import { ContactForm } from "@/components/contact-form";
import { CtaBand } from "@/components/cta-band";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OurPartners } from "@/components/our-partners";
import { caseStudies, services, supportPlans, testimonials } from "@/lib/site-data";

const trustItems = [
  { label: "24/7 Support", icon: Headphones },
  { label: "SLA-Based Services", icon: BadgeCheck },
  { label: "Certified Engineers", icon: ShieldCheck },
  { label: "Fast Response Time", icon: Timer },
  { label: "Enterprise Solutions", icon: Building2 },
  { label: "Nationwide Coverage", icon: Radar },
];

const serviceIcons = [
  Server,
  Database,
  Network,
  LockKeyhole,
  Layers3,
  MonitorCheck,
  Wrench,
  Clock3,
  RefreshCcw,
  Activity,
];

const chooseItems = [
  "Enterprise Expertise",
  "Proactive Monitoring",
  "Guaranteed Response Times",
  "Dedicated Support Team",
  "Scalable Solutions",
  "Cost Optimization",
  "Business Continuity Focus",
];

const industries = [
  { title: "Banking & Finance", icon: Landmark, copy: "Secure branch, office, and transaction-supporting infrastructure." },
  { title: "Healthcare", icon: HeartPulse, copy: "Reliable systems for clinical operations, records, and secure access." },
  { title: "Education", icon: GraduationCap, copy: "Campus networks, labs, server rooms, and academic support coverage." },
  { title: "Manufacturing", icon: Factory, copy: "Plant connectivity, office IT, surveillance networks, and uptime planning." },
  { title: "Retail", icon: ShoppingBag, copy: "Branch rollouts, POS infrastructure, networking, and support contracts." },
  { title: "Software Houses", icon: Router, copy: "Developer workstations, cloud backup, network reliability, and security." },
  { title: "Government Organizations", icon: Building2, copy: "Documented procurement, support accountability, and secure deployment." },
];

export default function Home() {
  return (
    <>
      <section className="clip-hero relative isolate min-h-[92svh] overflow-hidden bg-navy-950 pt-20 text-white">
        <Image
          src="/images/nexvora-hero.png"
          alt="Enterprise data center, network infrastructure, and cybersecurity dashboard"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-58"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/82 to-navy-950/28" />
        <div className="absolute inset-0 bg-enterprise-grid bg-[size:46px_46px] opacity-18" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-navy-950 to-transparent" />
        <div className="section-shell relative flex min-h-[calc(92svh-80px)] items-center py-16">
          <FadeIn className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Nexvora Technology
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-normal sm:text-5xl lg:text-7xl">
              Enterprise IT Infrastructure & Managed Technology Solutions
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-xl">
              Helping businesses across Pakistan with enterprise hardware, networking, cybersecurity, server deployment, managed IT services, and SLA-backed technical support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="cyan" size="lg" asChild>
                <Link href="/contact#inquiry">
                  Request a Consultation
                  <ArrowRight />
                </Link>
              </Button>
              <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white/10" asChild>
                <Link href="/contact#inquiry">Get a Quote</Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-xs font-semibold text-white/62 sm:text-sm">
              <div className="border-l border-cyan-600 pl-3">
                <span className="block text-2xl font-bold text-white">24/7</span>
                Support readiness
              </div>
              <div className="border-l border-cyan-600/70 pl-3">
                <span className="block text-2xl font-bold text-white">SLA</span>
                Response models
              </div>
              <div className="border-l border-cyan-600/45 pl-3">
                <span className="block text-2xl font-bold text-white">PK</span>
                Nationwide coverage
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="-mt-10 bg-white pb-12">
        <div className="section-shell relative z-10">
          <Stagger className="grid gap-3 rounded-lg border border-steel-200 bg-white p-3 shadow-enterprise sm:grid-cols-2 lg:grid-cols-6">
            {trustItems.map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex h-full items-center gap-3 rounded-md bg-steel-100 p-4">
                  <item.icon className="size-5 shrink-0 text-cyan-500" />
                  <span className="text-sm font-bold text-navy-900">{item.label}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Enterprise Services"
            title="Infrastructure capabilities for mission-critical business operations"
            description="Nexvora combines procurement, implementation, support, and strategic advisory so enterprise teams can standardize technology with fewer handoffs."
          />
          {/* Mobile Carousel */}
          <div className="mt-10 block lg:hidden">
            <CarouselSlider
              items={services.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <Card key={service.title} className="group h-full overflow-hidden hover:border-cyan-600/55 hover:shadow-enterprise">
                    <CardHeader>
                      <div className="mb-2 flex size-11 items-center justify-center rounded-md bg-navy-900 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-navy-950">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-steel-600">{service.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
              slidesPerView={1}
              spaceBetween={20}
              pagination={true}
            />
          </div>

          {/* Desktop Grid */}
          <Stagger className="mt-10 hidden gap-5 sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <StaggerItem key={service.title}>
                  <Card className="group h-full overflow-hidden hover:border-cyan-600/55 hover:shadow-enterprise">
                    <CardHeader>
                      <div className="mb-2 flex size-11 items-center justify-center rounded-md bg-navy-900 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-navy-950">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-steel-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="overflow-hidden bg-steel-100 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Choose Nexvora"
              title="A support partner built for uptime, clarity, and accountability"
              description="Enterprise IT is not only about devices and diagrams. It is about response discipline, documentation, lifecycle planning, and keeping business teams moving."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {chooseItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-steel-200 bg-white p-4">
                  <CheckCircle2 className="size-5 shrink-0 text-success" />
                  <span className="text-sm font-bold text-navy-900">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden rounded-lg bg-navy-950 p-1 shadow-enterprise">
              <Image
                src="/images/nexvora-security-ops.png"
                alt="Cybersecurity dashboard and network operations center visual"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="aspect-[4/3] rounded-md object-cover opacity-86"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/22 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                {["Monitor", "Maintain", "Respond"].map((label) => (
                  <div key={label} className="glass-panel rounded-md p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">{label}</p>
                    <div className="mt-3 h-1.5 rounded-full bg-white/12">
                      <div className="h-full rounded-full bg-cyan-600" style={{ width: label === "Respond" ? "88%" : "72%" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Designed for complex organizations across Pakistan"
            description="From regulated environments to high-growth technology teams, Nexvora adapts infrastructure and support models to operational risk."
            align="center"
          />
          {/* Mobile Carousel */}
          <div className="mt-10 block lg:hidden">
            <CarouselSlider
              items={industries.map((industry) => (
                <Card key={industry.title} className="h-full p-6 hover:border-cyan-600/55 hover:shadow-enterprise">
                  <industry.icon className="size-8 text-cyan-500" />
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel-600">{industry.copy}</p>
                </Card>
              ))}
              slidesPerView={1}
              spaceBetween={20}
              pagination={true}
            />
          </div>

          {/* Desktop Grid */}
          <Stagger className="mt-10 hidden gap-5 sm:grid-cols-2 lg:grid lg:grid-cols-4">
            {industries.map((industry) => (
              <StaggerItem key={industry.title}>
                <Card className="h-full p-6 hover:border-cyan-600/55 hover:shadow-enterprise">
                  <industry.icon className="size-8 text-cyan-500" />
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel-600">{industry.copy}</p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="section-shell">
          <SectionHeading
            eyebrow="SLA Support Plans"
            title="Clear response commitments for business-critical technology"
            description="Choose a support model aligned with your uptime expectations, internal team capacity, and infrastructure criticality."
            align="center"
            light
          />
          {/* Mobile Carousel */}
          <div className="mt-10 block lg:hidden">
            <CarouselSlider
              items={supportPlans.map((plan) => (
                <Card key={plan.name} className={`relative h-full border-white/12 bg-white/[0.06] text-white ${plan.highlighted ? "shadow-glow ring-1 ring-cyan-600" : ""}`}>
                  {plan.highlighted ? (
                    <div className="absolute right-5 top-5 rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-navy-950">
                      Popular
                    </div>
                  ) : null}
                  <CardHeader>
                    <CardTitle className="text-white">{plan.name}</CardTitle>
                    <p className="text-sm leading-6 text-white/62">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md bg-white/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">Response Time</p>
                      <p className="mt-2 text-3xl font-bold">{plan.response}</p>
                      {plan.name === "Premium SLA" ? <p className="mt-1 text-sm font-semibold text-cyan-600">24/7 Priority Support</p> : null}
                    </div>
                    <div className="mt-5 grid gap-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex gap-3 text-sm text-white/70">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant={plan.highlighted ? "cyan" : "darkGhost"} className="mt-6 w-full border border-white/14" asChild>
                      <Link href="/contact#inquiry">Inquire About {plan.name}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              slidesPerView={1}
              spaceBetween={20}
              pagination={true}
            />
          </div>

          {/* Desktop Grid */}
          <Stagger className="mt-10 hidden gap-5 lg:grid lg:grid-cols-3">
            {supportPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <Card className={`relative h-full border-white/12 bg-white/[0.06] text-white ${plan.highlighted ? "shadow-glow ring-1 ring-cyan-600" : ""}`}>
                  {plan.highlighted ? (
                    <div className="absolute right-5 top-5 rounded-full bg-cyan-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-navy-950">
                      Popular
                    </div>
                  ) : null}
                  <CardHeader>
                    <CardTitle className="text-white">{plan.name}</CardTitle>
                    <p className="text-sm leading-6 text-white/62">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md bg-white/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">Response Time</p>
                      <p className="mt-2 text-3xl font-bold">{plan.response}</p>
                      {plan.name === "Premium SLA" ? <p className="mt-1 text-sm font-semibold text-cyan-600">24/7 Priority Support</p> : null}
                    </div>
                    <div className="mt-5 grid gap-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex gap-3 text-sm text-white/70">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant={plan.highlighted ? "cyan" : "darkGhost"} className="mt-6 w-full border border-white/14" asChild>
                      <Link href="/contact#inquiry">Inquire About {plan.name}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-steel-100 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Projects & Case Studies"
            title="Enterprise outcomes delivered through structured execution"
            description="Every engagement is anchored in assessment, implementation discipline, documentation, and measurable support handover."
          />
          {/* Mobile Carousel */}
          <div className="mt-10 block lg:hidden">
            <CarouselSlider
              items={caseStudies.map((study) => (
                <Card key={study.title} className="h-full overflow-hidden hover:shadow-enterprise">
                  <div className="h-2 bg-cyan-400" />
                  <CardHeader>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-steel-600">{study.description}</p>
                    <div className="mt-6 border-t border-steel-200 pt-5">
                      <p className="text-3xl font-bold text-navy-900">{study.metric}</p>
                      <p className="mt-1 text-sm font-semibold text-steel-600">{study.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              slidesPerView={1}
              spaceBetween={20}
              pagination={true}
            />
          </div>

          {/* Desktop Grid */}
          <Stagger className="mt-10 hidden gap-5 lg:grid lg:grid-cols-4">
            {caseStudies.map((study) => (
              <StaggerItem key={study.title}>
                <Card className="h-full overflow-hidden hover:shadow-enterprise">
                  <div className="h-2 bg-cyan-400" />
                  <CardHeader>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-steel-600">{study.description}</p>
                    <div className="mt-6 border-t border-steel-200 pt-5">
                      <p className="text-3xl font-bold text-navy-900">{study.metric}</p>
                      <p className="mt-1 text-sm font-semibold text-steel-600">{study.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Enterprise Testimonials"
            title="Trusted by teams that need infrastructure certainty"
            align="center"
          />
          {/* Mobile Carousel */}
          <div className="mt-10 block lg:hidden">
            <CarouselSlider
              items={testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="h-full p-6">
                  <div className="mb-6 flex gap-1 text-cyan-500">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Zap key={item} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-base leading-7 text-navy-900">"{testimonial.quote}"</blockquote>
                  <div className="mt-6 border-t border-steel-200 pt-5">
                    <p className="font-bold text-navy-900">{testimonial.name}</p>
                    <p className="text-sm text-steel-600">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
              slidesPerView={1}
              spaceBetween={20}
              pagination={true}
            />
          </div>

          {/* Desktop Grid */}
          <Stagger className="mt-10 hidden gap-5 lg:grid lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <Card className="h-full p-6">
                  <div className="mb-6 flex gap-1 text-cyan-500">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Zap key={item} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-base leading-7 text-navy-900">“{testimonial.quote}”</blockquote>
                  <div className="mt-6 border-t border-steel-200 pt-5">
                    <p className="font-bold text-navy-900">{testimonial.name}</p>
                    <p className="text-sm text-steel-600">{testimonial.company}</p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-steel-100 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="Business Inquiry"
              title="Request a consultation, quote, SLA plan, or hardware procurement review"
              description="Tell us what you are building, replacing, supporting, or securing. Nexvora will respond with the right next step for your organization."
            />
            <div className="mt-8 grid gap-4">
              {["SLA contract inquiries", "Hardware procurement opportunities", "Managed IT service assessments"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-navy-900">
                  <span className="flex size-7 items-center justify-center rounded-md bg-cyan-400 text-navy-950">
                    <CheckCircle2 className="size-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <OurPartners />

      <CtaBand />
    </>
  );
}
