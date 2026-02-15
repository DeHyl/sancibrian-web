"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-container bg-arena">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-caribe mb-4">Gallery</h2>
        <p className="text-xl text-oscuro/70">
          A glimpse of paradise
        </p>
      </motion.div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {GALLERY_IMAGES.map((image, index) => {
          // Create asymmetric layout
          const isLarge = index === 0 || index === 3;
          const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1";
          const rowSpan = isLarge ? "md:row-span-2" : "md:row-span-1";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${colSpan} ${rowSpan} h-64 ${
                isLarge ? "md:h-full" : ""
              } overflow-hidden rounded-2xl cursor-pointer group`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-oscuro/80 via-oscuro/20 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-perla text-sm md:text-base font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
