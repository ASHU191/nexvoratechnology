import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function BrandMark({ className, light = false, imgClassName }: { className?: string; light?: boolean; imgClassName?: string }) {
  return (
    <Link href="/" className={cn("flex items-center", className)} aria-label="Nexvora Technology home">
      <Image
        src="/images/nexvora-logo.png"
        alt="Nexvora Technology"
        width={220}
        height={60}
        className={cn("h-12 w-auto", imgClassName)}
        priority
      />
    </Link>
  );
}
