import Image from "next/image";
import { useTranslations } from "next-intl";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const factKeys = ["experience", "specialty", "languages", "area"] as const;

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="space-y-10">
      <section className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <div className="relative mx-auto h-56 w-44 shrink-0 overflow-hidden rounded-xl border sm:mx-0 sm:h-64 sm:w-48">
          <Image
            src="/images/haydee-headshot.png"
            alt={t("name")}
            width={396}
            height={496}
            className="size-full object-cover object-[center_20%]"
            sizes="(max-width: 640px) 176px, 192px"
            priority
          />
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <h1 className="text-3xl font-semibold tracking-tight">{t("name")}</h1>
          <p className="text-lg text-muted-foreground">
            {t("role")} · {t("license")}
          </p>
          <p className="font-medium">{t("brokerage")}</p>
        </div>
      </section>

      <Separator />

      <section className="space-y-4 max-w-prose">
        <h2 className="text-xl font-semibold">{t("title")}</h2>
        <p className="text-muted-foreground">{t("bio1")}</p>
        <p className="text-muted-foreground">{t("bio2")}</p>
        <p className="text-muted-foreground">{t("bio3")}</p>
        <p className="text-muted-foreground">{t("bioZillow")}</p>
        <p className="text-muted-foreground">{t("bio4")}</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {factKeys.map((key) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle className="text-base">{t(`facts.${key}`)}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
