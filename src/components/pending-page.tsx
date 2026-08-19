import { getTranslations } from "next-intl/server";

export async function PendingPage({ title }: { title: string }) {
  const t = await getTranslations("common");

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-gray-dark">{t("contentPending")}</p>
      </div>
    </>
  );
}
