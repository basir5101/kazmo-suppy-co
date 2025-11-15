"use client"; // For Framer Motion

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variant for fading in from below
const fadeUpIn = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function AboutPreview() {
  return (
    <div className="overflow-hidden bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            className="lg:pr-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeUpIn}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="font-montserrat text-base font-semibold uppercase tracking-wide text-brand-olive">
              About Käzmo Supply Co
            </p>
            <h2 className="mt-2 font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Reliable Wholesale Partner
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Käzmo Supply Co is a New Jersey-based wholesale distributor
              specializing in compliant THCA flower, CBD hemp flower, and
              high-turnover smoke shop essentials.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="rounded-lg border border-border px-5 py-3 text-sm font-semibold leading-6 text-foreground transition-all duration-200 ease-in-out hover:border-foreground/70 hover:bg-foreground/5"
              >
                Learn More About Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="aspect-w-3 aspect-h-2 w-full"
            initial="hidden"
            whileInView="visible"
            variants={fadeUpIn}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/warehouse-interior.png"
              alt="A clean, modern, and organized warehouse interior."
              width={800}
              height={600}
              className="w-full rounded-lg object-cover object-center shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
