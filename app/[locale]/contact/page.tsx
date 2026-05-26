import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

const detailKeys = [
  "brokerage",
  "license",
  "languages",
  "area",
] as const;

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="max-w-prose text-muted-foreground">{t("body")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {detailKeys.map((key) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle>{t(key)}</CardTitle>
              <CardDescription>{t(`${key}Value`)}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="bg-muted/40">
        <CardHeader>
          <CardTitle>{t("getStarted")}</CardTitle>
          <CardDescription>{t("note")}</CardDescription>
        </CardHeader>
      </Card>

      <Button nativeButton={false} render={<Link href="/about" />}>
        {t("aboutLink")}
      </Button>
    </section>
  );
}
