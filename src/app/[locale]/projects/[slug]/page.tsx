import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SAMPLE_PROJECTS } from "@/lib/placeholder-data";

export default async function ProjectDetailPage({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { slug } = await params;
  const project = SAMPLE_PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  const t = await getTranslations("common");

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">{project.name}</h1>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-gray-dark">{t("contentPending")}</p>
      </div>
    </>
  );
}
