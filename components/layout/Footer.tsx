import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { FOOTER_LINKS } from "@/lib/constants";

interface FooterProps {
  variant?: "base" | "no-sticky";
}

export default function Footer({ variant = "base" }: FooterProps) {
  return (
    <footer
      className={`bg-brand-black text-white relative ${
        variant === "base" ? "sticky bottom-0 z-0" : ""
      }`}
    >
      <div className="py-15" />
      <div className="px-15 max-md:px-6">
        <Container>
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-12">
            {/* Logo + description */}
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Image
                  src="/images/brand/logo.avif"
                  alt="Vistal"
                  width={120}
                  height={32}
                  className="h-6 w-auto"
                />
              </Link>
              <p className="text-grey-200 text-base max-w-lg leading-relaxed">
                Bring your architectural projects to life with a template that
                puts your work front and center.
              </p>
            </div>

            {/* Link columns */}
            {FOOTER_LINKS.map((group, gi) => (
              <div key={gi} className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-grey-200 text-base hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Spacer */}
          <div className="h-24 max-md:h-10 max-sm:h-8" />

          {/* Bottom - Large Vistal SVG */}
          <div className="w-full">
            <Image
              src="/images/brand/vistal-footer.svg"
              alt="Vistal"
              width={1320}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </Container>
      </div>
      <div className="py-15" />
    </footer>
  );
}
