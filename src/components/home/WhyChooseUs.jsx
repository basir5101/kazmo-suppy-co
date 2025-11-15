"use client"; // For Framer Motion

import { motion } from "framer-motion";
// Using professional icons from Tabler Icons (part of react-icons)
import { TbCertificate, TbSparkles, TbTag, TbTruck } from "react-icons/tb";

// --- Animation Variants ---

// Parent container to orchestrate stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Child item to fade in from below
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

// Variant for the section header
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

// --- Features Data ---
const features = [
  {
    name: "Compliant, Lab-Backed Flower",
    icon: <TbCertificate className="h-8 w-8 text-brand-olive" />,
  },
  {
    name: "Fast, Discreet Shipping",
    icon: <TbTruck className="h-8 w-8 text-brand-olive" />,
  },
  {
    name: "Wholesale-Only Pricing",
    icon: <TbTag className="h-8 w-8 text-brand-olive" />,
  },
  {
    name: "Curated, High-Demand Products",
    icon: <TbSparkles className="h-8 w-8 text-brand-olive" />,
  },
];

export default function WhyChooseUs() {
  return (
    // Use a very light gray from our theme for the background
    <div className="bg-brand-gray/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeUpIn}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Retailers Choose Us
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            A partner focused on your {`store's`} success.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants} // Stagger children
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="text-center"
              variants={itemVariants} // Each item fades up
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mt-6 font-montserrat text-lg font-semibold leading-6 text-foreground">
                {feature.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
