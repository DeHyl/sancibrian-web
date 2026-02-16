"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section-container bg-perla">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-caribe mb-4">The Sancibrian Experience</h2>
        <p className="text-xl text-oscuro/70 max-w-3xl mx-auto">
          Where modern amenities meet Caribbean paradise. Everything you need for the perfect remote work retreat.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`card p-6 ${
              feature.highlight
                ? "ring-2 ring-bronze shadow-xl"
                : "ring-1 ring-arena"
            } hover:scale-105 transition-transform duration-300`}
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-bronze text-2xl mt-1">•</span>
              <h3 className="text-xl font-display font-bold text-caribe">
                {feature.title}
              </h3>
            </div>
            <p className="text-oscuro/70">{feature.description}</p>
            {feature.highlight && (
              <div className="mt-4 inline-block bg-bronze/10 text-bronze text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
