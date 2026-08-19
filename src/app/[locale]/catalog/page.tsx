import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CATEGORIES = ["lighting", "sockets", "mounting"] as const;

export default function CatalogPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">
            {t("catalog.title")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/catalog/${cat}`}
              className="group flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-xl bg-gray-light/20 p-6 transition-colors hover:bg-navy"
            >
              <span className="text-lg font-semibold text-navy group-hover:text-white">
                {t(`nav.${cat}`)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
