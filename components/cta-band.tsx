import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-navy-950 py-16 text-white">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.06] p-6 shadow-glow sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-radial-cyan opacity-70" />
          <div className="relative flex max-w-3xl gap-4">
            <div className="hidden size-12 shrink-0 items-center justify-center rounded-md bg-cyan-600 text-navy-950 sm:flex">
              <FileCheck2 className="size-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-normal sm:text-3xl">Ready to discuss your IT infrastructure roadmap?</h2>
              <p className="mt-3 text-sm leading-6 text-white/66 sm:text-base">
                Share your locations, systems, procurement needs, or SLA expectations and Nexvora will map the right engagement model.
              </p>
            </div>
          </div>
          <Button variant="cyan" size="lg" className="relative mt-6 lg:mt-0" asChild>
            <Link href="/contact#inquiry">
              Request Consultation
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
