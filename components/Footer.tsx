import { useTranslations } from "next-intl";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-8 text-center text-sm text-muted-foreground md:px-6">
      <Separator />
      <p className="font-medium text-foreground">{t("tagline")}</p>
      <p>{t("credentials")}</p>
      <p>© {new Date().getFullYear()} {t("copyright")}</p>
    </div>
  );
}
