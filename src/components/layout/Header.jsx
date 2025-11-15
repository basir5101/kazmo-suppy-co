"use client"; // This component needs interactivity (state for mobile menu)

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; // Using react-icons

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, staggerChildren: 0.05 },
    },
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-black/10 bg-brand-white/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo/Name [cite: 25] */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold font-montserrat text-brand-black"
            >
              Käzmo Supply Co
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-montserrat text-sm font-medium text-brand-black/70 transition-colors duration-200 hover:text-brand-black"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/request-catalog"
              className="ml-4 inline-flex items-center justify-center rounded-lg border border-brand-black bg-brand-black px-4 py-2 text-sm font-medium text-brand-white shadow-sm transition-all duration-200 ease-in-out hover:bg-transparent hover:text-brand-black"
            >
              Request Catalog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-black/70 hover:text-brand-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-olive"
              aria-label="Open main menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <HiOutlineX className="block h-6 w-6" />
              ) : (
                <HiOutlineMenuAlt3 className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel (Animated with Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="border-t border-brand-black/5 md:hidden"
          >
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navItems.map((item) => (
                <motion.div variants={mobileNavItemVariants} key={item.name}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium font-montserrat text-brand-black/70 hover:bg-brand-gray/50 hover:text-brand-black"
                    onClick={() => setIsMobileMenuOpen(false)} // Close on click
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileNavItemVariants} className="pt-2">
                <Link
                  href="/request-catalog"
                  className="block w-full rounded-md bg-brand-black px-3 py-2 text-center text-base font-medium text-brand-white shadow-sm hover:bg-brand-black/80"
                  onClick={() => setIsMobileMenuOpen(false)} // Close on click
                >
                  Request Catalog
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
