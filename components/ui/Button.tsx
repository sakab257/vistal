"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ArrowIcon from "./ArrowIcon";

interface ButtonProps {
  children: string;
  href?: string;
  variant?: "primary" | "secondary" | "white";
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  type,
  onClick,
}: ButtonProps) {
  const isWhite = variant === "white";
  const isSecondary = variant === "secondary";

  const wrapperClasses = `
    group inline-flex items-center gap-2 rounded-full px-5 py-3
    transition-all duration-300 cursor-pointer
    ${isWhite ? "bg-white text-brand-black" : ""}
    ${isSecondary ? "bg-grey-800 text-white" : ""}
    ${!isWhite && !isSecondary ? "bg-white text-brand-black" : ""}
  `;

  const iconClasses = `
    flex items-center justify-center w-8 h-8 rounded-full
    transition-all duration-300
    ${isWhite ? "bg-brand-black text-white" : ""}
    ${isSecondary ? "bg-brand-yellow text-brand-black" : ""}
    ${!isWhite && !isSecondary ? "bg-brand-yellow text-brand-black" : ""}
  `;

  const content = (
    <>
      <span className="text-base font-normal">{children}</span>
      <motion.div
        className={iconClasses}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowIcon className="w-4 h-4" />
      </motion.div>
    </>
  );

  if (type) {
    return (
      <button type={type} onClick={onClick} className={wrapperClasses}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={wrapperClasses}>
      {content}
    </Link>
  );
}
