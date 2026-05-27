import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Separator } from "@/components/ui/separator";
import { getMlsSearchUrl } from "@/lib/site";

const footerLinks = [
  { href: "/about", labelKey: "about" as const },
  { href: "/contact", labelKey: "contact" as const },
  { href: "/resources", labelKey: "resources" as const },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const mlsSearchUrl = getMlsSearchUrl();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 text-sm text-muted-foreground md:px-6">
      <Separator className="mb-8" />

      <div className="grid gap-8 text-center sm:grid-cols-2 sm:gap-10 sm:text-left">
        <div className="space-y-2">
          <p className="font-medium text-foreground">{t("tagline")}</p>
          <p>{t("credentials")}</p>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-foreground">{t("quickLinks")}</p>
          <nav aria-label={t("quickLinks")} className="flex flex-col gap-2">
            {mlsSearchUrl ? (
              <a
                href={mlsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit transition-colors hover:text-foreground sm:mx-0 mx-auto"
              >
                {tNav("searchHomes")}
              </a>
            ) : null}
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit transition-colors hover:text-foreground sm:mx-0 mx-auto"
              >
                {tNav(item.labelKey)}
              </Link>
            ))}
          </nav>
          <p>{t("fairHousing")}</p>
          <p className="text-xs">{t("privacy")}</p>
        </div>
      </div>

      <p className="mt-8 border-t pt-6 text-center text-xs">
        © {new Date().getFullYear()} {t("copyright")}
      </p>
    </div>
  );
}
