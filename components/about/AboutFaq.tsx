"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import { ABOUT_FAQS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dashed border-grey-200/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
      >
        <span className="text-xl max-md:text-lg font-normal text-grey-400 group-hover:text-brand-black transition-colors pr-8">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl text-grey-400 flex-shrink-0"
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
            <p className="text-base text-grey-400 leading-relaxed pb-6 max-w-[40rem]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutFaq() {
  return (
    <section className="bg-white text-brand-black">
      <div className="py-[6.25rem] max-md:py-16 max-sm:py-10">
        <div className="px-[3.75rem] max-md:px-6">
          <Container>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16"
            >
              <motion.div variants={fadeInUp}>
                <Tag>About vistal</Tag>
              </motion.div>

              <div>
                <motion.h2
                  variants={fadeInUp}
                  className="text-[4.5rem] max-md:text-[3rem] max-sm:text-[2.25rem] font-medium leading-[1.1] tracking-[-0.04em] text-grey-300 mb-12 max-md:mb-8"
                >
                  Frequently asked questions
                </motion.h2>

                <motion.div variants={fadeInUp}>
                  {ABOUT_FAQS.map((faq, i) => (
                    <FaqItem
                      key={i}
                      question={faq.question}
                      answer={faq.answer}
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
