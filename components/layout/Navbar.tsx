"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

// --- Variantes d'animation pour le menu mobile ---
const menuVariants = {
  initial: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
  animate: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
} as const;

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const linkVariants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      // Hide on scroll down, show on scroll up (only after 50px)
      if (currentY > 50) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloque le scroll du site quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-51"
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={{
          backgroundColor: scrolled ? "rgba(17, 17, 17, 1)" : "rgba(17, 17, 17, 0)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(255,255,255,0)",
          y: hidden && !mobileOpen ? "-100%" : "0%",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <div className="px-15 max-md:px-6 py-5">
          <div className="max-w-330 mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" aria-label="home" className="relative z-60" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/brand/logo.avif"
                alt="Vistal"
                width={120}
                height={32}
                priority
                className="h-7 w-auto transition-transform hover:scale-105 duration-300"
              />
            </Link>

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative flex items-center gap-2 text-white text-[0.95rem] font-medium tracking-wide transition-colors hover:text-grey-200 pb-1"
                  >
                    <span className="w-1.5 h-1.5 bg-white opacity-50 transition-opacity group-hover:opacity-100" />
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-px bg-grey-200 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                  </Link>
                ))}
              </div>

              {/* Bouton Contact */}
              <Link
                href="/contact"
                className="ml-2 inline-flex items-center gap-2 bg-white text-brand-black rounded-full px-6 py-2.5 text-[0.95rem] font-medium transition-all duration-300 hover:bg-grey-200 hover:scale-105"
              >
                Contact us
              </Link>
            </div>

            {/* Hamburger Button Mobile */}
            <button
              className="md:hidden relative z-60 w-10 h-10 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="absolute block h-0.5 bg-white rounded-full"
                animate={mobileOpen ? { rotate: 45, width: 24, y: 0 } : { rotate: 0, width: 28, y: -6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute block h-0.5 bg-white rounded-full"
                animate={mobileOpen ? { opacity: 0, x: 10, width: 20 } : { opacity: 1, x: 0, width: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute block h-0.5 bg-white rounded-full"
                animate={mobileOpen ? { rotate: -45, width: 24, y: 0 } : { rotate: 0, width: 28, y: 6 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile Fullscreen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-[#111111] z-50 flex flex-col justify-between px-6 pt-32 pb-12"
          >
            {/* Liens principaux */}
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-6"
            >
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="overflow-hidden">
                  <motion.div variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-white text-5xl font-normal tracking-[-0.04em] hover:text-grey-400 transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Footer du menu mobile (Bouton + Infos secondaires) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col gap-8"
            >
              <div className="h-px w-full bg-white/10" />
              
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full justify-center bg-white text-brand-black rounded-full px-8 py-4 text-lg font-medium transition-transform active:scale-95"
              >
                Let's work together
              </Link>
              
              <div className="flex justify-between text-sm text-grey-400 font-medium uppercase tracking-widest">
                <span>© Vistal 2024</span>
                <span className="underline underline-offset-4">Instagram</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}