// import Footer from "@/components/layout/Footer"; // Make sure this file exists
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header"; // Make sure this file exists
import clsx from "clsx"; // We installed this earlier
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";

// Setup the BODY font (Lato)
// We will apply its .className to the <body> tag
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"], // Regular
  display: "swap",
  // No variable needed, this is our default
});

// Setup the HEADING font (Montserrat)
// We will use its .variable to create a utility class `font-montserrat`
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // This creates the CSS variable
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Käzmo Supply Co - Wholesale THCA & CBD Hemp Distribution",
  description:
    "Reliable supply for licensed retailers, smoke shops, and CBD stores.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // Apply the Montserrat variable to the <html> tag
      className={montserrat.variable}
    >
      <body
        className={clsx(
          lato.className, // This applies Lato as the default body font
          "flex min-h-screen flex-col" // Add our other layout classes
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
