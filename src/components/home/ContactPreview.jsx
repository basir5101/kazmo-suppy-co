"use client"; // For Framer Motion

import { motion } from "framer-motion";
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

export default function ContactPreview() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <motion.div
        className="mx-auto max-w-2xl text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeUpIn}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg leading-8 text-foreground/80">
          Set up your wholesale account today or contact us with any questions.
        </p>

        {/* Email as per the guide */}
        <p className="mt-6 text-base text-foreground/70">
          Email:{" "}
          <a
            href="mailto:orders@kazmosupplyco.com"
            className="font-medium text-brand-olive hover:text-brand-olive/80"
          >
            orders@kazmosupplyco.com
          </a>
        </p>

        {/* Primary Call to Action Button */}
        <div className="mt-8">
          <Link
            href="/request-catalog"
            className="rounded-lg bg-brand-black px-5 py-3 text-sm font-semibold text-brand-white shadow-sm transition-all duration-200 ease-in-out hover:bg-brand-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-black"
          >
            Request Wholesale Catalog
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
