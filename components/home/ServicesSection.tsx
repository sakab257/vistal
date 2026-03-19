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
      <div className="py-25 max-md:py-16 max-sm:py-10">
        <div className="px-15 max-md:px-6">
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
                <h2 className="text-[4.5rem] max-md:text-[3rem] max-sm:text-[2.25rem] font-medium leading-[1.1] tracking-[-0.04em] max-w-200">
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
                    className={`relative grid grid-cols-[1fr_1fr] lg:grid-cols-[400px_400px_auto] gap-6 lg:gap-12 py-10 max-lg:py-6 transition-all duration-300 rounded-2xl px-8 max-lg:px-4 lg:hover:bg-white lg:hover:text-brand-black lg:[clip-path:inset(-100%_-100%_0_-100%)]`}
                  >
                    <div className="flex gap-2 lg:group-hover:translate-x-10 transition-all duration-500 ease-out">
                      <span className="text-sm text-grey-400 font-medium">
                        {service.number}
                      </span>
                      <h3 className="md:text-2xl lg:text-4xl max-md:text-[2rem] font-medium leading-[1.1] tracking-[-0.04em]">
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
                    <div className="max-lg:hidden absolute right-20 w-70 h-75 rounded-2xl border-12 border-gray-200 bg-gray-200 -rotate-15 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-15 transition-all duration-300 ease-out pointer-events-none">
                      <Image
                        src={service.image}
                        alt="Renovation"
                        fill
                        className="object-cover rounded-xl"
                      />
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
