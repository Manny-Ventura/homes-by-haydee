import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: "Homes by Haydee",
  description: "Professional real estate website of Haydee Irizarry",
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
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col`}
      >
        <NextIntlClientProvider>
          <header className="border-b bg-background">
            <Navbar />
          </header>

          <main className="mx-auto w-full max-w-2xl grow space-y-8 px-6 py-12">
            {children}
          </main>

          <footer className="mt-auto border-t bg-background">
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
