"use client";

import { useState, type ReactNode } from "react";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", labelKey: "home" as const },
  { href: "/about", labelKey: "about" as const },
  { href: "/contact", labelKey: "contact" as const },
  { href: "/resources", labelKey: "resources" as const },
];

function NavLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      variant="ghost"
      nativeButton={false}
      className={cn("text-muted-foreground hover:text-foreground", className)}
      render={<Link href={href} onClick={onClick} />}
    >
      {children}
    </Button>
  );
}

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-6">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        Homes by Haydee
      </Link>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {t(item.labelKey)}
            </NavLink>
          ))}
        </div>

        <LocaleSwitcher />

        <ThemeToggle />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={<Button variant="outline" size="icon" aria-label="Open menu" />}
          >
            <Menu />
          </SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-xs">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4">
            <LocaleSwitcher className="w-fit" onSwitch={() => setOpen(false)} />
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="w-full justify-start"
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
