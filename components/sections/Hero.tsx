"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HERO, CONTACT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO.heroVideo} type="video/mp4" />
        </video>
        <div className="gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="-mb-4 mt-44 md:mt-8 flex justify-center"
          >
            <div className="relative w-[300px] h-[300px] md:w-[220px] md:h-[220px]">
              <Image
                src="/images/logo-white.png"
                alt="Cabaña Sancibrian"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-perla text-shadow-lg mb-4 md:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {HERO.headline}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-arena font-medium text-shadow mb-2 md:mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {HERO.subheadline}
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-arena-light/90 text-shadow max-w-2xl mx-auto mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {HERO.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5 shadow-2xl"
            >
              {HERO.cta}
            </a>
            <Link
              href="/cabin"
              className="btn-outline text-lg px-10 py-5 !text-perla !border-perla hover:!bg-perla/10 backdrop-blur-sm"
            >
              {HERO.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <div className="w-6 h-10 border-2 border-perla rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-perla rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
