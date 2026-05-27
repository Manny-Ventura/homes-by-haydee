import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const testimonialKeys = ["one", "two", "three"] as const;

export function HomeTestimonials() {
  const t = useTranslations("home.testimonials");

  return (
    <section className="space-y-4" aria-labelledby="testimonials-heading">
      <div className="space-y-1">
        <h2 id="testimonials-heading" className="text-xl font-semibold tracking-tight">
          {t("heading")}
        </h2>
        <p className="max-w-prose text-sm text-muted-foreground">{t("body")}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonialKeys.map((key) => (
          <Card key={key} className="border-dashed">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs uppercase tracking-wide">
                {t("placeholderLabel")}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground italic">
              {t(`items.${key}`)}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
