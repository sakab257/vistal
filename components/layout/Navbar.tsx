"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, DROPDOWN_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="px-[3.75rem] max-md:px-6 py-4">
        <div className="max-w-[82.5rem] mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" aria-label="home" className="relative z-10">
              <Image
                src="/images/brand/logo.avif"
                alt="Vistal"
                width={120}
                height={32}
                priority
                className="h-6 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0">
              <div className="flex items-center">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 text-white text-base transition-all duration-300 hover:font-medium"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-white/80" />
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Contact button */}
              <Link
                href="/contact"
                className="ml-4 inline-flex items-center gap-2 bg-white text-brand-black rounded-full px-5 py-2.5 text-base transition-all duration-300 hover:bg-grey-100"
              >
                Contact us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="menu"
            >
              <motion.span
                className="block w-6 h-[2px] bg-white origin-center"
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-[2px] bg-white"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-[2px] bg-white origin-center"
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-black z-40 pt-20"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-2xl font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              {DROPDOWN_LINKS.map((group, gi) =>
                group.column.map((link) => (
                  <Link
                    key={`${gi}-${link.label}`}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-grey-200 text-lg py-1"
                  >
                    {link.label}
                  </Link>
                ))
              )}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center justify-center bg-white text-brand-black rounded-full px-6 py-3 text-base font-medium"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
