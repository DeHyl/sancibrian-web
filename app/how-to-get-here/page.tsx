"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HOW_TO_GET_THERE, CONTACT } from "@/lib/constants";

export default function HowToGetHerePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sapzurro/path.jpg"
            alt="Path to Sapzurro"
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
              {HOW_TO_GET_THERE.title}
            </h1>
            <p className="text-2xl md:text-3xl text-arena font-medium text-shadow">
              {HOW_TO_GET_THERE.subtitle}
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
            className="text-lg md:text-xl text-oscuro leading-relaxed"
          >
            Sapzurro is accessible only by boat, making it a true hidden paradise.
            The journey is part of the adventure! We can help coordinate your transportation
            from any starting point.
          </motion.p>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20 bg-arena-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              Routes to Sapzurro
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {HOW_TO_GET_THERE.routes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-display font-bold text-caribe">
                      From {route.from}
                    </h3>
                    <span className="text-sm font-medium text-bronze bg-bronze/10 px-3 py-1 rounded-full">
                      {route.duration}
                    </span>
                  </div>

                  <div className="space-y-4 mb-6">
                    {route.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-caribe text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {stepIndex + 1}
                        </div>
                        <p className="text-oscuro pt-1">{step}</p>
                      </div>
                    ))}
                  </div>

                  {route.note && (
                    <div className="mt-6 pt-6 border-t border-arena">
                      <p className="text-sm text-oscuro/70 italic">
                        <span className="font-semibold">Note:</span> {route.note}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 bg-perla">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              Essential Travel Tips
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <div className="space-y-6">
                {HOW_TO_GET_THERE.tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-bronze text-2xl mt-1 flex-shrink-0">•</span>
                    <p className="text-oscuro text-lg">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-arena-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-8">
              Where is Sapzurro?
            </h2>
            <p className="text-lg text-oscuro text-center mb-12 max-w-3xl mx-auto">
              Located in the Darién region of Colombia, right at the border with Panama.
              Sapzurro sits where the jungle meets the Caribbean Sea.
            </p>

            <div className="bg-white p-4 rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253034.5!2d-77.5!3d8.6575831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5122c5595b519d%3A0xf29fde11e3d61eed!2sSapzurro%2C%20Choc%C3%B3!5e0!3m2!1sen!2sco!4v1700000000000!5m2!1sen!2sco"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded w-full"
                title="Sapzurro location on Google Maps"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-caribe mb-2">20 min</div>
                <p className="text-oscuro">walk to Panama</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-caribe mb-2">10 min</div>
                <p className="text-oscuro">boat to Capurganá</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl font-bold text-caribe mb-2">1.5 hrs</div>
                <p className="text-oscuro">boat from Necoclí</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help with Transportation */}
      <section className="py-20 bg-gradient-to-br from-caribe to-caribe-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Need Help Planning Your Trip?
            </h2>
            <p className="text-xl mb-8">
              We can help coordinate your entire journey from door to door.
              Get personalized travel advice and transportation arrangements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-white !text-caribe hover:!bg-perla text-lg px-10 py-5 shadow-2xl"
              >
                WhatsApp Us for Help
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="btn-outline !border-white !text-white hover:!bg-white/10 text-lg px-10 py-5"
              >
                Email Us
              </a>
            </div>

            <p className="text-sm text-perla/90 mt-6">
              We respond within 24 hours • We speak English & Spanish
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
