import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";

const featureKeys = ["buyers", "local", "bilingual"] as const;

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          <p className="max-w-prose text-muted-foreground">{t("intro")}</p>
        </div>
        <Button nativeButton={false} render={<Link href="/contact" />}>
          {t("cta")}
        </Button>
      </section>

      <Separator />

      <section className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureKeys.map((key) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>{t(`features.${key}.title`)}</CardTitle>
                <CardDescription>{t(`features.${key}.body`)}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-lg border bg-muted/40 p-6">
        <p className="text-muted-foreground">{t("closing")}</p>
        <div className="mt-4">
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            {t("cta")}
          </Button>
        </div>
      </section>
    </div>
  );
}
