"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Tag from "@/components/ui/Tag";
import { TEAM_MEMBERS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutTeams() {
  return (
    <section className="bg-white text-brand-black">
      <div className="py-[6.25rem] max-md:py-16 max-sm:py-10">
        <div className="px-[3.75rem] max-md:px-6">
          <Container>
            {/* Header */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div variants={fadeInUp}>
                <Tag>Teams</Tag>
              </motion.div>

              <div className="h-10" />

              <motion.h2
                variants={fadeInUp}
                className="text-[4rem] max-md:text-[2.5rem] max-sm:text-[2rem] font-medium leading-[1.1] tracking-[-0.04em]"
              >
                Teams
              </motion.h2>
            </motion.div>

            <div className="h-16 max-md:h-10" />

            {/* Team grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4"
            >
              {TEAM_MEMBERS.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="h-4" />
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">
                    {member.name}
                  </h3>
                  <div className="h-1" />
                  <p className="text-base text-grey-400">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
