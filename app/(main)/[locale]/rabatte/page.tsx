import CategoriesPage from "../kategorien/page";
import { generateSwissMetadata } from "@/lib/swissSeo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  return generateSwissMetadata({
    title: "Alle Rabatte & Angebote in der Schweiz",
    description: "Entdecke alle Rabatte, Vergünstigungen und Angebote für junge Leute und Studierende in der Schweiz.",
    path: "/rabatte",
    locale,
  });
}

export default CategoriesPage;
