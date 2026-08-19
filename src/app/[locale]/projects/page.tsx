import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SAMPLE_PROJECTS } from "@/lib/placeholder-data";

export default function ProjectsPage() {
  const t = useTranslations("home");

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">
            {t("projectsTitle")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
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
      </div>
    </>
  );
}
