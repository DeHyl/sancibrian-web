"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useDictionary } from "@/lib/i18n/DictionaryProvider";

export default function CaptainStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { dict } = useDictionary();
  const t = dict.captainStory;

  return (
    <section ref={ref} className="section-container bg-arena">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-caribe mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.title}
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-bronze font-display font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            className="text-lg text-oscuro/80 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t.story}
          </motion.p>

          <motion.blockquote
            className="text-xl md:text-2xl font-display italic text-caribe border-l-4 border-bronze pl-6 py-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {t.quote}
          </motion.blockquote>
        </motion.div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/cabin/captain-diego-katios.jpg"
              alt="Capitán Diego Domínguez Escobar — Los Katíos National Park"
              fill
              className="object-cover"
            />
            {/* Vintage film grain overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-oscuro/40 via-transparent to-transparent" />
          </div>
          {/* Caption */}
          <p className="mt-3 text-sm text-oscuro/60 italic text-center">
            Capitán Diego Domínguez Escobar — Los Katíos, Colombia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
