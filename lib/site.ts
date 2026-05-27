export const SITE_URL = "https://homesbyhaydee.com";

/** Set NEXT_PUBLIC_MLS_SEARCH_URL to the brokerage/MLS listing search page. */
export function getMlsSearchUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_MLS_SEARCH_URL?.trim();
  return url || undefined;
}

export function localeUrl(locale: string, pathname = "/") {
  const path = pathname === "/" ? "" : pathname;
  return `${SITE_URL}/${locale}${path}`;
}
