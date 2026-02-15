import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Cabaña Sancibrian",
  description: "Contact Cabaña Sancibrian for reservations and inquiries. WhatsApp, email, or social media. We respond quickly in English & Spanish.",
  keywords: [
    "contact Cabaña Sancibrian",
    "Sapzurro reservations",
    "book Sapzurro",
    "Cabaña Sancibrian WhatsApp",
    "contacto Sapzurro",
    "reservas Sapzurro",
  ],
  openGraph: {
    title: "Contact Us | Cabaña Sancibrian",
    description: "Get in touch for reservations and inquiries. Quick response via WhatsApp or email.",
    url: `${SITE_CONFIG.url}/contact`,
    images: [
      {
        url: "/images/hero/hero-3.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Cabaña Sancibrian",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
