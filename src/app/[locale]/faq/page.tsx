import { getTranslations } from "next-intl/server";
import { PendingPage } from "@/components/pending-page";

export default async function FaqPage() {
  const t = await getTranslations("footer");
  return <PendingPage title={t("faq")} />;
}
