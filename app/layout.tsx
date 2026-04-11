import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <header className="border-2 border-[var(--border)] bg-[var(--surface)]">
          <Navbar />
        </header>

        <main className="mx-auto max-w-2xl grow space-y-24 px-6 py-12">{children}</main>

        <footer className="h-full border-2 border-[var(--border)] bg-[var(--surface)] p-10 text-center">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
