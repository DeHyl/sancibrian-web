"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CABIN_IMAGES, CONTACT } from "@/lib/constants";
import { useDictionary } from "@/lib/i18n/DictionaryProvider";

export default function CabinPage() {
  const { dict, locale } = useDictionary();
  const t = dict.cabin;
  const booking = dict.booking;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cabin/exterior.jpg"
            alt={t.title}
            fill
            className="object-cover"
            priority
          />
          <div className="gradient-overlay" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-perla text-shadow-lg mb-4">
              {t.title}
            </h1>
            <p className="text-2xl md:text-3xl text-arena font-medium text-shadow">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cabin Specifications */}
      <section className="py-20 bg-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="text-5xl font-display font-bold text-caribe mb-2">
                {t.capacity}
              </div>
              <div className="text-oscuro font-medium">{t.capacityLabel}</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="text-5xl font-display font-bold text-caribe mb-2">
                {t.size}
              </div>
              <div className="text-oscuro font-medium">{t.sizeLabel}</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="text-5xl font-display font-bold text-caribe mb-2">
                {t.beds}
              </div>
              <div className="text-oscuro font-medium">{t.bedsLabel}</div>
            </div>
          </motion.div>

          {/* Amenities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              {t.whatsIncluded}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {t.amenities.map((amenity: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <span className="text-bronze text-2xl mt-1 flex-shrink-0">•</span>
                  <span className="text-oscuro font-medium">{amenity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-arena-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              {t.gallery}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CABIN_IMAGES.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="py-20 bg-perla">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-8">
              {t.goodToKnow}
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-oscuro mb-4">{t.notIncludedTitle}</h3>
              <ul className="space-y-3 text-oscuro">
                {t.notIncluded.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-arena">
                <h3 className="text-xl font-bold text-oscuro mb-4">{t.houseRulesTitle}</h3>
                <ul className="space-y-3 text-oscuro">
                  {t.houseRules.map((rule: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-caribe text-xl mt-1">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-oscuro text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3">
              {t.pricing.title}
            </h2>
            <p className="text-center text-perla/70 mb-12">{t.pricing.subtitle}</p>

            {/* Season cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* High Season */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">☀️</span>
                  <div>
                    <div className="text-lg font-bold text-perla">{t.pricing.highSeason}</div>
                    <div className="text-sm text-perla/60">{t.pricing.highSeasonDates}</div>
                  </div>
                </div>
                <div className="text-5xl font-display font-bold text-bronze mb-1">
                  {t.pricing.highSeasonPrice}
                </div>
                <div className="text-sm text-perla/70 mb-1">{t.pricing.currency}</div>
                <div className="text-sm text-perla/50">{t.pricing.highSeasonUSD}</div>
              </motion.div>

              {/* Low Season */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <div className="text-lg font-bold text-perla">{t.pricing.lowSeason}</div>
                    <div className="text-sm text-perla/60">{t.pricing.lowSeasonDates}</div>
                  </div>
                </div>
                <div className="text-5xl font-display font-bold text-arena mb-1">
                  {t.pricing.lowSeasonPrice}
                </div>
                <div className="text-sm text-perla/70 mb-1">{t.pricing.currency}</div>
                <div className="text-sm text-perla/50">{t.pricing.lowSeasonUSD}</div>
              </motion.div>
            </div>

            {/* What's included */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <h3 className="text-lg font-bold text-perla mb-4">{t.pricing.includes}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.pricing.includesList.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-perla/80">
                    <span className="text-bronze">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note + direct booking CTA */}
            <p className="text-center text-perla/60 text-sm mb-6">{t.pricing.note}</p>
            <div className="text-center">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-bronze hover:bg-bronze/90 text-white font-bold px-10 py-4 rounded-full transition-colors text-lg shadow-lg"
              >
                {t.pricing.bookDirect}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-gradient-to-br from-caribe to-caribe-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {booking.title}
            </h2>
            <p className="text-xl mb-8">{booking.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-white !text-caribe hover:!bg-perla text-lg px-10 py-5 shadow-2xl"
              >
                {booking.whatsappText}
              </a>
              <a
                href={CONTACT.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !border-white !text-white hover:!bg-white/10 text-lg px-10 py-5 inline-flex items-center gap-3"
              >
                <Image src="/images/airbnb.png" alt="" width={28} height={28} className="object-contain" />
                {booking.airbnbText}
              </a>
              <a
                href={CONTACT.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !border-white !text-white hover:!bg-white/10 text-lg px-10 py-5 inline-flex items-center gap-3"
              >
                <Image src="/images/booking.png" alt="" width={28} height={28} className="rounded object-contain" />
                {booking.bookingText}
              </a>
            </div>

            <p className="text-sm text-perla/90 mb-3">
              {booking.directBookingNote}
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <svg className="w-4 h-4" viewBox="0 0 397.7 311.7" fill="none">
                <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill="url(#sol-a)"/>
                <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill="url(#sol-b)"/>
                <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill="url(#sol-c)"/>
                <defs>
                  <linearGradient id="sol-a" x1="0" y1="0" x2="397.7" y2="311.7" gradientUnits="userSpaceOnUse"><stop stopColor="#9945FF"/><stop offset="1" stopColor="#14F195"/></linearGradient>
                  <linearGradient id="sol-b" x1="0" y1="0" x2="397.7" y2="311.7" gradientUnits="userSpaceOnUse"><stop stopColor="#9945FF"/><stop offset="1" stopColor="#14F195"/></linearGradient>
                  <linearGradient id="sol-c" x1="0" y1="0" x2="397.7" y2="311.7" gradientUnits="userSpaceOnUse"><stop stopColor="#9945FF"/><stop offset="1" stopColor="#14F195"/></linearGradient>
                </defs>
              </svg>
              <span className="text-xs font-medium text-perla/90">{booking.cryptoNote}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-perla text-center">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-caribe hover:text-bronze transition-colors font-medium"
        >
          <span>←</span> {dict.common.backToHome}
        </Link>
      </section>
    </div>
  );
}
