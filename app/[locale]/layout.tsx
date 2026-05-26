import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import React from "react";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homes by Haydee | Haydee F Irizarry",
  description:
    "Bilingual real estate guidance in the Charleston and Lowcountry area. Broker Associate, License #87619, AgentOwned Realty.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider>
            <header className="border-b bg-background">
              <Navbar />
            </header>

            <main className="mx-auto w-full max-w-3xl grow space-y-8 px-6 py-12">
              {children}
            </main>

            <footer className="mt-auto border-t bg-background">
              <Footer />
            </footer>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
