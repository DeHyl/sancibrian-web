"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useDictionary } from "@/lib/i18n/DictionaryProvider";

export default function CaptainStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { dict } = useDictionary();
  const t = dict.captainStory;

  return (
    <section ref={ref} className="section-container bg-arena">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          className="text-caribe mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t.title}
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-bronze font-display font-semibold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t.subtitle}
        </motion.p>

        <motion.p
          className="text-lg text-oscuro/80 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t.story}
        </motion.p>

        <motion.blockquote
          className="text-2xl md:text-3xl font-display italic text-caribe border-l-4 border-bronze pl-6 py-4"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t.quote}
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
