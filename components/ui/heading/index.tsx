import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function Heading({
  title,
  subtitle,
  align = "left",
  className,
}: HeadingProps) {
  return (
    <div
      className={cn(
        align === "center"
          ? "text-center mx-auto"
          : "text-left",
        "max-w-3xl",
        className
      )}
    >
      {subtitle && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
          {subtitle}
        </p>
      )}

      <h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}