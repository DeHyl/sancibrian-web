import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import SapzurroClient from "./SapzurroClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isEs = locale === "es";

  const title = isEs
    ? "Sapzurro, Colombia — El Secreto Mejor Guardado del Caribe | Cabaña Sancibrian"
    : "Sapzurro, Colombia — The Caribbean's Best-Kept Secret | Cabaña Sancibrian";

  const description = dict.sapzurro.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/sapzurro`,
      languages: { en: "/en/sapzurro", es: "/es/sapzurro" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_CONFIG.url}/${locale}/sapzurro`,
      images: [
        {
          url: `${SITE_CONFIG.url}/images/sapzurro/aerial-border.jpg`,
          width: 1200,
          height: 630,
          alt: dict.sapzurro.title,
        },
      ],
    },
  };
}

export default function SapzurroPage() {
  return <SapzurroClient />;
}
