import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";

export function SiteHeader() {
  const t = useTranslations("nav");

  const links = [
    { href: "/catalog/lighting", label: t("lighting") },
    { href: "/catalog/sockets", label: t("sockets") },
    { href: "/catalog/mounting", label: t("mounting") },
    { href: "/projects", label: t("projects") },
    { href: "/services", label: t("services") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-gray-light/30 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-bold tracking-tight text-navy">
            electrica
          </span>
          <span className="text-[0.6rem] font-medium tracking-[0.3em] text-gray-dark">
            GROUP
          </span>
        </Link>

        <nav className="hidden flex-1 justify-center gap-8 text-sm font-medium text-navy lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gray-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <LocaleSwitcher />
      </div>
    </header>
  );
}
