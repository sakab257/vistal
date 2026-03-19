"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(value);

  const match = value.match(/^([^0-9]*)([0-9]+\.?[0-9]*)(.*)$/);

  useEffect(() => {
    if (!inView || !match) return;
    const prefix = match[1];
    const numStr = match[2];
    const trailing = match[3];
    const target = parseFloat(numStr);
    const hasDecimal = numStr.includes(".");
    const decimalPlaces = hasDecimal ? numStr.split(".")[1].length : 0;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setDisplay(`${prefix}${hasDecimal ? current.toFixed(decimalPlaces) : Math.round(current)}${trailing}`);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}
