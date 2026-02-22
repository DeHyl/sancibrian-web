import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book & Contact Cabaña Sancibrian | Sapzurro, Colombia",
  description:
    "Reserve Cabaña Sancibrian in Sapzurro by WhatsApp, Airbnb or Booking.com. Best rate guaranteed with direct booking. Fast response in English & Spanish.",
  keywords: [
    "reservar Cabaña Sancibrian",
    "book Sapzurro Colombia",
    "contact Cabaña Sancibrian",
    "Cabaña Sancibrian WhatsApp",
    "Sapzurro reservations",
    "reservas Sapzurro hospedaje",
    "contacto Sancibrian Sapzurro",
    "direct booking Sapzurro",
  ],
  openGraph: {
    title: "Book & Contact Cabaña Sancibrian | Sapzurro, Colombia",
    description:
      "Reserve via WhatsApp, Airbnb or Booking.com. Best rate with direct booking. Fast response in English & Spanish.",
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
