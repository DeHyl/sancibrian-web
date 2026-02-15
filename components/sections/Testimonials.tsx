"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section-container bg-caribe text-perla">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-perla mb-4">What Our Guests Say</h2>
        <p className="text-xl text-arena-light/80 max-w-3xl mx-auto">
          Real experiences from travelers and digital nomads who've discovered paradise
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-perla/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-perla/15 transition-colors duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-bronze text-xl">
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-arena-light/90 italic mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="border-t border-perla/20 pt-4">
              <p className="font-semibold text-perla">{testimonial.name}</p>
              <p className="text-sm text-arena-light/70">
                {testimonial.location}
              </p>
              <p className="text-xs text-bronze mt-1">
                via {testimonial.platform}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
