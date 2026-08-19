import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ProductTabs } from "@/components/home/product-tabs";
import {
  SAMPLE_BRANDS,
  SAMPLE_PRODUCTS,
  SAMPLE_PROJECTS,
} from "@/lib/placeholder-data";

export default function HomePage() {
  const t = useTranslations("home");

  const directions = [
    { key: "lighting", href: "/catalog/lighting" },
    { key: "sockets", href: "/catalog/sockets" },
    { key: "mounting", href: "/catalog/mounting" },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-24">
          <span className="text-sm font-semibold tracking-[0.3em] text-peach">
            {t("heroKicker")}
          </span>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-white/70">{t("heroTagline")}</p>
          <Link
            href="/catalog"
            className="mt-4 w-fit rounded-full bg-peach px-6 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
          >
            {t("heroCta")}
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        {/* Main directions */}
        <section className="py-16">
          <h2 className="mb-8 text-sm font-semibold tracking-[0.2em] text-gray-dark">
            {t("directionsTitle")}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {directions.map((d) => (
              <Link
                key={d.key}
                href={d.href}
                className="group flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-xl bg-gray-light/20 p-6 transition-colors hover:bg-navy"
              >
                <span className="text-lg font-semibold text-navy group-hover:text-white">
                  {t(`directions.${d.key}`)}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="py-16">
          <h2 className="mb-8 text-sm font-semibold tracking-[0.2em] text-gray-dark">
            {t("projectsTitle")}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAMPLE_PROJECTS.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group flex aspect-video flex-col justify-end overflow-hidden rounded-xl bg-gray-light/20 p-5"
              >
                <span className="font-medium text-navy">{p.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <h2 className="mb-8 text-sm font-semibold tracking-[0.2em] text-gray-dark">
            {t("productsTitle")}
          </h2>
          <ProductTabs
            products={SAMPLE_PRODUCTS}
            addToCartLabel={t("addToCart")}
            labels={{
              bestsellers: t("tabs.bestsellers"),
              ownProduction: t("tabs.ownProduction"),
              new: t("tabs.new"),
            }}
          />
        </section>

        {/* Brands */}
        <section className="py-16">
          <h2 className="mb-8 text-sm font-semibold tracking-[0.2em] text-gray-dark">
            {t("brandsTitle")}
          </h2>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {SAMPLE_BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-lg font-semibold text-gray-dark"
              >
                {brand}
              </span>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
