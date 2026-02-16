"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { useDictionary } from "@/lib/i18n/DictionaryProvider";

export default function ContactPage() {
  const { dict, locale } = useDictionary();
  const t = dict.contact;
  const booking = dict.booking;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-3.jpg"
            alt={t.heroTitle}
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
              {t.heroTitle}
            </h1>
            <p className="text-2xl md:text-3xl text-arena font-medium text-shadow">
              {t.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-perla">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              {t.waysToReachUs}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* WhatsApp */}
              <motion.a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  💬
                </div>
                <h3 className="text-2xl font-display font-bold text-caribe mb-2">
                  {t.whatsappTitle}
                </h3>
                <p className="text-oscuro mb-4">{t.whatsappDesc}</p>
                <p className="text-bronze font-medium">{CONTACT.whatsapp}</p>
              </motion.a>

              {/* Email */}
              <motion.a
                href={`mailto:${CONTACT.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <h3 className="text-2xl font-display font-bold text-caribe mb-2">
                  {t.emailTitle}
                </h3>
                <p className="text-oscuro mb-4">{t.emailDesc}</p>
                <p className="text-bronze font-medium">{CONTACT.email}</p>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  📷
                </div>
                <h3 className="text-2xl font-display font-bold text-caribe mb-2">
                  {t.instagramTitle}
                </h3>
                <p className="text-oscuro mb-4">{t.instagramDesc}</p>
                <p className="text-bronze font-medium">{CONTACT.instagram}</p>
              </motion.a>
            </div>

            {/* Social Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <a href={CONTACT.facebookUrl} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📘</div>
                <p className="text-oscuro font-medium text-sm">Facebook</p>
              </a>
              <a href={CONTACT.tiktokUrl} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🎵</div>
                <p className="text-oscuro font-medium text-sm">TikTok</p>
              </a>
              <a href={CONTACT.airbnb} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center group">
                <div className="mb-2 group-hover:scale-110 transition-transform flex justify-center">
                  <Image src="/images/airbnb.png" alt="Airbnb" width={40} height={40} className="object-contain" />
                </div>
                <p className="text-oscuro font-medium text-sm">Airbnb</p>
              </a>
              <a href={CONTACT.booking} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center group">
                <div className="mb-2 group-hover:scale-110 transition-transform flex justify-center">
                  <Image src="/images/booking.png" alt="Booking.com" width={40} height={40} className="rounded object-contain" />
                </div>
                <p className="text-oscuro font-medium text-sm">Booking.com</p>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-arena-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              {t.beforeContact}
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <h3 className="text-xl font-bold text-caribe mb-3">{t.whatInfoTitle}</h3>
                <ul className="space-y-2 text-oscuro">
                  {t.whatInfoItems.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-bronze mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-arena">
                <h3 className="text-xl font-bold text-caribe mb-3">{t.responseTitle}</h3>
                <p className="text-oscuro">{t.responseText}</p>
              </div>

              <div className="pt-6 border-t border-arena">
                <h3 className="text-xl font-bold text-caribe mb-3">{t.cancellationTitle}</h3>
                <p className="text-oscuro">{t.cancellationText}</p>
              </div>
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
              {t.readyToBook}
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

            <p className="text-sm text-perla/90 mb-3">{booking.directBookingNote}</p>
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
