"use client";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
  onSwitch?: () => void;
};

export function LocaleSwitcher({ className, onSwitch }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: string) {
    if (nextLocale === locale) {
      return;
    }

    onSwitch?.();

    const hash = window.location.hash;
    router.replace(`${pathname}${hash}`, { locale: nextLocale, scroll: false });
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border bg-background p-0.5",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => (
        <Button
          key={loc}
          type="button"
          variant={locale === loc ? "secondary" : "ghost"}
          size="sm"
          className="min-w-9 px-2.5 uppercase"
          aria-current={locale === loc ? "true" : undefined}
          aria-label={loc === "en" ? "English" : "Español"}
          onClick={() => switchLocale(loc)}
        >
          {loc}
        </Button>
      ))}
    </div>
  );
}
