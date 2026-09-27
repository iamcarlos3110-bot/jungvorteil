import { redirect } from "next/navigation";

export default async function Under25RedirectPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  redirect(`/${locale}/unter-25`);
}

