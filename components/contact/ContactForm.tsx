"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("success");
  }

  return (
    <section className="bg-white text-brand-black">
      <div className="py-[6.25rem] max-md:py-16 max-sm:py-10">
        <div className="px-[3.75rem] max-md:px-6">
          <Container size="small">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col"
            >
              {/* Title */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center gap-4"
              >
                <Tag>Contact</Tag>
                <h2 className="text-[2.5rem] max-md:text-[1.75rem] font-medium leading-[1.2] tracking-[-0.03em]">
                  Connect with us
                </h2>
                <p className="text-base text-grey-400">
                  Share your vision with us.
                </p>
              </motion.div>

              <div className="h-12" />

              {/* Form */}
              {status === "idle" && (
                <motion.form
                  variants={fadeInUp}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="full-name" className="text-sm font-medium">
                      Full name
                    </label>
                    <input
                      id="full-name"
                      name="full-name"
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full rounded-xl border border-grey-200/50 bg-grey-100 px-4 py-3 text-base text-brand-black placeholder:text-grey-300 outline-none focus:border-brand-black/20 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email-address"
                      className="text-sm font-medium"
                    >
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email-address"
                      type="email"
                      placeholder="Email address"
                      required
                      className="w-full rounded-xl border border-grey-200/50 bg-grey-100 px-4 py-3 text-base text-brand-black placeholder:text-grey-300 outline-none focus:border-brand-black/20 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      required
                      className="w-full rounded-xl border border-grey-200/50 bg-grey-100 px-4 py-3 text-base text-brand-black placeholder:text-grey-300 outline-none focus:border-brand-black/20 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="project-message"
                      className="text-sm font-medium"
                    >
                      Project information
                    </label>
                    <textarea
                      id="project-message"
                      name="project-message"
                      placeholder="Project information"
                      required
                      maxLength={5000}
                      rows={5}
                      className="w-full rounded-xl border border-grey-200/50 bg-grey-100 px-4 py-3 text-base text-brand-black placeholder:text-grey-300 outline-none focus:border-brand-black/20 transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <motion.button
                      type="submit"
                      whileHover="hover"
                      className="inline-flex items-center gap-3 rounded-full bg-grey-800 px-6 py-3 text-sm font-medium text-white cursor-pointer transition-colors hover:bg-brand-black"
                    >
                      <span>Submit</span>
                      <motion.span
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-yellow text-brand-black"
                        variants={{
                          hover: { scale: 1.1 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowIcon />
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.form>
              )}

              {/* Success message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center"
                >
                  <p className="text-base text-green-800">
                    Thank you! Your submission has been received!
                  </p>
                </motion.div>
              )}

              {/* Error message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-red-50 border border-red-200 p-8 text-center"
                >
                  <p className="text-base text-red-800">
                    Oops! Something went wrong while submitting the form.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
