"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import { BLOGS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function BlogsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 400;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-grey-100 text-brand-black">
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
                className="text-[4.5rem] max-md:text-[3rem] max-sm:text-[2.25rem] font-medium leading-[1.1] tracking-[-0.04em]"
              >
                Our feature blogs
              </motion.h2>
            </motion.div>
          </Container>
        </div>

        {/* Blog carousel */}
        <div className="mt-12 max-md:mt-8">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-[3.75rem] max-md:px-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {BLOGS.map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-[380px] max-md:w-[300px] snap-start"
              >
                <Link href={blog.href} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-grey-400 mb-2">{blog.date}</p>
                      <h3 className="text-lg font-medium leading-snug mb-4 line-clamp-2">
                        {blog.title}
                      </h3>
                      <span className="text-sm font-semibold uppercase tracking-wider underline underline-offset-4">
                        Learn more
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-grey-800 transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.5 4.5L11.5575 5.5575L5.8725 11.25H21V12.75H5.8725L11.5575 18.4425L10.5 19.5L3 12L10.5 4.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-grey-800 transition-colors cursor-pointer"
              aria-label="Next"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
