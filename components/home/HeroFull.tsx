"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroFull() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // House overlay fades out first (0→20%)
  const houseOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Dark overlay fades IN (20→50%) — but stays BELOW the SVG text
  const darkOverlay = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  // Bottom content fades out at the start of scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.1], ["0px", "40px"]);

  return (
    <section ref={sectionRef} className="relative bg-brand-black text-white h-[150vh]">

      {/* Background image — absolute, fills section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.7))]" />
      </div>

      {/* House overlay — absolute, fades out first */}
      <motion.div
        className="absolute inset-0 z-25 pointer-events-none"
        style={{ opacity: houseOpacity }}
      >
        <Image
          src="/images/hero/house-overlay.avif"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlay — fades in, z-16 (BELOW the SVG at z-20) */}
      <motion.div
        className="absolute inset-0 z-16 pointer-events-none bg-brand-black"
        style={{ opacity: darkOverlay }}
      />

      {/* Vistal© SVG — in document flow, sticky behavior:
          - Starts centered in the viewport (flex items-center)
          - Follows scroll (sticky top-0 keeps it in the viewport)
          - At the end of the section, unsticks and sits at the bottom */}
      <div className="relative z-20 h-full pointer-events-none">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <Image
            src="/images/brand/vistal-hero.svg"
            alt="Vistal©"
            width={1297}
            height={372}
            priority
            className="w-[90%] max-w-none h-auto lg:-translate-y-20"
          />
        </div>
      </div>

      {/* Bottom content — heading + description + button */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-30 px-15 max-md:px-6 pb-16 max-md:pb-10"
      >
        <div className="mx-auto max-w-330">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <h2 className="text-7xl max-md:text-6xl max-sm:text-4xl font-normal leading-[1.05] tracking-[-0.04em]">
              Your gateway to prestige properties
            </h2>
            <div className="flex flex-col items-start md:items-end md:text-right">
              <p className="text-base text-grey-200 leading-relaxed max-w-104">
                Bring your architectural projects to life with a template that
                puts your work front and center.
              </p>
              <div className="h-6" />
              <Button href="/contact" variant="primary">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
