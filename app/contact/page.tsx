"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, BOOKING_CTA } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-3.jpg"
            alt="Contact Cabaña Sancibrian"
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
              Get in Touch
            </h1>
            <p className="text-2xl md:text-3xl text-arena font-medium text-shadow">
              We're here to help plan your perfect getaway
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
              Ways to Reach Us
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
                  WhatsApp
                </h3>
                <p className="text-oscuro mb-4">
                  Fastest response time. Message us anytime!
                </p>
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
                  Email
                </h3>
                <p className="text-oscuro mb-4">
                  For detailed inquiries and questions
                </p>
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
                  Instagram
                </h3>
                <p className="text-oscuro mb-4">
                  See our latest photos and stories
                </p>
                <p className="text-bronze font-medium">{CONTACT.instagram}</p>
              </motion.a>
            </div>

            {/* Social Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <a
                href={CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  📘
                </div>
                <p className="text-oscuro font-medium text-sm">Facebook</p>
              </a>

              <a
                href={CONTACT.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  🎵
                </div>
                <p className="text-oscuro font-medium text-sm">TikTok</p>
              </a>

              <a
                href={CONTACT.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  🏠
                </div>
                <p className="text-oscuro font-medium text-sm">Airbnb</p>
              </a>

              <a
                href={CONTACT.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  🌐
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
              Before You Contact Us
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <h3 className="text-xl font-bold text-caribe mb-3">
                  What information should I include in my inquiry?
                </h3>
                <ul className="space-y-2 text-oscuro">
                  <li className="flex items-start gap-2">
                    <span className="text-bronze mt-1">•</span>
                    <span>Check-in and check-out dates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bronze mt-1">•</span>
                    <span>Number of guests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bronze mt-1">•</span>
                    <span>Any special requests or questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bronze mt-1">•</span>
                    <span>Your preferred contact method</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-arena">
                <h3 className="text-xl font-bold text-caribe mb-3">
                  How quickly will you respond?
                </h3>
                <p className="text-oscuro">
                  We typically respond to WhatsApp messages within 2-4 hours during
                  business hours. Emails are answered within 24 hours. We speak both
                  English and Spanish fluently.
                </p>
              </div>

              <div className="pt-6 border-t border-arena">
                <h3 className="text-xl font-bold text-caribe mb-3">
                  What's your cancellation policy?
                </h3>
                <p className="text-oscuro">
                  Free cancellation up to 7 days before check-in. Different policies may
                  apply on Airbnb and Booking.com. Contact us directly for the most
                  flexible rates.
                </p>
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
              Ready to Book?
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
            </div>

            <p className="text-sm text-perla/90">
              💡 {BOOKING_CTA.directBookingNote}
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
