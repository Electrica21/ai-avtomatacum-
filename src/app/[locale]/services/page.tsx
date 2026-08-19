import { useTranslations } from "next-intl";

const SERVICE_KEYS = [
  "powderCoating",
  "repair",
  "profileCutting",
  "metalworking",
] as const;

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">{t("title")}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICE_KEYS.map((key) => (
            <div
              key={key}
              className="rounded-xl border border-gray-light/40 p-8"
            >
              <h2 className="text-xl font-semibold text-navy">
                {t(`${key}.title`)}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-dark">
                {t(`${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
