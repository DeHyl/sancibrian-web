import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import ContactClient from "./ContactClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isEs = locale === "es";

  const title = isEs
    ? "Reserva y Contáctanos | Cabaña Sancibrian Sapzurro"
    : "Book Your Stay & Contact Us | Cabaña Sancibrian Sapzurro";

  const description = isEs
    ? "Contáctanos por WhatsApp, email, Airbnb o Booking.com. Respondemos rápido y te ayudamos a planear tu estadía perfecta en Sapzurro, Colombia."
    : "Contact us via WhatsApp, email, Airbnb or Booking.com. We respond fast and help you plan your perfect stay in Sapzurro, Colombia.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { en: "/en/contact", es: "/es/contact" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${SITE_CONFIG.url}/${locale}/contact`,
      images: [
        {
          url: `${SITE_CONFIG.url}/images/hero/hero-1.jpg`,
          width: 1200,
          height: 630,
          alt: dict.contact.heroTitle,
        },
      ],
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
