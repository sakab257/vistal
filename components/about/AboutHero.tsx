"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { STATS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutHero() {
  return (
    <section className="bg-black text-white">
      <div className="py-25 max-md:py-16 max-sm:py-10">
        <div className="px-15 max-md:px-6">
          {/* Centered hero text */}
          <Container size="small">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >
              <motion.div variants={fadeInUp}>
                <Tag variant="secondary">Services</Tag>
              </motion.div>

              <div className="h-10" />

              <motion.div variants={fadeInUp} className="max-w-160">
                <h1 className="text-[4rem] max-md:text-[2.5rem] max-sm:text-[2rem] font-medium leading-[1.1] tracking-[-0.04em]">
                  Designing spaces, bringing ideas to life
                </h1>
              </motion.div>

              <div className="h-10" />

              <motion.div variants={fadeInUp} className="max-w-lg">
                <p className="text-base text-grey-400 leading-relaxed">
                  We are passionate about creating inspiring, attention-grabbing,
                  and enduring spaces that adapt to innovation.
                </p>
              </motion.div>

              <div className="h-4" />

              <motion.div variants={fadeInUp}>
                <Button href="/contact">
                  Get started
                </Button>
              </motion.div>
            </motion.div>
          </Container>

          <div className="h-20 max-md:h-12 max-sm:h-8" />

          {/* Stats + Image */}
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Stats row */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-6 max-w-3xl"
              >
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[2.5rem] max-md:text-[1.75rem] font-medium leading-[1.2] tracking-[-0.03em]">
                      {stat.value}
                      {stat.suffix && (
                        <span className="text-brand-black/60">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <div className="h-2" />
                    <div className="text-base text-grey-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              <div className="h-16 max-md:h-10" />

              {/* Hero image */}
              <motion.div
                variants={fadeInUp}
                className="relative w-full aspect-2/1 max-md:aspect-4/3 rounded-[2.5rem] max-md:rounded-2xl overflow-hidden"
              >
                <Image
                  src="/images/about/hero-about.avif"
                  alt="Vistal architecture"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
