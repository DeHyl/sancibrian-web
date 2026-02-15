"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ACTIVITIES, CONTACT } from "@/lib/constants";

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sapzurro/beach-2.jpg"
            alt="Activities in Sapzurro"
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
              Adventures Await
            </h1>
            <p className="text-2xl md:text-3xl text-arena font-medium text-shadow">
              Things to Do in Sapzurro
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
            From jungle hikes to crystal-clear snorkeling, Sapzurro offers adventure
            and relaxation in equal measure. Whether you seek adrenaline or tranquility,
            paradise has something for everyone.
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
              {ACTIVITIES.map((activity, index) => (
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

      {/* Featured Activities */}
      <section className="py-20 bg-perla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              Signature Experiences
            </h2>

            <div className="space-y-12">
              {/* La Miel Hike */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/sapzurro/path.jpg"
                    alt="Hike to La Miel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-caribe mb-4">
                    Hike to La Miel Beach
                  </h3>
                  <p className="text-lg text-oscuro mb-4">
                    A 20-minute jungle trek takes you across the border to Panama's
                    pristine La Miel beach. Don't forget your passport for this
                    international adventure!
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-bronze/10 text-bronze px-4 py-2 rounded-full text-sm font-medium">
                      20 min hike
                    </span>
                    <span className="bg-caribe/10 text-caribe px-4 py-2 rounded-full text-sm font-medium">
                      Easy difficulty
                    </span>
                    <span className="bg-verde/10 text-verde px-4 py-2 rounded-full text-sm font-medium">
                      Bring passport
                    </span>
                  </div>
                </div>
              </div>

              {/* Snorkeling */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-display font-bold text-caribe mb-4">
                    Snorkeling Paradise
                  </h3>
                  <p className="text-lg text-oscuro mb-4">
                    Crystal-clear Caribbean waters teeming with tropical fish and
                    vibrant coral reefs. Equipment rentals available locally.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-bronze/10 text-bronze px-4 py-2 rounded-full text-sm font-medium">
                      All skill levels
                    </span>
                    <span className="bg-caribe/10 text-caribe px-4 py-2 rounded-full text-sm font-medium">
                      Year-round
                    </span>
                    <span className="bg-verde/10 text-verde px-4 py-2 rounded-full text-sm font-medium">
                      Equipment available
                    </span>
                  </div>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
                  <Image
                    src="/images/sapzurro/beach-3.jpg"
                    alt="Snorkeling"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Kayaking */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/sapzurro/beach-4.jpg"
                    alt="Kayaking"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-caribe mb-4">
                    Coastal Kayaking
                  </h3>
                  <p className="text-lg text-oscuro mb-4">
                    Paddle along the stunning coastline, discover hidden coves,
                    and explore the border between Colombia and Panama from the water.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-bronze/10 text-bronze px-4 py-2 rounded-full text-sm font-medium">
                      2-4 hours
                    </span>
                    <span className="bg-caribe/10 text-caribe px-4 py-2 rounded-full text-sm font-medium">
                      Moderate
                    </span>
                    <span className="bg-verde/10 text-verde px-4 py-2 rounded-full text-sm font-medium">
                      Guide recommended
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nearby Destinations */}
      <section className="py-20 bg-arena-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-oscuro text-center mb-12">
              Day Trips & Nearby
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-caribe mb-4">
                  Capurganá
                </h3>
                <p className="text-oscuro mb-4">
                  10-minute boat ride to the neighboring town. More restaurants,
                  shops, and activities. Great for a day trip.
                </p>
                <div className="flex items-center gap-2 text-bronze font-medium">
                  <span>🚤</span>
                  <span>10 minutes by boat</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-caribe mb-4">
                  El Aguacate Waterfall
                </h3>
                <p className="text-oscuro mb-4">
                  Hidden jungle waterfall near Capurganá. Refreshing swim in
                  natural pools. Guided hike recommended.
                </p>
                <div className="flex items-center gap-2 text-bronze font-medium">
                  <span>🥾</span>
                  <span>1-hour hike from Capurganá</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-caribe mb-4">
                  Puerto Obaldía (Panama)
                </h3>
                <p className="text-oscuro mb-4">
                  Panamanian border town. Immigration office for sailors.
                  Cultural experience and duty-free shopping.
                </p>
                <div className="flex items-center gap-2 text-bronze font-medium">
                  <span>🚤</span>
                  <span>30 minutes by boat</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-caribe mb-4">
                  Fishing Trips
                </h3>
                <p className="text-oscuro mb-4">
                  Join local fishermen for traditional sport fishing. Catch of
                  the day can be prepared by local restaurants.
                </p>
                <div className="flex items-center gap-2 text-bronze font-medium">
                  <span>🎣</span>
                  <span>Half or full day trips</span>
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
              Start Your Adventure
            </h2>
            <p className="text-xl mb-8">
              We can help arrange activities, tours, and local guides
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-white !text-caribe hover:!bg-perla text-lg px-10 py-5 shadow-2xl"
              >
                Book Your Stay
              </a>
              <Link
                href="/cabin"
                className="btn-outline !border-white !text-white hover:!bg-white/10 text-lg px-10 py-5"
              >
                See The Cabin
              </Link>
            </div>
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
