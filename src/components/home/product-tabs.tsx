"use client";

import { useState } from "react";
import type { PlaceholderProduct } from "@/lib/placeholder-data";

type TabKey = "bestsellers" | "ownProduction" | "new";

export function ProductTabs({
  products,
  labels,
  addToCartLabel,
}: {
  products: Record<TabKey, PlaceholderProduct[]>;
  labels: Record<TabKey, string>;
  addToCartLabel: string;
}) {
  const tabs: TabKey[] = ["bestsellers", "ownProduction", "new"];
  const [active, setActive] = useState<TabKey>("bestsellers");

  return (
    <div>
      <div className="flex flex-wrap gap-6 border-b border-gray-light/40">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`-mb-px border-b-2 pb-3 text-sm font-medium transition-colors ${
              active === tab
                ? "border-navy text-navy"
                : "border-transparent text-gray-dark hover:text-navy"
            }`}
          >
            {labels[tab]}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
        {products[active].map((product) => (
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
              {addToCartLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
