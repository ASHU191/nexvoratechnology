import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexvoratechnology.com"),
  title: {
    default: "Nexvora Technology | Enterprise IT Infrastructure & Managed Services Pakistan",
    template: "%s | Nexvora Technology",
  },
  description:
    "Nexvora Technology delivers enterprise IT infrastructure, hardware procurement, network infrastructure, server solutions, data center solutions, cybersecurity, AMC, managed IT services, and SLA-based support across Pakistan.",
  keywords: [
    "enterprise IT Pakistan",
    "hardware procurement Pakistan",
    "managed IT services",
    "SLA support",
    "network infrastructure",
    "cybersecurity solutions",
    "data center solutions",
  ],
  openGraph: {
    title: "Nexvora Technology",
    description: "Enterprise Infrastructure. Delivered.",
    url: "https://nexvoratechnology.com",
    siteName: "Nexvora Technology",
    images: [
      {
        url: "/images/nexvora-hero.png",
        width: 1536,
        height: 864,
        alt: "Enterprise data center and network infrastructure",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexvora Technology",
    description: "Enterprise IT infrastructure and SLA-backed managed services across Pakistan.",
    images: ["/images/nexvora-hero.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F3A",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
