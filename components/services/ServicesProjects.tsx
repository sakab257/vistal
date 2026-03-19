"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ServicesProjects() {
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp}>
                <Tag>Projects</Tag>
              </motion.div>

              <div className="flex flex-col">
                <motion.h2
                  variants={fadeInUp}
                  className="text-[3rem] max-md:text-[2rem] max-sm:text-[1.5rem] font-medium leading-[1.1] tracking-[-0.04em]"
                >
                  At Vistal, we take pride in delivering exceptional real estate
                  solutions tailored to our clients&apos; needs.
                </motion.h2>

                <div className="h-8" />

                <motion.div variants={fadeInUp}>
                  <Button href="/projects" variant="secondary">
                    View project
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <div className="h-24 max-md:h-12 max-sm:h-8" />

            {/* Project cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3"
            >
              {PROJECTS.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className="relative rounded-2xl overflow-hidden aspect-3/4 group"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-xs text-white/70">
                      {project.location}
                    </div>
                    <div className="h-2" />
                    <div className="text-2xl font-medium text-white tracking-[-0.03em]">
                      {project.title}
                    </div>
                    <div className="h-3" />
                    <div className="flex gap-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
