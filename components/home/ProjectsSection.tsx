"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Container from "@/components/layout/Container";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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
      <div className="py-[3.75rem] max-md:py-10">
        <div className="px-[3.75rem] max-md:px-6">
          <Container>
            {/* Tab cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-3"
            >
              {PROJECTS.map((project, i) => (
                <motion.button
                  key={project.id}
                  variants={fadeInUp}
                  onClick={() => setActiveTab(i)}
                  className={`relative rounded-2xl p-5 text-left transition-all duration-300 cursor-pointer overflow-hidden min-h-[180px] flex flex-col justify-between ${
                    activeTab === i
                      ? "bg-brand-black text-white"
                      : "bg-grey-100 text-brand-black hover:bg-grey-200/50"
                  }`}
                >
                  {activeTab === i && i === 0 && (
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
                    <div className="py-2">
                      <span
                        className={`text-2xl font-medium tracking-[-0.03em] ${
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
                    className="relative w-full aspect-[2/1] max-md:aspect-[4/3] rounded-[2.5rem] max-md:rounded-2xl overflow-hidden"
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
                    <div className="absolute bottom-0 left-0 right-0 p-8 max-md:p-5 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="flex items-end justify-between gap-4">
                        <p className="text-white text-base max-w-[50rem] leading-relaxed">
                          {PROJECTS[activeTab].homeDescription ||
                            PROJECTS[activeTab].description}
                        </p>
                        <Link
                          href={PROJECTS[activeTab].href}
                          className="shrink-0 inline-flex items-center gap-2 bg-white text-brand-black rounded-full px-5 py-3 text-base transition-all duration-300 hover:bg-grey-100"
                        >
                          Learn more
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-yellow text-brand-black">
                            <ArrowIcon className="w-4 h-4" />
                          </span>
                        </Link>
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
