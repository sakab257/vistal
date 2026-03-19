"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ProjectHero() {
  return (
    <section className="sticky top-0 min-h-screen bg-brand-black text-white overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/projects/projects-hero.avif"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 w-full py-32 max-md:py-20">
        <div className="px-15 max-md:px-6">
          <Container size="small">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >
              <motion.div variants={fadeInUp}>
                <Tag variant="secondary">Projects</Tag>
              </motion.div>

              <div className="h-8" />

              <motion.h1
                variants={fadeInUp}
                className="text-[5.625rem] max-md:text-[3.5rem] max-sm:text-[2.5rem] font-normal leading-[1.1] tracking-[-0.04em]"
              >
                Vistal projects
              </motion.h1>

              <div className="h-8" />

              <motion.p
                variants={fadeInUp}
                className="text-base text-grey-200 leading-relaxed max-w-2xl"
              >
                Bring your architectural projects to life with a template that
                puts your work front and center. Simple, elegant, and made for
                creators like you.
              </motion.p>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
