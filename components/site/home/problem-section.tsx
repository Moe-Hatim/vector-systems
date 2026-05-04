import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { painPoints } from "@/lib/site-content";
import { SectionIntro } from "@/components/site/home/section-intro";

export function ProblemSection() {
  return (
    <section className="section-shell bg-[var(--surface-container-low)]">
      <div className="container-shell space-y-12">
        <SectionIntro
          center
          title="The friction holding you back"
          description="Running an SME is already hard. Administrative chaos should not make it harder."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((item) => (
            <Card key={item.title} className="interactive-soft reveal-fade border-0 bg-[var(--surface-container-lowest)] shadow-[0_8px_20px_rgba(3,22,49,0.04)]">
              <CardHeader className="pb-2">
                <AlertTriangle className="mb-4 size-5 text-destructive" />
                <CardTitle className="text-lg text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-relaxed text-[var(--on-surface-variant)]">
                {item.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

