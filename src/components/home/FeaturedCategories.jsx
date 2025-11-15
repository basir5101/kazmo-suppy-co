"use client"; // We need this for Framer Motion's `whileInView`

import { motion } from "framer-motion";
import Image from "next/image"; // Use Next.js Image for optimization
import Link from "next/link";

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

// --- Category Data ---
const categories = [
  {
    name: "THCA Flower",
    href: "/products", // Update later if specific link exists
    imageSrc: "/images/cat1.png",
    imageAlt: "Placeholder for THCA flower category.",
  },
  {
    name: "CBD Flower",
    href: "/products", // Update later if specific link exists
    imageSrc: "/images/cat2.png",
    imageAlt: "Placeholder for CBD flower category.",
  },
  {
    name: "Accessories",
    href: "/products", // Update later if specific link exists
    imageSrc: "/images/cat3.png",
    imageAlt: "Placeholder for accessories category.",
  },
];

export default function FeaturedCategories() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Fades in when it scrolls into view
          viewport={{ once: true, amount: 0.5 }} // Triggers once
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Categories
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 lg:gap-x-8"
          initial="hidden"
          whileInView="visible" // Orchestrates children when container is in view
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              className="group relative"
              variants={itemVariants} // Each card animates in
            >
              <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg bg-brand-gray">
                <Image
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-montserrat text-xl font-semibold text-foreground">
                <Link href={category.href}>
                  {/* The span provides a larger, invisible click area */}
                  <span className="absolute inset-0 z-10" />
                  {category.name}
                </Link>
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
