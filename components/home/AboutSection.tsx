"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionTemplate, type MotionValue } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ABOUT_CARDS } from "@/lib/constants";

/* Card with scroll-driven animation */
function ScrollCard({
  card,
  index,
  scrollYProgress,
}: {
  card: (typeof ABOUT_CARDS)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const rotations = [-9, 0, 9];
  const offsetPercents = [-15, 0, 15];
  const zIndexes = [2, 3, 1];

  // Departure order: center (1) first, left (0) second, right (2) stays
  const departOrder = [1, 0, 2];
  const order = departOrder.indexOf(index);
  const isLastCard = order === 2;

  // Cards 0 & 1: depart over 40% each, spaced by 40%
  // Last card: center/straighten during second card's departure, then tilt
  const start = isLastCard ? 0.4 : order * 0.4;
  const end = isLastCard ? 0.8 : start + 0.4;

  const flattenStart = Math.max(0, start - 0.12);

  // Rotation: straighten before departure, last card tilts slightly left after centering
  const rotate = useTransform(
    scrollYProgress,
    isLastCard
      ? [flattenStart, start, 0.9]
      : [flattenStart, start, end],
    isLastCard
      ? [rotations[index], 0, -3]
      : [rotations[index], 0, 0]
  );

  // Animate horizontal offset to center (0%)
  const animatedOffset = useTransform(
    scrollYProgress,
    [flattenStart, start],
    [offsetPercents[index], 0]
  );
  const left = useMotionTemplate`calc(50% + ${animatedOffset}% - min(13rem, max(10rem, 22.5%)))`;

  // Only non-last cards scroll up off-screen
  const y = useTransform(
    scrollYProgress,
    [start, end],
    isLastCard ? ["0vh", "0vh"] : ["0vh", "-120vh"]
  );

  return (
    <motion.div
      className="absolute top-1/2 bg-white rounded-3xl overflow-hidden shadow-lg p-4"
      style={{
        width: "min(26rem, max(20rem, 45%))",
        left,
        marginTop: "min(-15rem, -12rem)",
        zIndex: zIndexes[index],
        rotate,
        y,
      }}
    >
      <div className="relative aspect-4/3">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-medium mb-2">{card.title}</h3>
        <p className="text-sm text-grey-400 leading-relaxed">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-brand-yellow text-brand-black relative overflow-x-clip">
      {/* Text content — scrolls normally */}
      <div className="py-25 max-md:py-16 max-sm:py-10">
        <div className="px-15 max-md:px-6">
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
                className="text-6xl max-md:text-5xl max-sm:text-5xl font-medium leading-[1.1] tracking-[-0.04em] max-w-200"
              >
                Experience innovative architecture that transforms your vision
              </motion.h2>

              <div className="h-6" />

              <motion.p
                variants={fadeInUp}
                className="text-lg max-w-lg opacity-80"
              >
                We craft inspiring spaces that blend cutting-edge design with enduring functionality, turning your vision into reality.
              </motion.p>

              <div className="h-8" />

              <motion.div variants={fadeInUp}>
                <Button href="#" variant="secondary">
                  Learn more
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* Cards scroll area — tall section with sticky viewport */}
      <div ref={cardsRef} className="h-[140vh] relative">
        <div className="sticky top-0 h-screen">
          <div className="px-15 max-md:px-6 h-full">
            <Container className="h-full">
              <div className="relative h-full">
                {ABOUT_CARDS.map((card, i) => (
                  <ScrollCard
                    key={card.title}
                    card={card}
                    index={i}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
