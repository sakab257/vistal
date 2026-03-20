"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import CountUp from "@/components/ui/CountUp";
import { STATS } from "@/lib/constants";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export default function PurposeSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section className="bg-brand-yellow text-brand-black relative z-10">
      <div className="py-25 max-md:py-16 max-sm:py-10">
        <div className="px-15 max-md:px-6 overflow-hidden">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Tag>Our sustainability journey</Tag>
              </motion.div>

              <div className="flex flex-col">
                <motion.h2
                  variants={fadeInUp}
                  className="text-[2.5rem] max-md:text-[1.75rem] font-medium leading-[1.2] tracking-[-0.03em]"
                >
                  Here are some of our success stories that showcase how we help
                  buyers, sellers, and investors achieve their real estate goals.
                </motion.h2>

                <div className="h-18 max-md:h-12 max-sm:h-8" />

                {/* Stats */}
                <motion.div
                  variants={slideInLeft}
                  className="grid grid-cols-3 gap-6"
                >
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-[2.5rem] max-md:text-[1.75rem] font-medium leading-[1.2] tracking-[-0.03em]">
                        <CountUp value={stat.value} />
                        {stat.suffix && (
                          <span className="text-brand-black">
                            {stat.suffix}
                          </span>
                        )}
                      </div>
                      <div className="h-3" />
                      <div className="text-base">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                <div className="h-18 max-md:h-12 max-sm:h-8" />

                {/* Parallax image */}
                <motion.div variants={slideInRight} className="relative">
                  <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-xs" />
                  <div
                    ref={imageRef}
                    className="relative w-full aspect-video overflow-hidden rounded-xs"
                  >
                    <motion.div
                      className="absolute inset-[-10%] w-[120%] h-[120%]"
                      style={{ y: imageY }}
                    >
                      <Image
                        src="/images/projects/purpose-parallax.avif"
                        alt="Sustainable architecture"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
