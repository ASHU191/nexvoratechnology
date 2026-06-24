"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <BrandMark light />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white",
                pathname === link.href && "bg-white/10 text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" asChild>
            <Link href="/contact">
              <PhoneCall />
              Talk to Sales
            </Link>
          </Button>
          <Button variant="cyan" asChild>
            <Link href="/contact#inquiry">Get a Quote</Link>
          </Button>
        </div>

        <Button
          variant="darkGhost"
          size="icon"
          className="lg:hidden text-white"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="text-white" /> : <Menu className="text-white" />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy-950 lg:hidden">
          <nav className="section-shell grid gap-1 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-semibold text-white/75",
                  pathname === link.href && "bg-white/10 text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="cyan" className="mt-3" asChild>
              <Link href="/contact#inquiry" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
