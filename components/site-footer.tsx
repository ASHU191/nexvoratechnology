import Link from "next/link";
import { Facebook, Linkedin, MessageCircle, Mail, Phone } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { navLinks, contactInfo } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.1fr_1fr_0.8fr]">
        <div>
          <BrandMark light imgClassName="h-16 w-auto" />
          <p className="mt-5 max-w-sm text-lg font-semibold text-white">Enterprise Infrastructure. Delivered.</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/62">
            Enterprise IT infrastructure, hardware procurement, cybersecurity, managed services, AMC, and SLA-backed support for organizations across Pakistan.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Company</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-white/66 transition hover:text-cyan-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Connect</h2>
          <div className="mt-5 flex gap-3">
            <Button variant="darkGhost" size="icon" asChild>
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </Button>
            <Button variant="darkGhost" size="icon" asChild>
              <a href="https://www.facebook.com" aria-label="Facebook">
                <Facebook />
              </a>
            </Button>
            <Button variant="darkGhost" size="icon" asChild>
              <a href="https://wa.me/" aria-label="WhatsApp">
                <MessageCircle />
              </a>
            </Button>
          </div>
          <div className="mt-5 grid gap-3">
            <a href={`mailto:${contactInfo.email}`} className="flex flex-wrap items-center gap-2 text-sm text-white/66 transition hover:text-cyan-600">
              <Mail className="size-4 shrink-0" />
              <span className="break-all">{contactInfo.email}</span>
            </a>
            <a href={`tel:+92${contactInfo.phone}`} className="flex flex-wrap items-center gap-2 text-sm text-white/66 transition hover:text-cyan-600">
              <Phone className="size-4 shrink-0" />
              <span className="break-all">+92 {contactInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/52">© 2026 Nexvora Technology. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy-policy" className="text-white/52 transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-white/52 transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
