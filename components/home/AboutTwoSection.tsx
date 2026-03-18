"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutTwoSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section className="bg-white text-brand-black">
      <div className="py-[6.25rem] max-md:py-16 max-sm:py-10">
        <div className="px-[3.75rem] max-md:px-6">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Tag>Our latest projects</Tag>
              </motion.div>

              <div className="flex flex-col">
                <motion.h2
                  variants={fadeInUp}
                  className="text-[4.5rem] max-md:text-[3rem] max-sm:text-[2.25rem] font-medium leading-[1.1] tracking-[-0.04em]"
                >
                  We deliver exceptional real estate solutions.
                </motion.h2>

                <div className="h-6" />

                <motion.h3
                  variants={fadeInUp}
                  className="text-[2.5rem] max-md:text-[1.75rem] font-medium leading-[1.2] tracking-[-0.03em] text-grey-400"
                >
                  With a commitment to excellence and customer satisfaction.
                </motion.h3>

                <div className="h-6" />

                <motion.p
                  variants={fadeInUp}
                  className="text-base text-grey-400 leading-relaxed max-w-[42rem]"
                >
                  With a commitment to innovation, sustainability, and
                  precision, we bring your ideas to life while enhancing
                  functionality and aesthetics. Our team of dedicated architects
                  and designers is here to turn your unique vision into a
                  tangible masterpiece.
                </motion.p>
              </div>
            </motion.div>

            {/* Parallax image */}
            <div className="mt-16 max-md:mt-10">
              <div
                ref={imageRef}
                className="relative w-full aspect-[16/9] rounded-[2.5rem] max-md:rounded-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-[-10%] w-[120%] h-[120%]"
                  style={{ y: imageY }}
                >
                  <Image
                    src="/images/hero/about-two-parallax.avif"
                    alt="Modern architecture with pendant lights"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
