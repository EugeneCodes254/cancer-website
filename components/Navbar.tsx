"use client"


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Our Pillars", href: "#pillars" },
  { label: "Soursop Initiative", href: "#soursop" },
  { label: "Blockchain", href: "#blockchain" },
  { label: "Impact", href: "#impact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-glass">
      <div className="container mx-auto flex items-center justify-between h-18 px-6 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <Image src={logo} alt="Cancer Free Foundation Logo" width={32} height={32} />
          <div className="flex flex-col">
            <span className="font-display text-lg tracking-tight text-foreground leading-tight">
              CFBF.
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground hidden sm:block">
              Cancer Free Foundation
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-light text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/donate"
            className="px-6 py-2.5 border border-gold/30 text-gold text-xs font-medium tracking-[0.1em] uppercase hover:bg-gold hover:text-gold-foreground transition-all duration-500"
          >
            Support Us
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-glass-heavy border-b border-glass overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-body font-light text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="px-5 py-3 border border-gold/30 text-gold font-body font-medium text-center text-sm uppercase tracking-widest"
              >
                Support Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


