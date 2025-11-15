"use client"; // We need this for Framer Motion animations

import { motion } from "framer-motion";
import Link from "next/link";

// --- Animation Variants for Framer Motion ---

// Parent container variant to orchestrate children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delays each child's animation
    },
  },
};

// Child item variant for fading in from below
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // Smooth, spring-like motion
      damping: 15,
      stiffness: 100,
    },
  },
};

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        {/* This is the main animation container.
          It starts 'hidden' and animates to 'visible'.
          The `variants` prop tells it how to orchestrate its children.
        */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Animated H1 (Heading) */}
          <motion.h1
            className="font-montserrat text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Wholesale THCA & CBD Hemp Distribution
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl"
            variants={itemVariants}
          >
            Reliable supply for licensed retailers, smoke shops, and CBD stores.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            variants={itemVariants}
          >
            <Link
              href="/request-catalog"
              className="rounded-lg bg-brand-black px-5 py-3 text-sm font-semibold text-brand-white shadow-sm transition-all duration-200 ease-in-out hover:bg-brand-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black"
            >
              Request Catalog
            </Link>
            <Link
              href="/products"
              className="rounded-lg border border-border px-5 py-3 text-sm font-semibold leading-6 text-foreground transition-all duration-200 ease-in-out hover:border-foreground/70 hover:bg-foreground/5"
            >
              View Products <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
