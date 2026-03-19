"use client";

import Link from "next/link";
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
    group inline-flex items-center gap-2 rounded-full px-5 py-3 hover:scale-105 active:scale-95
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
      <div className={iconClasses + " overflow-hidden relative"}>
        {/* Current arrow — slides out to the right on hover */}
        <ArrowIcon className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-8" />
        {/* Incoming arrow — slides in from the left on hover */}
        <ArrowIcon className="w-4 h-4 absolute inset-0 m-auto transition-transform duration-300 ease-out -translate-x-8 group-hover:translate-x-0" />
      </div>
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
