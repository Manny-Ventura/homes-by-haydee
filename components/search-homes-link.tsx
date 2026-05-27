"use client";

import { useTranslations } from "next-intl";
import type { VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";
import { getMlsSearchUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type SearchHomesLinkProps = {
  className?: string;
  size?: VariantProps<typeof buttonVariants>["size"];
  variant?: VariantProps<typeof buttonVariants>["variant"];
  onNavigate?: () => void;
};

export function SearchHomesLink({
  className,
  size = "default",
  variant = "default",
  onNavigate,
}: SearchHomesLinkProps) {
  const t = useTranslations("nav");
  const url = getMlsSearchUrl();

  if (!url) {
    return null;
  }

  return (
    <Button
      size={size}
      variant={variant}
      className={cn(className)}
      nativeButton={false}
      render={
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavigate}
        />
      }
    >
      {t("searchHomes")}
    </Button>
  );
}
