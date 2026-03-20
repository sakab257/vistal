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

  // 1. On récupère le scroll en pixels
  const { scrollY } = useScroll();

  // 2. L'overlay de la maison disparaît en exactement 50px de scroll
  const houseOpacity = useTransform(scrollY, [0, 50], [1, 0]);

  // 3. LA MAGIE POUR SAFARI : Au lieu d'animer l'opacity, on anime le backgroundColor 
  // de transparent (0) à noir (1). Safari le gère parfaitement même avec transform-gpu.
  const darkOverlayBg = useTransform(
    scrollYProgress, 
    [0.2, 0.5], 
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  );

  return (
    <section ref={sectionRef} className="relative bg-brand-black text-white h-[150vh]">

      {/* Background image */}
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

      {/* House overlay — fades out in 50px */}
      <motion.div
        className="absolute inset-0 z-25 pointer-events-none transform-gpu"
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

      {/* Dark overlay — fades in via backgroundColor (Safari safe) */}
      <motion.div
        className="absolute inset-0 z-16 pointer-events-none transform-gpu"
        style={{ backgroundColor: darkOverlayBg }}
      />

      {/* Vistal© SVG */}
      <div className="relative z-20 h-full pointer-events-none transform-gpu">
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
      {/* Plus d'animation d'opacité ici, le texte reste affiché tout le long ! */}
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