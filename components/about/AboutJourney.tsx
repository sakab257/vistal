"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutJourney() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section className="bg-brand-yellow text-brand-black">
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
                <Tag>Our sustainability journey</Tag>
              </motion.div>

              <div className="flex flex-col">
                <motion.h2
                  variants={fadeInUp}
                  className="text-[2.5rem] max-md:text-[1.75rem] font-medium leading-[1.2] tracking-[-0.03em]"
                >
                  We are aware of the impact that the building sector has and
                  the work that needs to be done on a global scale to reduce
                  this. As a manufacturer we hold an important role and can
                  directly affect the makeup of our products as well as
                  expectations of our peers.
                </motion.h2>

                <div className="h-8" />

                <motion.div variants={fadeInUp}>
                  <Button href="/contact" variant="secondary">
                    Get started
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <div className="h-[6.25rem] max-md:h-12 max-sm:h-8" />
          </Container>
        </div>

        {/* Full-width parallax image */}
        <div className="px-6">
          <div
            ref={imageRef}
            className="relative w-full aspect-[2/1] max-md:aspect-[4/3] rounded-[2.5rem] max-md:rounded-2xl overflow-hidden"
          >
            <motion.div
              className="absolute inset-[-10%] w-[120%] h-[120%]"
              style={{ y: imageY }}
            >
              <Image
                src="/images/about/journey.avif"
                alt="Sustainable architecture journey"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
