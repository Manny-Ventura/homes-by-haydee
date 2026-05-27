"use client";

import { useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { SearchHomesLink } from "@/components/search-homes-link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", labelKey: "about" as const },
  { href: "/contact", labelKey: "contact" as const },
  { href: "/resources", labelKey: "resources" as const },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  children,
  className,
  onClick,
  isActive,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}) {
  return (
    <Button
      variant="ghost"
      nativeButton={false}
      className={cn(
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:text-foreground",
        className
      )}
      aria-current={isActive ? "page" : undefined}
      render={<Link href={href} onClick={onClick} />}
    >
      {children}
    </Button>
  );
}

export default function Navbar() {
  const t = useTranslations("nav");
  const tMeta = useTranslations("meta");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-6">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight text-foreground"
      >
        {tMeta("siteName")}
      </Link>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              isActive={isActivePath(pathname, item.href)}
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
          <SearchHomesLink size="sm" />
        </div>

        <LocaleSwitcher />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button
                variant="outline"
                size="icon"
                aria-label={t("openMenu")}
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader>
              <SheetTitle>{t("menu")}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4">
              <LocaleSwitcher className="w-fit" onSwitch={() => setOpen(false)} />
              <SearchHomesLink
                className="w-fit"
                onNavigate={() => setOpen(false)}
              />
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className="w-full justify-start"
                  isActive={isActivePath(pathname, item.href)}
                  onClick={() => setOpen(false)}
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
