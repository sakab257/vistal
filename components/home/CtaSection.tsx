"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CtaSection() {
  return (
    <section className="bg-brand-yellow text-brand-black">
      <div className="py-[3.75rem] max-md:py-10">
        <div className="px-[3.75rem] max-md:px-6">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16"
            >
              <motion.div variants={fadeInUp}>
                <Tag>Get started</Tag>
              </motion.div>

              <div>
                <motion.h2
                  variants={fadeInUp}
                  className="text-[4.5rem] max-md:text-[3rem] max-sm:text-[2.25rem] font-medium leading-[1.1] tracking-[-0.04em]"
                >
                  Schedule a free consultation
                </motion.h2>

                <div className="h-8" />

                <motion.p
                  variants={fadeInUp}
                  className="text-base leading-relaxed max-w-[42rem] opacity-80"
                >
                  We craft inspiring spaces that blend cutting-edge design with
                  enduring functionality, turning your vision into reality.
                </motion.p>

                <div className="h-4" />

                <motion.div variants={fadeInUp}>
                  <Button href="#" variant="secondary">
                    Get started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
