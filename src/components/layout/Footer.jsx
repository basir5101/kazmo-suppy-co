import Link from "next/link";

// You can add social media links here if they ever have them
// const socialLinks = [
//   { name: 'Instagram', href: '#', icon: FaInstagram },
// ];

const footerNav = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Request Catalog", href: "/request-catalog" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-black/10 bg-brand-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          {/* Copyright & Email */}
          <div className="text-center sm:text-left">
            <p className="text-sm leading-6 text-brand-black/80">
              &copy; {new Date().getFullYear()} Käzmo Supply Co. All rights
              reserved.
            </p>
            <p className="mt-1 text-sm leading-6 text-brand-black/60">
              Email:{" "}
              <a
                href="mailto:orders@kazmosupplyco.com"
                className="hover:text-brand-black"
              >
                orders@kazmosupplyco.com
              </a>
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:mt-0">
            {footerNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-brand-black/70 transition-colors duration-200 hover:text-brand-black"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
