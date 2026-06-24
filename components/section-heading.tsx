import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Badge className={light ? "border-cyan-600/35 bg-cyan-600/10 text-cyan-600" : undefined}>
        {eyebrow}
      </Badge>
      <h2
        className={cn(
          "mt-4 text-3xl font-bold tracking-normal sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-7 sm:text-lg", light ? "text-white/66" : "text-steel-600")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
