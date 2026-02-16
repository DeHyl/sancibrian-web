"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CAFE_IMAGES, CONTACT } from "@/lib/constants";
import { useDictionary } from "@/lib/i18n/DictionaryProvider";

export default function CafePage() {
  const { dict, locale } = useDictionary();
  const t = dict.cafe;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cafe/exterior-1.avif"
            alt="Hangar Café"
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

      {/* Description */}
      <section className="py-20 bg-perla">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-oscuro leading-relaxed mb-8">
              {t.description}
            </p>
            <div className="inline-block bg-bronze/10 px-6 py-3 rounded-full">
              <p className="text-bronze font-bold text-lg">
                {t.open247}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-arena-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              {t.whatWeOffer}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.offerings.map((offering: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-bronze text-2xl mt-1 flex-shrink-0">•</span>
                    <span className="text-oscuro text-lg font-medium">{offering}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              {t.theSpace}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CAFE_IMAGES.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                >
                  <Image
                    src={image}
                    alt={`Hangar Café ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-arena-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              {t.menuHighlights}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="/images/food/cappuccino.webp" alt="Cappuccino" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-caribe mb-2">{t.premiumCoffee}</h3>
                <p className="text-oscuro">{t.premiumCoffeeDesc}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="/images/food/breakfast.webp" alt="Breakfast" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-caribe mb-2">{t.freshBreakfast}</h3>
                <p className="text-oscuro">{t.freshBreakfastDesc}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="/images/food/arepas.webp" alt="Arepas" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-caribe mb-2">{t.colombianArepas}</h3>
                <p className="text-oscuro">{t.colombianArepasDesc}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src="/images/food/fruit.webp" alt="Fresh Fruit" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-caribe mb-2">{t.tropicalFruits}</h3>
                <p className="text-oscuro">{t.tropicalFruitsDesc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CoWorking Features */}
      <section className="py-20 bg-perla">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              {t.perfectForRemoteWork}
            </h2>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-caribe mb-4">{t.workAmenities}</h3>
                  <ul className="space-y-3">
                    {t.workAmenitiesList.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-bronze text-xl mt-1">•</span>
                        <span className="text-oscuro">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-caribe mb-4">{t.comfortFeatures}</h3>
                  <ul className="space-y-3">
                    {t.comfortFeaturesList.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-bronze text-xl mt-1">•</span>
                        <span className="text-oscuro">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-arena text-center">
                <p className="text-oscuro text-lg italic">
                  &ldquo;{t.workQuote}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-caribe to-caribe-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t.experienceCta}
            </h2>
            <p className="text-xl mb-8">
              {t.experienceCtaDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-white !text-caribe hover:!bg-perla text-lg px-10 py-5 shadow-2xl"
              >
                {dict.booking.whatsappText}
              </a>
              <Link
                href={`/${locale}/cabin`}
                className="btn-outline !border-white !text-white hover:!bg-white/10 text-lg px-10 py-5"
              >
                {t.seeTheCabin}
              </Link>
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
