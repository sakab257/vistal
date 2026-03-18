"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ServicesSection() {
  return (
    <section className="bg-brand-black text-white">
      <div className="py-[6.25rem] max-md:py-16 max-sm:py-10">
        <div className="px-[3.75rem] max-md:px-6">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeInUp}>
                <Tag variant="secondary">Services</Tag>
              </motion.div>

              <div className="h-8" />

              <motion.div
                variants={fadeInUp}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6"
              >
                <h2 className="text-[4.5rem] max-md:text-[3rem] max-sm:text-[2.25rem] font-medium leading-[1.1] tracking-[-0.04em] max-w-[50rem]">
                  Seamless property solutions{" "}
                  <span className="text-brand-yellow italic">tailored</span> for
                  you.
                </h2>
                <div className="shrink-0">
                  <Button href="#" variant="primary">
                    Learn more
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            <div className="h-16 max-md:h-10" />

            {/* Services list */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col"
            >
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.number}
                  variants={fadeInUp}
                  className="group"
                >
                  <Link
                    href={service.href}
                    className={`grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-6 md:gap-12 py-10 max-md:py-6 transition-all duration-300 rounded-[2.5rem] max-md:rounded-2xl px-8 max-md:px-4 hover:bg-white hover:text-brand-black ${
                      i === 1
                        ? "bg-white text-brand-black"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-grey-400 font-medium">
                        {service.number}
                      </span>
                      <h3 className="text-[3rem] max-md:text-[2rem] font-medium leading-[1.1] tracking-[-0.04em]">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                      <p className="text-base leading-relaxed opacity-80">
                        {service.description}
                      </p>
                      <span className="text-sm font-semibold uppercase tracking-wider underline underline-offset-4">
                        Learn more
                      </span>
                    </div>
                    {i === 1 && (
                      <div className="relative w-[200px] h-[160px] max-md:w-full max-md:h-[200px] rounded-2xl overflow-hidden">
                        <Image
                          src="/images/services/renovation.webp"
                          alt="Renovation"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
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
