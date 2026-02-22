import type { Metadata } from "next";
import { SITE_CONFIG, CONTACT } from "@/lib/constants";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { DictionaryProvider } from "@/lib/i18n/DictionaryProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GoogleAnalytics } from "@next/third-parties/google";

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE_CONFIG.name,
    description: dict.site.description,
    url: `${SITE_CONFIG.url}/${locale}`,
    telephone: CONTACT.whatsapp,
    email: CONTACT.email,
    image: `${SITE_CONFIG.url}/images/hero/hero-1.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sapzurro",
      addressRegion: "Chocó",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.6614,
      longitude: -77.3636,
    },
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Starlink WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Electricity", value: true },
      { "@type": "LocationFeatureSpecification", name: "Netflix", value: true },
      { "@type": "LocationFeatureSpecification", name: "Beachfront", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Bathtub", value: true },
      { "@type": "LocationFeatureSpecification", name: "Café & Coworking", value: true },
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
