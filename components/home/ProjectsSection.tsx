"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Container from "@/components/layout/Container";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import Tag from "../ui/Tag";
import Button from "../ui/Button";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section className="bg-white text-brand-black">
      <div className="py-15 max-md:py-10">
        <div className="px-15 max-md:px-6">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-8 py-8"
            >
              <motion.div variants={fadeInUp}>
                <Tag>Our latest projects</Tag>
              </motion.div>
            
              <div className="flex flex-col">
                <motion.h2
                  variants={fadeInUp}
                  className="text-6xl max-md:text-5xl max-sm:text-4xl font-medium leading-[1.1] tracking-[-0.04em] max-w-170"
                >
                  We deliver exceptional real estate solutions.
                </motion.h2>
            
              </div>
            </motion.div>

            {/* Tab cards */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-4 max-md:grid-cols-2 gap-3"
            >
              {PROJECTS.map((project, i) => (
                <motion.button
                  key={project.id}
                  variants={fadeInUp}
                  onClick={() => setActiveTab(i)}
                  className={`relative rounded-2xl p-5 text-left transition-colors duration-300 cursor-pointer overflow-hidden h-30 md:min-h-45 flex flex-col justify-between ${
                    activeTab === i
                      ? "bg-brand-black text-white"
                      : "bg-black text-white hover:bg-black/90"
                  }`}
                >
                  {activeTab === i && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        className="object-cover opacity-40"
                      />
                    </div>
                  )}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="text-xs text-grey-200 max-md:hidden">
                      {project.location}
                    </div>
                    <div className="py-2 max-md:flex-1">
                      <span
                        className={`text-sm md:text-2xl font-medium tracking-[-0.03em] flex justify-center items-center max-md:h-full ${
                          activeTab === i ? "text-brand-yellow" : ""
                        }`}
                      >
                        {project.title}
                      </span>
                    </div>
                    <div className="flex justify-between max-md:hidden">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-grey-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Tab content */}
            <div className="mt-12 max-md:mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {/* Image */}
                  <div
                    ref={imageRef}
                    className="relative w-full h-100 max-md:aspect-4/3 rounded-[2.5rem] max-md:rounded-2xl overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-[-10%] w-[120%] h-[120%]"
                      style={{ y: imageY }}
                    >
                      <Image
                        src={PROJECTS[activeTab].image}
                        alt={PROJECTS[activeTab].title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    {/* Bottom overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 max-md:p-5 bg-linear-to-t from-black/70 to-transparent">
                      <div className="grid grid-cols-2 items-end gap-4">
                        <p className="text-white text-base max-w-200 leading-relaxed">
                          {PROJECTS[activeTab].homeDescription ||
                            PROJECTS[activeTab].description}
                        </p>
                        <div className="ml-auto">
                          <Button href={PROJECTS[activeTab].href} variant="white">
                            See project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
