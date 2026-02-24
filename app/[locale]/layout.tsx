import type { Metadata } from "next";
import { SITE_CONFIG, CONTACT } from "@/lib/constants";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { DictionaryProvider } from "@/lib/i18n/DictionaryProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GoogleAnalytics } from "@next/third-parties/google";

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return {
    title: dict.site.title,
    description: dict.site.description,
    keywords: SITE_CONFIG.keywords,
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_CO" : "en_US",
      url: `${SITE_CONFIG.url}/${locale}`,
      title: dict.site.title,
      description: dict.site.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.site.title,
      description: dict.site.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const isEs = locale === "es";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_CONFIG.name,
    description: dict.site.description,
    url: `${SITE_CONFIG.url}/${locale}`,
    telephone: CONTACT.whatsapp,
    email: CONTACT.email,
    image: [
      `${SITE_CONFIG.url}/images/hero/hero-1.jpg`,
      `${SITE_CONFIG.url}/images/cabin/cabin-night.jpg`,
      `${SITE_CONFIG.url}/images/cabin/facade-front.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Playa Sapzurro",
      addressLocality: "Sapzurro",
      addressRegion: "Chocó",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.6614,
      longitude: -77.3636,
    },
    hasMap: "https://maps.google.com/?q=8.6614,-77.3636",
    priceRange: "$$",
    checkinTime: "15:00",
    checkoutTime: "11:00",
    numberOfRooms: 1,
    petsAllowed: false,
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "10",
      reviewCount: "2",
      bestRating: "10",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Raul" },
        datePublished: "2021-01-17",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "10",
          bestRating: "10",
        },
        reviewBody: isEs
          ? "El lugar es increíble — no hay una acomodación como esta en Sapzurro. Muy cómoda, con todo lo necesario y el servicio es muy bueno. ¡Muy recomendado!"
          : "The place is amazing — there is no accommodation like this in Sapzurro. Very comfortable, with everything you need and excellent service. Highly recommended.",
        publisher: { "@type": "Organization", name: "Booking.com" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Montoya" },
        datePublished: "2021-01-09",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "10",
          bestRating: "10",
        },
        reviewBody: isEs
          ? "Muy agradable, cómodo, tranquilo y en una excelente ubicación. El señor que atiende todo es muy profesional. ¡100% recomendado!"
          : "Very nice, comfortable, quiet, and in an excellent location. The host is attentive to everything and completely professional. 100% recommended.",
        publisher: { "@type": "Organization", name: "Booking.com" },
      },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Starlink WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Electricity (BatX Backup)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Netflix", value: true },
      { "@type": "LocationFeatureSpecification", name: "Amazon Alexa", value: true },
      { "@type": "LocationFeatureSpecification", name: "Beachfront", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Herbal Bathtub", value: true },
      { "@type": "LocationFeatureSpecification", name: "Café & Coworking Space", value: true },
      { "@type": "LocationFeatureSpecification", name: "San Blas Islands Access", value: true },
    ],
    sameAs: [
      CONTACT.instagramUrl,
      CONTACT.facebookUrl,
      CONTACT.tiktokUrl,
      CONTACT.airbnb,
      CONTACT.booking,
    ],
  };

  return (
    <DictionaryProvider dict={dict} locale={locale as Locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </DictionaryProvider>
  );
}
