import Image from "next/image";
import { useTranslations } from "next-intl";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const neighborhoodKeys = [
  "summerville",
  "gooseCreek",
  "moncksCorner",
  "mountPleasant",
] as const;

type NeighborhoodKey = (typeof neighborhoodKeys)[number];

const neighborhoodImages: Partial<Record<NeighborhoodKey, string>> = {
  gooseCreek: "/images/neighborhoods/goose-creek.png",
};

const placeholderClass: Record<NeighborhoodKey, string> = {
  summerville:
    "bg-linear-to-br from-[oklch(0.88_0.06_55)] to-[oklch(0.94_0.04_85)]",
  gooseCreek:
    "bg-linear-to-br from-[oklch(0.85_0.05_148)] to-[oklch(0.93_0.03_90)]",
  moncksCorner:
    "bg-linear-to-br from-[oklch(0.86_0.07_48)] to-[oklch(0.92_0.04_78)]",
  mountPleasant:
    "bg-linear-to-br from-[oklch(0.84_0.04_220)] to-[oklch(0.93_0.03_95)]",
};

function NeighborhoodMedia({ neighborhoodKey }: { neighborhoodKey: NeighborhoodKey }) {
  const t = useTranslations("home.neighborhoods");
  const src = neighborhoodImages[neighborhoodKey];

  if (src) {
    return (
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={src}
          alt={t(`items.${neighborhoodKey}.imageAlt`)}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex h-36 items-end p-4 ${placeholderClass[neighborhoodKey]}`}
      role="img"
      aria-label={t(`items.${neighborhoodKey}.imageAlt`)}
    >
      <span className="rounded-md bg-background/90 px-2 py-1 text-xs font-medium text-foreground">
        {t("photoComingSoon")}
      </span>
    </div>
  );
}

export function HomeNeighborhoods() {
  const t = useTranslations("home.neighborhoods");

  return (
    <section className="space-y-4" aria-labelledby="neighborhoods-heading">
      <div className="space-y-1">
        <h2 id="neighborhoods-heading" className="text-xl font-semibold tracking-tight">
          {t("heading")}
        </h2>
        <p className="max-w-prose text-sm text-muted-foreground">{t("body")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {neighborhoodKeys.map((key) => (
          <Card key={key} className="overflow-hidden pt-0">
            <NeighborhoodMedia neighborhoodKey={key} />
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
