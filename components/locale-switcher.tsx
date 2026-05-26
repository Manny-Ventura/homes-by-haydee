"use client";

import { useLocale } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
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
          variant={locale === loc ? "secondary" : "ghost"}
          size="sm"
          className="min-w-9 px-2.5 uppercase"
          nativeButton={false}
          aria-current={locale === loc ? "true" : undefined}
          render={
            <Link
              href={pathname}
              locale={loc}
              onClick={onSwitch}
              aria-label={loc === "en" ? "English" : "Español"}
            />
          }
        >
          {loc}
        </Button>
      ))}
    </div>
  );
}
