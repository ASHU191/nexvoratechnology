"use client";

import { partners } from "@/lib/site-data";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { CarouselSlider } from "@/components/carousel-slider";

export function OurPartners() {
  return (
    <section className="section-shell py-16 md:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="TRUSTED PARTNERS"
          title="Industry Leaders We Work With"
          description="We partner with world-class technology providers to deliver enterprise-grade solutions"
        />
      </FadeIn>

      {/* Mobile Carousel */}
      <div className="mt-12 block md:hidden">
        <CarouselSlider
          items={partners.map((partner) => (
            <div key={partner.name} className="group relative overflow-hidden rounded-lg border border-navy-700 bg-navy-900/50 p-6 backdrop-blur transition-all hover:border-cyan-600/50 hover:bg-navy-800/80">
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <div className="text-2xl font-bold text-cyan-500 group-hover:text-cyan-400 transition-colors">
                  {partner.name[0]}
                </div>
                <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  {partner.category}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
          slidesPerView={1}
          spaceBetween={20}
          pagination={true}
        />
      </div>

      {/* Desktop Grid */}
      <Stagger className="mt-12 hidden gap-5 md:grid md:grid-cols-3 lg:grid-cols-4">
        {partners.map((partner) => (
          <StaggerItem key={partner.name}>
            <div className="group relative overflow-hidden rounded-lg border border-navy-700 bg-navy-900/50 p-6 backdrop-blur transition-all hover:border-cyan-600/50 hover:bg-navy-800/80">
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <div className="text-2xl font-bold text-cyan-500 group-hover:text-cyan-600 transition-colors">
                  {partner.name[0]}
                </div>
                <h3 className="font-semibold text-white group-hover:text-cyan-600 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  {partner.category}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn className="mt-12">
        <div className="rounded-lg border border-cyan-600/20 bg-gradient-to-r from-cyan-500/5 to-transparent p-8 text-center">
          <p className="text-gray-300">
            <span className="font-semibold text-cyan-500">Partnership opportunities?</span> Contact us to explore collaboration.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
