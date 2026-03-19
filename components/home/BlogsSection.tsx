"use client";

import { useRef, useEffect, useState, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import { BLOGS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // --- Logique de Drag & Slide ---
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild as HTMLElement;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 24;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    e.preventDefault(); // Bloque le drag natif du navigateur
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX;
    scrollLeftStart.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.scrollSnapType = "none";
    sliderRef.current.style.cursor = "grabbing";
  };

  const stopDragging = () => {
    if (!sliderRef.current) return;
    isDragging.current = false;
    sliderRef.current.style.cursor = "";
    // Réactive le snap après un court délai pour éviter le saut brusque
    const el = sliderRef.current;
    requestAnimationFrame(() => {
      el.style.scrollBehavior = "smooth";
      el.style.scrollSnapType = "";
      setTimeout(() => {
        el.style.scrollBehavior = "";
      }, 300);
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const walk = e.pageX - startX.current;
    if (Math.abs(walk) > 5) hasDragged.current = true;
    sliderRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleClick = (e: globalThis.MouseEvent) => {
    // Si on a dragué, on bloque le clic/navigation
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="bg-[#F8F8F8] text-brand-black overflow-hidden py-32 max-md:py-20">
      <Container>
        {/* --- Header & Navigation --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 max-md:mb-10 max-lg:px-6"
        >
          {/* Titre aligné à gauche */}
          <div className="flex flex-col items-start">
            <motion.div variants={fadeInUp}>
              <Tag>Latest News</Tag>
            </motion.div>
            <div className="h-6" />
            <motion.h2
              variants={fadeInUp}
              className="text-[4.5rem] max-md:text-[3rem] max-sm:text-[2.5rem] font-medium leading-[1.05] tracking-[-0.04em]"
            >
              Our feature blogs
            </motion.h2>
          </div>

          {/* Boutons de navigation intégrés au header sur Desktop */}
          <motion.div variants={fadeInUp} className="gap-4 hidden md:flex">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border border-brand-black ${
                canScrollLeft
                  ? "bg-transparent text-brand-black hover:bg-brand-black hover:text-white cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Previous blog"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border border-brand-black ${
                canScrollRight
                  ? "bg-transparent text-brand-black hover:bg-brand-black hover:text-white cursor-pointer"
                  : "opacity-30 cursor-not-allowed"
              }`}
              aria-label="Next blog"
            >
              <ArrowRight />
            </button>
          </motion.div>
        </motion.div>

        {/* --- Slider des Cartes --- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          ref={sliderRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={handleMouseMove}
          onClickCapture={handleClick as any}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-15 max-md:px-6 pb-12 pt-4 cursor-grab select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {BLOGS.map((blog, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="shrink-0 w-md max-md:w-88 max-sm:w-[85vw] snap-start"
            >
              <Link href={blog.href} className="group flex flex-col h-full" draggable={false}>
                <div className="bg-white rounded-4xl border border-[#E7E7E7] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-full flex flex-col">
                  {/* Image full bleed en haut de la carte */}
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      draggable={false} // Très important : empêche le comportement natif "drag image" du navigateur
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Contenu textuel de la carte */}
                  <div className="p-8 max-md:p-6 flex flex-col grow">
                    <p className="text-sm font-medium text-grey-400 mb-4 uppercase tracking-wider">
                      {blog.date}
                    </p>
                    <h3 className="text-2xl font-medium leading-[1.3] tracking-tight mb-8 line-clamp-2 group-hover:text-grey-600 transition-colors">
                      {blog.title}
                    </h3>
                    
                    {/* Bouton Learn More */}
                    <div className="mt-auto flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.05em]">
                      Learn more
                      <ArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Boutons de navigation pour Mobile */}
        <div className="flex justify-center gap-4 mt-2 md:hidden">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-brand-black ${
              canScrollLeft
                ? "bg-transparent text-brand-black hover:bg-brand-black hover:text-white cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
            aria-label="Previous blog"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-brand-black ${
              canScrollRight
                ? "bg-transparent text-brand-black hover:bg-brand-black hover:text-white cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
            aria-label="Next blog"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
}