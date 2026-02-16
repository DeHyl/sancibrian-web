"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { useDictionary } from "@/lib/i18n/DictionaryProvider";

export default function BookingCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { dict } = useDictionary();
  const t = dict.booking;

  return (
    <section ref={ref} className="section-container bg-gradient-tropical text-perla">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-perla mb-4">{t.title}</h2>
        <p className="text-2xl font-display text-bronze mb-6">
          {t.subtitle}
        </p>
        <p className="text-lg text-arena-light/90 mb-12">
          {t.description}
        </p>

        {/* Booking Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* WhatsApp */}
          <motion.a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-9 h-9 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-caribe mb-2">
              {t.whatsappText}
            </h3>
            <p className="text-sm text-oscuro/60">{t.bestRates}</p>
            <div className="mt-4 bg-bronze/10 text-bronze text-xs font-semibold px-3 py-1 rounded-full">
              {t.directBookingNote}
            </div>
          </motion.a>

          {/* Airbnb */}
          <motion.a
            href={CONTACT.airbnb}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-hidden">
              <Image src="/images/airbnb.png" alt="Airbnb" width={64} height={64} className="object-contain" />
            </div>
            <h3 className="text-xl font-display font-bold text-caribe mb-2">
              {t.airbnbText}
            </h3>
            <p className="text-sm text-oscuro/60">{t.readReviews}</p>
          </motion.a>

          {/* Booking.com */}
          <motion.a
            href={CONTACT.booking}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-hidden">
              <Image src="/images/booking.png" alt="Booking.com" width={64} height={64} className="object-contain" />
            </div>
            <h3 className="text-xl font-display font-bold text-caribe mb-2">
              {t.bookingText}
            </h3>
            <p className="text-sm text-oscuro/60">{t.flexibleCancellation}</p>
          </motion.a>
        </div>

        {/* Crypto Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
            <svg className="w-5 h-5" viewBox="0 0 397.7 311.7" fill="none">
              <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill="url(#solana-a)"/>
              <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill="url(#solana-b)"/>
              <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill="url(#solana-c)"/>
              <defs>
                <linearGradient id="solana-a" x1="0" y1="0" x2="397.7" y2="311.7" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9945FF"/><stop offset="1" stopColor="#14F195"/>
                </linearGradient>
                <linearGradient id="solana-b" x1="0" y1="0" x2="397.7" y2="311.7" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9945FF"/><stop offset="1" stopColor="#14F195"/>
                </linearGradient>
                <linearGradient id="solana-c" x1="0" y1="0" x2="397.7" y2="311.7" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9945FF"/><stop offset="1" stopColor="#14F195"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-sm font-medium text-perla">{t.cryptoNote}</span>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-arena-light/80 text-sm"
        >
          <p>
            {t.questionsEmail}{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-bronze hover:underline"
            >
              {CONTACT.email}
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
