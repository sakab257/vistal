"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import { WORK_STEPS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HowWeWork() {
  return (
    <section className="bg-brand-black text-white relative z-10">
      <div className="py-25 max-md:py-16 max-sm:py-10">
        <div className="px-15 max-md:px-6">
          <Container>
            {/* Header */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col"
            >
              <motion.div variants={fadeInUp}>
                <Tag variant="secondary">How we work</Tag>
              </motion.div>

              <div className="h-10" />

              <motion.h2
                variants={fadeInUp}
                className="text-[4rem] max-md:text-[2.5rem] max-sm:text-[2rem] font-medium leading-[1.1] tracking-[-0.04em]"
              >
                Here&apos;s how we make it easy
              </motion.h2>

              <div className="h-10" />

              <motion.p
                variants={fadeInUp}
                className="text-base text-grey-200 leading-relaxed max-w-lg"
              >
                The interior design combines aesthetics and functionality to
                improve user comfort.
              </motion.p>
            </motion.div>

            <div className="h-25 max-md:h-20 max-sm:h-12" />

            {/* Steps */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8"
            >
              {/* Step numbers */}
              <div className="hidden md:flex flex-col items-center gap-4">
                {WORK_STEPS.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 flex items-start justify-center"
                  >
                    <div className="w-8 h-8 rounded-full border border-grey-400 flex items-center justify-center">
                      <span className="text-sm">{i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Step cards */}
              <div className="flex flex-col gap-4">
                {WORK_STEPS.map((step, i) => (
                  <motion.div key={step.title} variants={fadeInUp}>
                    <Link
                      href={step.href}
                      className="group block rounded-2xl bg-grey-800 overflow-hidden transition-colors hover:bg-grey-700"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 min-h-60 max-md:min-h-0">
                        {/* Text content */}
                        <div className="p-6 flex flex-col">
                          <div className="flex items-center gap-3 md:hidden mb-4">
                            <div className="w-8 h-8 rounded-full border border-grey-400 flex items-center justify-center">
                              <span className="text-sm">{i + 1}</span>
                            </div>
                          </div>

                          <div className="w-10 h-10 rounded-lg bg-grey-600 flex items-center justify-center">
                            <Image
                              src={step.icon}
                              alt=""
                              width={24}
                              height={24}
                            />
                          </div>

                          <div className="mt-auto pt-8">
                            <h3 className="text-2xl font-medium tracking-[-0.03em] leading-[1.2]">
                              {step.title}
                            </h3>
                            <div className="h-3" />
                            <p className="text-base text-grey-200 line-clamp-3">
                              {step.description}
                            </p>
                            <div className="h-8" />
                            <div className="inline-flex flex-col">
                              <span className="text-sm uppercase tracking-wider text-grey-200">
                                Learn more
                              </span>
                              <div className="h-px w-full bg-grey-400 mt-1 group-hover:bg-white transition-colors" />
                            </div>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="relative aspect-4/3 sm:aspect-auto overflow-hidden">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
