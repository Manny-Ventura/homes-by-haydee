import { useTranslations } from "next-intl";

import { AgentPortrait } from "@/components/agent-portrait";
import { SearchHomesLink } from "@/components/search-homes-link";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const trustKeys = ["experience", "languages", "specialty"] as const;

export function HomeHero() {
  const t = useTranslations("home");
  const tAbout = useTranslations("about");

  return (
    <section className="rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur-sm md:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {t("badge")}
          </p>

          <div className="space-y-4">
            <h1 className="max-w-xl text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {t("title")}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              {t("lead")}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <SearchHomesLink size="lg" />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/#contact" />}
            >
              {t("cta")}
            </Button>
            <Button
              size="lg"
              variant="ghost"
              nativeButton={false}
              render={<Link href="/about" />}
            >
              {t("aboutCta")}
            </Button>
          </div>

          <ul className="flex flex-wrap gap-3 border-t border-border/80 pt-6">
            {trustKeys.map((key) => (
              <li
                key={key}
                className="rounded-lg border border-border/60 bg-background/60 px-3 py-2"
              >
                <p className="text-base font-semibold text-foreground">
                  {t(`stats.${key}.value`)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t(`stats.${key}.label`)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="mx-auto w-full max-w-[240px] lg:mx-0 lg:max-w-[220px]">
          <div className="overflow-hidden rounded-xl border border-border/80 bg-background shadow-sm">
            <div className="relative aspect-4/5 w-full">
              <AgentPortrait
                src="/images/haydee-headshot.png"
                alt={tAbout("name")}
                initials="HF"
              />
            </div>
            <div className="space-y-1 border-t border-border/80 px-4 py-4 text-center">
              <p className="font-semibold text-foreground">{tAbout("name")}</p>
              <p className="text-sm text-muted-foreground">{tAbout("role")}</p>
              <p className="text-xs text-muted-foreground">
                {tAbout("brokerage")}
              </p>
              <p className="text-xs text-muted-foreground">{t("serviceArea")}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
