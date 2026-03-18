"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import { PURPOSE_CARDS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutPurpose() {
  return (
    <section className="bg-white text-brand-black">
      <div className="py-[3.75rem] max-md:py-10">
        <div className="px-[3.75rem] max-md:px-6">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {/* Left column: tag, description, image */}
              <div className="flex flex-col">
                <motion.div variants={fadeInUp}>
                  <Tag>Our purpose</Tag>
                </motion.div>

                <div className="h-10" />

                <motion.p
                  variants={fadeInUp}
                  className="text-xl font-medium leading-[1.4] max-w-[23rem]"
                >
                  We believe in clarity, care, and connection. Our goal is
                  simple: to help you move smartly and confidently through real
                  estate, without the stress.
                </motion.p>

                <div className="h-10" />

                <motion.div
                  variants={fadeInUp}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/images/about/hero-about-2.avif"
                    alt="Architecture design"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Right column: heading, description, service cards */}
              <div className="flex flex-col">
                <motion.h2
                  variants={fadeInUp}
                  className="text-[3rem] max-md:text-[2rem] font-medium leading-[1.1] tracking-[-0.04em]"
                >
                  Why we do what we do
                </motion.h2>

                <div className="h-10" />

                <motion.p
                  variants={fadeInUp}
                  className="text-base text-grey-400 leading-relaxed max-w-[32rem]"
                >
                  Focused on creativity and precision, we turn ideas into
                  lasting designs.
                </motion.p>

                <div className="h-[4.5rem] max-md:h-12 max-sm:h-8" />

                {/* Purpose cards */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col gap-4"
                >
                  {PURPOSE_CARDS.map((card) => (
                    <Link
                      key={card.title}
                      href={card.href}
                      className="group block rounded-2xl bg-grey-100 overflow-hidden transition-colors hover:bg-grey-200/50"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[200px] max-md:min-h-0">
                        <div className="p-6 flex flex-col">
                          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                            <Image
                              src={card.icon}
                              alt=""
                              width={24}
                              height={24}
                            />
                          </div>

                          <div className="mt-auto pt-6">
                            <h3 className="text-2xl font-medium tracking-[-0.03em] leading-[1.2]">
                              {card.title}
                            </h3>
                            <div className="h-2" />
                            <p className="text-sm text-grey-400 line-clamp-3">
                              {card.description}
                            </p>
                            <div className="h-6" />
                            <div className="inline-flex flex-col">
                              <span className="text-sm uppercase tracking-wider">
                                Learn more
                              </span>
                              <div className="h-px w-full bg-brand-black/30 mt-1 group-hover:bg-brand-black transition-colors" />
                            </div>
                          </div>
                        </div>

                        <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
