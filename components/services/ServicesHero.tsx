"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen bg-brand-black text-white overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 w-full py-32 max-md:py-20">
        <div className="px-[3.75rem] max-md:px-6">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              <motion.div variants={fadeInUp}>
                <Tag variant="secondary">Services</Tag>
              </motion.div>

              <div className="h-10" />

              <motion.div variants={fadeInUp} className="max-w-[40rem]">
                <h1 className="text-[4rem] max-md:text-[2.5rem] max-sm:text-[2rem] font-medium leading-[1.1] tracking-[-0.04em]">
                  Showcase of our featured projects
                </h1>
              </motion.div>

              <div className="h-10" />

              <motion.div variants={fadeInUp} className="max-w-[32rem]">
                <p className="text-base text-grey-200 leading-relaxed">
                  Bring your architectural projects to life with a template that
                  puts your work front and center.
                </p>
              </motion.div>

              <div className="h-4" />

              <motion.div variants={fadeInUp}>
                <Button href="/contact" variant="primary">
                  Get started
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
