import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SAMPLE_PRODUCTS } from "@/lib/placeholder-data";

const CATEGORY_KEYS = ["lighting", "sockets", "mounting"] as const;
type CategoryKey = (typeof CATEGORY_KEYS)[number];

function isCategoryKey(value: string): value is CategoryKey {
  return (CATEGORY_KEYS as readonly string[]).includes(value);
}

export default async function CatalogCategoryPage({
  params,
}: PageProps<"/[locale]/catalog/[category]">) {
  const { category } = await params;
  if (!isCategoryKey(category)) {
    notFound();
  }

  const t = await getTranslations();
  const products = [
    ...SAMPLE_PRODUCTS.bestsellers,
    ...SAMPLE_PRODUCTS.ownProduction,
    ...SAMPLE_PRODUCTS.new,
  ];

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">
            {t(`nav.${category}`)}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-8 rounded-lg bg-peach/40 px-4 py-3 text-sm text-navy">
          {t("catalog.pendingNote")}
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.sku}
              className="flex flex-col rounded-lg border border-gray-light/40 p-4 transition-shadow hover:shadow-md"
            >
              <span className="text-xs text-gray-dark">{product.sku}</span>
              <span className="mt-1 text-sm font-medium text-navy">
                {product.name}
              </span>
              <span className="mt-3 text-base font-semibold text-navy">
                {product.priceAmd.toLocaleString("ru-RU")} ֏
              </span>
              <button
                type="button"
                className="mt-4 rounded-full border border-navy px-4 py-2 text-xs font-medium text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {t("catalog.addToCart")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
