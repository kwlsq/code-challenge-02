"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/connect", label: "Connect" },
  ];

  return (
    <nav className="items-center relative flex gap-0.5 rounded-full border text-sm border-[#E5E5E5] justify-between py-1 px-1 mx-auto my-6 max-w-96 md:text-xl md:w-md md:p-2 md:max-w-md">
      {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link key={href} href={href} className="relative px-4 py-2">
            {isActive && (
              <motion.div
                layoutId="active"
                className="absolute inset-0 bg-[var(--text-default)] rounded-full"
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 ${
                isActive ? "text-white" : "text-[var(--text-default)]"
              }`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
