import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { localeUrl } from "@/lib/site";

type PageKey = "home" | "about" | "contact" | "resources";

const pagePaths: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  contact: "/contact",
  resources: "/resources",
};

export async function createPageMetadata(
  locale: string,
  page: PageKey
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const pathname = pagePaths[page];
  const title = t(`pages.${page}.title`);
  const description = t(`pages.${page}.description`);
  const url = localeUrl(locale, pathname);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, localeUrl(loc, pathname)])
      ),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: t("siteName"),
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
    },
  };
}
