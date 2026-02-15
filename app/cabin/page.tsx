"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CABIN_SPECS, CONTACT, BOOKING_CTA } from "@/lib/constants";

export default function CabinPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cabin/exterior.jpg"
            alt="The Captain's Cabin"
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
              {CABIN_SPECS.title}
            </h1>
            <p className="text-2xl md:text-3xl text-arena font-medium text-shadow">
              {CABIN_SPECS.subtitle}
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
                {CABIN_SPECS.capacity}
              </div>
              <div className="text-oscuro font-medium">Maximum Capacity</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="text-5xl font-display font-bold text-caribe mb-2">
                {CABIN_SPECS.size}
              </div>
              <div className="text-oscuro font-medium">Total Space</div>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="text-5xl font-display font-bold text-caribe mb-2">
                {CABIN_SPECS.beds}
              </div>
              <div className="text-oscuro font-medium">Sleeping Arrangements</div>
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
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {CABIN_SPECS.amenities.map((amenity, index) => (
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
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CABIN_SPECS.images.map((image, index) => (
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
              Good to Know
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-oscuro mb-4">What's NOT Included:</h3>
              <ul className="space-y-3 text-oscuro">
                <li className="flex items-start gap-3">
                  <span className="text-bronze text-xl mt-1">•</span>
                  <span>Meals (available for purchase at Hangar Café)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bronze text-xl mt-1">•</span>
                  <span>Transportation to/from Sapzurro (we can help coordinate)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bronze text-xl mt-1">•</span>
                  <span>Activities and tours (available locally)</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-arena">
                <h3 className="text-xl font-bold text-oscuro mb-4">House Rules:</h3>
                <ul className="space-y-3 text-oscuro">
                  <li className="flex items-start gap-3">
                    <span className="text-caribe text-xl mt-1">•</span>
                    <span>Check-in: 3:00 PM / Check-out: 11:00 AM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-caribe text-xl mt-1">•</span>
                    <span>Quiet hours: 10:00 PM - 7:00 AM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-caribe text-xl mt-1">•</span>
                    <span>No smoking inside the cabin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-caribe text-xl mt-1">•</span>
                    <span>Pets welcome with prior approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-caribe text-xl mt-1">•</span>
                    <span>Please use biodegradable products to protect our reefs</span>
                  </li>
                </ul>
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
              {BOOKING_CTA.title}
            </h2>
            <p className="text-xl mb-8">{BOOKING_CTA.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-white !text-caribe hover:!bg-perla text-lg px-10 py-5 shadow-2xl"
              >
                {BOOKING_CTA.whatsappText}
              </a>
              <a
                href={CONTACT.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !border-white !text-white hover:!bg-white/10 text-lg px-10 py-5"
              >
                {BOOKING_CTA.airbnbText}
              </a>
              <a
                href={CONTACT.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !border-white !text-white hover:!bg-white/10 text-lg px-10 py-5"
              >
                {BOOKING_CTA.bookingText}
              </a>
            </div>

            <p className="text-sm text-perla/90">
              {BOOKING_CTA.directBookingNote}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-perla text-center">
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
