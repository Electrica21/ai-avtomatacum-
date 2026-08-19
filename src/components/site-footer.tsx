import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const SOCIALS = [
  { href: "https://www.instagram.com/electrica.group", label: "Instagram" },
  { href: "https://www.facebook.com/electrika.am", label: "Facebook" },
  { href: "https://www.youtube.com/@electricagroup", label: "Youtube" },
  { href: "https://t.me/electricacommunity", label: "Telegram" },
];

export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="text-2xl font-bold tracking-tight">electrica</span>
          <p className="mt-2 max-w-xs text-sm text-white/70">
            For a Long Life
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <Link href="/contact" className="hover:text-peach transition-colors">
            {t("contact")}
          </Link>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-peach transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/70">
          <Link href="/faq" className="hover:text-peach transition-colors">
            {t("faq")}
          </Link>
          <Link href="/privacy-policy" className="hover:text-peach transition-colors">
            {t("privacy")}
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-peach transition-colors">
            {t("terms")}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/50">
        {t("rights", { year })}
      </div>
    </footer>
  );
}
