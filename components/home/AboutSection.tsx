"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ABOUT_CARDS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section className="bg-brand-yellow text-brand-black relative overflow-hidden">
      <div className="py-[6.25rem] max-md:py-16 max-sm:py-10">
        <div className="px-[3.75rem] max-md:px-6">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div variants={fadeInUp}>
                <Tag>About Vistal</Tag>
              </motion.div>

              <div className="h-6" />

              <motion.h2
                variants={fadeInUp}
                className="text-[4.5rem] max-md:text-[3rem] max-sm:text-[2.25rem] font-medium leading-[1.1] tracking-[-0.04em] max-w-[50rem]"
              >
                Your gateway to prestige properties
              </motion.h2>

              <div className="h-6" />

              <motion.p
                variants={fadeInUp}
                className="text-lg max-w-[32rem] opacity-80"
              >
                Experience innovative architecture that transforms your vision
                into reality with our expert team.
              </motion.p>

              <div className="h-8" />

              <motion.div variants={fadeInUp}>
                <Button href="#" variant="secondary">
                  Learn more
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </div>

        {/* Fanned project cards */}
        <div className="mt-16 max-md:mt-10">
          <div className="px-[3.75rem] max-md:px-6">
            <Container>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex justify-center items-center min-h-[500px] max-md:min-h-[400px] max-sm:flex-col max-sm:gap-6 max-sm:min-h-0"
              >
                {ABOUT_CARDS.map((card, i) => {
                  const rotations = [-9, 0, 9];
                  const offsets = ["-15%", "0%", "15%"];
                  const zIndexes = [1, 3, 2];

                  return (
                    <motion.div
                      key={card.title}
                      variants={fadeInUp}
                      className="bg-white rounded-[1.5rem] overflow-hidden shadow-lg max-sm:relative max-sm:w-full"
                      style={{
                        position: "absolute",
                        width: "min(22rem, 40%)",
                        left: `calc(50% + ${offsets[i]} - min(11rem, 20%))`,
                        zIndex: zIndexes[i],
                        rotate: `${rotations[i]}deg`,
                      }}
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-medium mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm text-grey-400 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
