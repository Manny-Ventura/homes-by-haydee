import { useTranslations } from "next-intl";
import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const resourceKeys = [
  "checklist",
  "questions",
  "glossary",
  "bilingual",
  "lowcountry",
  "management",
] as const;

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata(locale, "resources");
}

export default function ResourcesPage() {
  const t = useTranslations("resources");

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="max-w-prose text-muted-foreground">{t("body")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
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
