"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SAPZURRO_INFO, CONTACT } from "@/lib/constants";

export default function SapzurroPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sapzurro/aerial-border.jpg"
            alt="Aerial view of Sapzurro at the Colombia-Panama border"
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
              {SAPZURRO_INFO.title}
            </h1>
            <p className="text-2xl md:text-3xl text-arena font-medium text-shadow">
              {SAPZURRO_INFO.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-perla">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-oscuro leading-relaxed mb-8">
              {SAPZURRO_INFO.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-arena-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              What Makes Sapzurro Special
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SAPZURRO_INFO.highlights.map((highlight, index) => (
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
                    <p className="text-oscuro text-lg">{highlight}</p>
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
              Discover Sapzurro
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { url: "/images/sapzurro/beach-1.jpg", alt: "Main beach" },
                { url: "/images/sapzurro/beach-2.jpg", alt: "Crystal waters" },
                { url: "/images/sapzurro/beach-3.jpg", alt: "Beach view" },
                { url: "/images/sapzurro/beach-4.jpg", alt: "Tropical paradise" },
                { url: "/images/sapzurro/path.jpg", alt: "Jungle path" },
                { url: "/images/hero/hero-2.jpg", alt: "Sunset" },
              ].map((image, index) => (
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

      {/* Strategic Location for Sailors */}
      <section className="py-20 bg-gradient-to-br from-caribe to-caribe-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
              Perfect Stopover for Sailors
            </h2>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <p className="text-xl leading-relaxed mb-6">
                {SAPZURRO_INFO.strategicLocation}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚓</div>
                  <p className="font-bold">Safe Harbor</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🛜</div>
                  <p className="font-bold">Starlink WiFi</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🇨🇴</div>
                  <p className="font-bold">Immigration Available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Life */}
      <section className="py-20 bg-arena-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              Local Life in Sapzurro
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-caribe mb-4">
                  The Village
                </h3>
                <ul className="space-y-3 text-oscuro">
                  <li className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>Population: ~500 friendly locals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>No cars - walk or boat only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>Small shops and restaurants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>Traditional fishing village</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>Welcoming community</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-caribe mb-4">
                  Nature & Wildlife
                </h3>
                <ul className="space-y-3 text-oscuro">
                  <li className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>Darién jungle biodiversity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>Tropical birds and wildlife</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>Coral reefs for snorkeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>Sea turtles (seasonal)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bronze text-xl mt-1">•</span>
                    <span>Pristine beaches</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-perla">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro mb-4">
              Ready to Explore Sapzurro?
            </h2>
            <p className="text-xl text-oscuro mb-8">
              Book your stay at Cabaña Sancibrian and discover this hidden paradise
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-5 shadow-2xl"
              >
                Book Your Stay
              </a>
              <Link
                href="/activities"
                className="btn-outline text-lg px-10 py-5"
              >
                See Activities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-arena-light text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-caribe hover:text-bronze transition-colors font-medium"
        >
          <span>←</span> Back to Home
        </Link>
      </section>
    </div>
  );
}
