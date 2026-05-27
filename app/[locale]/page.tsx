import type { Metadata } from "next";
import { useTranslations } from "next-intl";

import { ContactForm } from "@/components/contact-form";
import { HomeHero } from "@/components/home-hero";
import { HomeNeighborhoods } from "@/components/home-neighborhoods";
import { HomeTestimonials } from "@/components/home-testimonials";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createPageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata(locale, "home");
}

const featureKeys = ["buyers", "local", "bilingual"] as const;

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="space-y-12">
      <HomeHero />

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          {t("featuresHeading")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureKeys.map((key) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>{t(`features.${key}.title`)}</CardTitle>
                <CardDescription>{t(`features.${key}.body`)}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <HomeNeighborhoods />

      <Separator />

      <HomeTestimonials />

      <Separator />

      <section
        id="contact"
        className="scroll-mt-24 rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur-sm md:p-8"
      >
        <div className="mb-6 space-y-1">
          <h2 className="text-xl font-semibold tracking-tight">
            {t("contactHeading")}
          </h2>
          <p className="max-w-prose text-sm text-muted-foreground">
            {t("contactBody")}
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
