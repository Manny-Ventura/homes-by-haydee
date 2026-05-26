import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";

const featureKeys = ["buyers", "local", "bilingual"] as const;
const statKeys = ["experience", "languages", "specialty"] as const;

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">
            {t("subtitle")}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t("title")}
          </h1>
          <p className="max-w-prose text-lg text-muted-foreground">
            {t("intro")}
          </p>
        </div>
        <Button nativeButton={false} render={<Link href="/contact" />}>
          {t("cta")}
        </Button>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {statKeys.map((key) => (
          <Card key={key} className="text-center">
            <CardHeader className="items-center">
              <CardTitle className="text-2xl">{t(`stats.${key}.value`)}</CardTitle>
              <CardDescription>{t(`stats.${key}.label`)}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <Separator />

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featureKeys.map((key) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle>{t(`features.${key}.title`)}</CardTitle>
              <CardDescription>{t(`features.${key}.body`)}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="rounded-lg border bg-muted/40 p-6">
        <p className="text-muted-foreground">{t("closing")}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button nativeButton={false} render={<Link href="/contact" />}>
            {t("cta")}
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="/about" />}
          >
            {t("aboutCta")}
          </Button>
        </div>
      </section>
    </div>
  );
}
