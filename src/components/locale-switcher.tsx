"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  hy: "ՀԱՅ",
  ru: "РУС",
  en: "ENG",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-gray-light">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            className={
              loc === locale
                ? "text-navy"
                : "text-gray-dark hover:text-navy transition-colors"
            }
            aria-current={loc === locale ? "true" : undefined}
          >
            {LABELS[loc]}
          </button>
        </span>
      ))}
    </div>
  );
}
