import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollBackdrop } from "@/components/scroll-backdrop";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import React from "react";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL("https://homesbyhaydee.com"),
    title: {
      default: t("defaultTitle"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("defaultDescription"),
    alternates: {
      canonical: localeUrl(locale),
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, localeUrl(loc)])
      ),
    },
    openGraph: {
      siteName: t("siteName"),
      locale: locale === "es" ? "es_US" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col`}
      >
        <NextIntlClientProvider>
          <ScrollBackdrop />
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur-md">
              <Navbar />
            </header>

            <main className="relative z-10 mx-auto w-full max-w-5xl grow space-y-8 px-4 py-12 md:px-6">
              {children}
            </main>

            <footer className="relative z-10 mt-auto border-t bg-background/85 backdrop-blur-md">
              <Footer />
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
