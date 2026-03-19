"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import { FAQS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-dashed border-grey-200/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
      >
        <span className={`text-xl max-md:text-lg font-normal transition-colors pr-8 ${isOpen ? "text-brand-black" : "text-grey-400 group-hover:text-brand-black"}`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`text-2xl shrink-0 transition-colors ${isOpen ? "text-brand-black" : "text-grey-400"}`}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-base text-grey-400 leading-relaxed pb-6 max-w-160">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white text-brand-black">
      <div className="py-25 max-md:py-16 max-sm:py-10">
        <div className="px-15 max-md:px-6">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-8 md:gap-16"
            >
              <motion.div variants={fadeInUp}>
                <Tag>About Vistal</Tag>
              </motion.div>

              <div>
                <motion.h2
                  variants={fadeInUp}
                  className="text-[4.5rem] max-md:text-[3rem] max-sm:text-[2.25rem] font-medium leading-[1.1] tracking-[-0.04em] mb-12 max-md:mb-8"
                >
                  Frequently asked questions
                </motion.h2>

                <motion.div variants={fadeInUp}>
                  {FAQS.map((faq, i) => (
                    <FaqItem
                      key={i}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === i}
                      onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
