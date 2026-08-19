import { useTranslations } from "next-intl";
import { BRANCHES, CALL_CENTER, EMAILS } from "@/lib/site-data";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl font-bold sm:text-4xl">{t("title")}</h1>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-2">
        {/* Form — presentational only for now; wiring a submit endpoint
            (email delivery / CRM) is a follow-up once that decision is made. */}
        <form className="flex flex-col gap-4">
          <input
            name="name"
            placeholder={t("form.name")}
            className="rounded-lg border border-gray-light/50 px-4 py-3 text-sm"
          />
          <input
            name="email"
            type="email"
            placeholder={t("form.email")}
            className="rounded-lg border border-gray-light/50 px-4 py-3 text-sm"
          />
          <input
            name="phone"
            type="tel"
            placeholder={t("form.phone")}
            className="rounded-lg border border-gray-light/50 px-4 py-3 text-sm"
          />
          <textarea
            name="comment"
            placeholder={t("form.comment")}
            rows={5}
            className="rounded-lg border border-gray-light/50 px-4 py-3 text-sm"
          />
          <button
            type="submit"
            className="w-fit rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {t("form.submit")}
          </button>
        </form>

        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-dark">
              {t("callCenter")}
            </h2>
            <a
              href={`tel:${CALL_CENTER.replace(/\s/g, "")}`}
              className="mt-2 block text-2xl font-semibold text-navy"
            >
              {CALL_CENTER}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-dark">
              {t("emailsTitle")}
            </h2>
            <ul className="mt-2 flex flex-col gap-1 text-sm">
              <li>
                <a href={`mailto:${EMAILS.sales}`} className="text-navy">
                  {EMAILS.sales}
                </a>{" "}
                <span className="text-gray-dark">— {t("emailSales")}</span>
              </li>
              <li>
                <a href={`mailto:${EMAILS.hr}`} className="text-navy">
                  {EMAILS.hr}
                </a>{" "}
                <span className="text-gray-dark">— {t("emailHr")}</span>
              </li>
              <li>
                <a href={`mailto:${EMAILS.marketing}`} className="text-navy">
                  {EMAILS.marketing}
                </a>{" "}
                <span className="text-gray-dark">— {t("emailMarketing")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-dark">
              {t("branchesTitle")}
            </h2>
            <ul className="mt-2 flex flex-col gap-1 text-sm text-navy">
              {BRANCHES.map((branch) => (
                <li key={branch}>{branch}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
