"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const t = useTranslations("contactForm");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-border/80 bg-muted/40 px-4 py-6 text-center"
        role="status"
      >
        <p className="font-medium text-foreground">{t("successTitle")}</p>
        <p className="mt-1 text-sm text-muted-foreground">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-muted-foreground">{t("pendingNote")}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">{t("name")}</Label>
          <Input id="contact-name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">{t("email")}</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">{t("phone")}</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-timeline">{t("timeline")}</Label>
          <Input id="contact-timeline" name="timeline" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">{t("message")}</Label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className={cn(
            "w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
          )}
        />
      </div>

      <Button type="submit" size="lg">
        {t("submit")}
      </Button>
    </form>
  );
}
