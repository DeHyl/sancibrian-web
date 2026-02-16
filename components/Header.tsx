"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ROUTES, SITE_CONFIG } from "@/lib/constants";
import { useDictionary } from "@/lib/i18n/DictionaryProvider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dict, locale } = useDictionary();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const otherLocale = locale === "en" ? "es" : "en";
  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const navItems = ROUTES.map((route) => ({
    name: dict.nav[route.key as keyof typeof dict.nav] || route.key,
    href: `/${locale}${route.href}`,
  }));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-perla/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="relative h-14 w-14 md:h-16 md:w-16">
              <Image
                src={isScrolled ? "/images/logo.png" : "/images/logo-white.png"}
                alt={SITE_CONFIG.name}
                fill
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>
            <span
              className={`ml-3 text-lg md:text-xl font-display font-bold transition-colors hidden sm:block ${
                isScrolled ? "text-caribe" : "text-perla text-shadow"
              }`}
            >
              Cabaña Sancibrian
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-bronze ${
                  isScrolled ? "text-oscuro" : "text-perla text-shadow"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Toggle */}
            <Link
              href={switchLocalePath}
              className={`font-medium text-sm px-3 py-1 rounded-full border transition-colors ${
                isScrolled
                  ? "border-caribe text-caribe hover:bg-caribe hover:text-perla"
                  : "border-perla text-perla hover:bg-perla/20"
              }`}
            >
              {otherLocale.toUpperCase()}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className={`btn-primary ${
                !isScrolled && "!bg-bronze hover:!bg-bronze-dark"
              }`}
            >
              {dict.nav.bookNow}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transition-all ${
                  isScrolled ? "bg-oscuro" : "bg-perla"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 transition-all ${
                  isScrolled ? "bg-oscuro" : "bg-perla"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 transition-all ${
                  isScrolled ? "bg-oscuro" : "bg-perla"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-perla rounded-b-2xl shadow-xl overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-oscuro hover:text-bronze font-medium py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href={switchLocalePath}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-caribe hover:text-bronze font-medium py-2"
                >
                  {otherLocale === "en" ? "English" : "Español"}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block btn-primary text-center"
                >
                  {dict.nav.bookNow}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
