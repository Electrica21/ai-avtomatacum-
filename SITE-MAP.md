# Electrica — Current Site Structure Reference

Source: `https://electricagroup.am` (live), rendered with Playwright on 2026-08-19.
Note: `electrica.am` (bare domain) is currently a **parked domain**, not the live site.
Current stack (existing site): Nuxt (Vue) + Cloudflare, agency credit "Designed by Brandon / Made by S2S" (s2s.am).

## Languages
Armenian only was observed in rendered content during this scan (no AM/RU/EN switcher was captured yet —
worth re-checking with the language selector icon in the header before assuming AM-only).

## Global nav / header
- Logo (Electrica Group)
- Search, Compare (`/compare`), Wishlist (`/wishlist`), Cart, Account, Language/settings icon
- Category mega-menu:
  - Լուսատեխնիկա — Lighting (`/product-category/lusavorutyun/`) — **4,114 products**
  - Վարդակներ ԵՎ Անջատիչներ — Sockets & Switches (`/product-category/vardakner-ev-anjatichner/sockets-and-switches/`)
  - Էլեկտրոմոնտաժման պարագաներ — Electrical mounting accessories (`/product-category/montajman-paraganer/`)
- Full shop / catalog: `/shop/` — **8,392 products total**, paginated (350 pages)

## Homepage sections
1. Hero — full-width photo banner (office/interior shot)
2. "ՀԻՄՆԱԿԱՆ ՈՒՂՂՎԱԾՈՒԹՅՈՒՆՆԵՐ" (Main directions) — 3 image tiles: Lighting / Sockets & switches / Electrical mounting accessories
3. "ՆԱԽԱԳԾԵՐ" (Projects/portfolio) — case studies with client name + project name:
   - Յունիք (Unique)
   - Բանկի նախասրահ (Bank lobby)
   - Դրագոն Մոթորս Արմենիա (Dragon Motors Armenia)
   - Էլնարիո Զարդերի Սրահ (Elnario showroom)
   - Մաստեր Կլաս Ռեստորան (Master Class Restaurant)
4. "ԱՊՐԱՆՔՆԵՐ" (Products) — tabbed product grid: Best sellers / Our production / New arrivals, with SKU code, price (AMD/դրամ), name, "add to cart" button
5. Services teaser — "ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ" with 2 image tiles (Metalworking / Powder coating)
6. "ՆԵՐԿԱՅԱՑՎԱԾ ԲՐԵՆԴՆԵՐ" (Featured brands) — logo row: LiFud, INVI(?), electrica, arlight, gauss, KM Profil, + partial (Schneider?) — matches brand guide's partner list (Arlight, Gauss, Промрукав, KM Профиль, KBT, Varton, Lifud)

## Catalog / product listing pages (`/shop/`, `/product-category/*`)
Filters/tabs: Recommended · Discounted · Best sellers · New arrivals · Our production · All
Grid card: SKU code, price, product name, add-to-cart button. Paginated (numbered pages).
Product detail: `/product/{slug}/` (e.g. `/product/gauss-light-ufo-shade-120°-200w-5000k-1_10-030302/`)

## Services page (`/services/`)
Four services, each with a description paragraph:
- Փոշեներկում — Powder coating (recolor product housings on request)
- Վերանորոգում — Repair (in-house repair of fixtures, faster warranty/post-warranty service since most products are own-brand)
- Պրոֆիլների կտրում/հավաքում — Profile cutting/assembly (custom-length cutting, LED strip + driver assembly inside profiles)
- Մետաղամշակում — Metalworking (sheet metal & pipe cutting/welding/bending, fixture housing design/modification)

## Contact page (`/contact`)
- Contact form: Name, Email, Phone (Armenia +374 prefix), Comment → "Send"
- Call center: +374 55 20 09 02
- Emails: `sales@electricagroup.am` (pricing), `hr@electricagroup.am` (jobs), `marketing@electricagroup.am` (marketing/partnerships)
- 7 branch addresses (matches brand guide's "7 wholesale-retail warehouses"):
  1. Դավիթ Անհաղթ 8/1
  2. Ալեք Մանուկյան 8/1, 1-ին հարկ
  3. Կոտայքի մարզ, Առինջ Բ թաղամաս 1-ին փող. 17 14Ա
  4. Կոտայքի մարզ, Առինջ Բ թաղամաս 1-ին փող. 17 315Հ
  5. Ալեք Մանուկյան 8/1, 44 տարածք
  6. Վարդանանց փողոց, Խանութ 2
  7. Արշակունյանց պողոտա 17ա, տաղավար Դ-1/3

## Footer
- Nav: Contact, Instagram, Facebook, Youtube, Telegram
- Legal: FAQ (`/faq`), Privacy Policy (`/privacy-policy`), Terms & Conditions (`/terms-and-conditions`)
- Copyright "© 2026 Электрика", agency credits

## Social
- Instagram: instagram.com/electrica.group
- Facebook: facebook.com/electrika.am
- YouTube: youtube.com/@electricagroup
- Telegram: t.me/electricacommunity

## Open question — product data source
The catalog is backed by the site's own server (`/api/content` same-origin route, not a public API we can
call independently). To rebuild the catalog (8,392 SKUs) we need one of:
1. Export/dump of the current product database (ask the client/current agency S2S for a CSV/DB export), or
2. Admin/API credentials to the current backend, or
3. Start with a small hand-picked sample catalog and grow it, wiring the same page templates to real data later.
Not yet resolved — flagged to the user.
