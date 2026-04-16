import { cn } from "@/lib/utils";

type SectionIntroProps = {
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
};

export function SectionIntro({ title, description, center, className }: SectionIntroProps) {
  return (
    <div className={cn("space-y-3", center && "mx-auto max-w-2xl text-center", className)}>
      <h2 className="section-heading">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}

