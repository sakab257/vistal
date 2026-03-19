"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import { SERVICES_GRID } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ServicesGrid() {
  return (
    <section className="bg-white text-brand-black relative z-10">
      <div className="py-15 max-md:py-10">
        <div className="px-15 max-md:px-6">
          <Container>
            {/* Header */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-10"
            >
              <div className="grid grid-cols-[300px_1fr] gap-6">
                <motion.div variants={fadeInUp}>
                  <Tag>Services</Tag>
                </motion.div>
                <motion.div variants={fadeInUp} className="max-w-200">
                  <h2 className="text-[4rem] max-md:text-[2.5rem] max-sm:text-[2rem] font-medium leading-[1.1] tracking-[-0.04em]">
                    Seamless property solutions tailored for you.
                  </h2>
                </motion.div>
              </div>
            </motion.div>

            <div className="h-25 max-md:h-20 max-sm:h-12" />

            {/* Service cards grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 max-md:grid-cols-1 gap-4"
            >
              {SERVICES_GRID.map((service) => (
                <motion.div key={service.title} variants={fadeInUp}>
                  <Link
                    href={service.href}
                    className="group block rounded-2xl bg-grey-100 overflow-hidden transition-colors hover:bg-grey-200/50 h-75"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-70 max-md:min-h-0 h-full">
                      {/* Text content */}
                      <div className="p-6 flex flex-col h-full">
                        <div className="relative w-10 h-full rounded-lg bg-white overflow-hidden">
                          <Image
                            src={service.icon}
                            alt=""
                            fill
                            className="object-contain p-1.5"
                          />
                        </div>

                        <div className="mt-auto pt-8">
                          <h3 className="text-2xl font-medium tracking-[-0.03em] leading-[1.2]">
                            {service.title}
                          </h3>
                          <div className="h-3" />
                          <p className="text-base text-grey-400 line-clamp-3">
                            {service.description}
                          </p>
                          <div className="h-8" />
                          <div className="inline-flex flex-col">
                            <span className="text-sm uppercase tracking-wider">
                              Learn more
                            </span>
                            <div className="h-px w-full bg-brand-black/30 mt-1 group-hover:bg-brand-black transition-colors" />
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="relative aspect-4/3 sm:aspect-auto overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
