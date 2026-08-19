import { getTranslations } from "next-intl/server";
import { PendingPage } from "@/components/pending-page";

export default async function TermsPage() {
  const t = await getTranslations("footer");
  return <PendingPage title={t("terms")} />;
}
