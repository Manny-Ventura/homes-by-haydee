import { useTranslations } from "next-intl";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const resourceKeys = ["checklist", "questions", "glossary"] as const;

export default function ResourcesPage() {
  const t = useTranslations("resources");

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="max-w-prose text-muted-foreground">{t("body")}</p>
      </div>

      <div className="grid gap-4">
        {resourceKeys.map((key) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle>{t(`items.${key}.title`)}</CardTitle>
              <CardDescription>{t(`items.${key}.body`)}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
