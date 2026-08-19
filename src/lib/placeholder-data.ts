/**
 * Placeholder content sampled from the current live site (electricagroup.am)
 * to give the new templates something realistic to render. Replace with a
 * real data source (product export, CMS, or API) before launch — see
 * SITE-MAP.md, "Open question — product data source".
 */

export type PlaceholderProduct = {
  sku: string;
  name: string;
  priceAmd: number;
};

export const SAMPLE_PRODUCTS: Record<
  "bestsellers" | "ownProduction" | "new",
  PlaceholderProduct[]
> = {
  bestsellers: [
    { sku: "030302", name: "Gauss светильник UFO 120° 200W 5000K", priceAmd: 36650 },
    { sku: "029094", name: "Electrica трековый светильник (GH30W) 30W 3000K", priceAmd: 10010 },
    { sku: "021983", name: "Legrand TX3 автомат 1P C50A 6kA", priceAmd: 3410 },
  ],
  ownProduction: [
    { sku: "031453", name: "Electrica набор монтажных инструментов 122pcs (P3028A)", priceAmd: 56490 },
    { sku: "010565", name: "Electrica щит распределительный настенный 330×250×120мм IP31", priceAmd: 9900 },
    { sku: "029217", name: "Electrica LED люстра алюминиевая (KS-R-BK) 58W 4000K", priceAmd: 26840 },
  ],
  new: [
    { sku: "035119", name: "Electrica Lux светильник встраиваемый 20W 3000K", priceAmd: 15200 },
    { sku: "033184", name: "Electrica рамка встраиваемая Fos под шпаклёвку, серебро", priceAmd: 2400 },
    { sku: "032957", name: "Schneider Atlas розетка с заземлением 16AX базальт", priceAmd: 2500 },
  ],
};

export const SAMPLE_PROJECTS = [
  { slug: "unique", name: "Յունիք" },
  { slug: "bank-lobby", name: "Банковский холл" },
  { slug: "dragon-motors-armenia", name: "Dragon Motors Armenia" },
  { slug: "elnario-showroom", name: "Elnario, зал украшений" },
  { slug: "master-klas-restoran", name: "Ресторан Master Class" },
];

export const SAMPLE_BRANDS = [
  "Electrica",
  "EL Light",
  "Arlight",
  "Gauss",
  "Промрукав",
  "KM Профиль",
  "KBT",
  "Varton",
  "Lifud",
];
