"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { useDictionary } from "@/lib/i18n/DictionaryProvider";

export default function ActivitiesPage() {
  const { dict, locale } = useDictionary();
  const t = dict.activities;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sapzurro/beach-2.jpg"
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

      {/* Introduction */}
      <section className="py-16 bg-perla">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-oscuro leading-relaxed"
          >
            {t.intro}
          </motion.p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-arena-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.items.map((activity: { title: string; description: string }, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <h3 className="text-2xl font-display font-bold text-caribe mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-oscuro leading-relaxed">
                    {activity.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-20 bg-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              {t.signatureTitle}
            </h2>

            <div className="space-y-12">
              {/* La Miel Hike */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image src="/images/sapzurro/path.jpg" alt="Hike to La Miel" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-caribe mb-4">
                    {t.items[1]?.title}
                  </h3>
                  <p className="text-lg text-oscuro mb-4">
                    {t.items[1]?.description}
                  </p>
                </div>
              </div>

              {/* Snorkeling */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-display font-bold text-caribe mb-4">
                    {t.items[0]?.title}
                  </h3>
                  <p className="text-lg text-oscuro mb-4">
                    {t.items[0]?.description}
                  </p>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
                  <Image src="/images/sapzurro/beach-3.jpg" alt="Snorkeling" fill className="object-cover" />
                </div>
              </div>

              {/* Kayaking */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image src="/images/sapzurro/beach-4.jpg" alt="Kayaking" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-caribe mb-4">
                    {t.items[2]?.title}
                  </h3>
                  <p className="text-lg text-oscuro mb-4">
                    {t.items[2]?.description}
                  </p>
                </div>
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
              {t.startAdventure}
            </h2>
            <p className="text-xl mb-8">
              {t.startAdventureDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-white !text-caribe hover:!bg-perla text-lg px-10 py-5 shadow-2xl"
              >
                {t.bookYourStay}
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
