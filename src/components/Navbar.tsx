"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-stone-300 bg-stone-100/95 backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src="/logo/mclean-logo.png"
              alt="McLean Carpentry & Remodeling LLC logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-stone-900 md:text-base">
            McLean Carpentry & Remodeling LLC
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-sm text-stone-700 md:flex">
          <Link href="/services" className="hover:text-stone-900">
            Services
          </Link>
          <Link href="/our-work" className="hover:text-stone-900">
            Our work
          </Link>
          <Link href="/shop" className="hover:text-stone-900">
            Shop
          </Link>
          <Link href="/about" className="hover:text-stone-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-stone-900">
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:3098380007" // TODO: real phone
            className="rounded-full border border-amber-800/60 px-3 py-1.5 text-xs font-medium text-amber-900 hover:border-amber-800 hover:bg-amber-50"
          >
            Call now
          </a>
          <a
            href="https://mcleancarpentryremodelingllc.simplywise.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-700 px-3.5 py-1.5 text-xs font-semibold text-amber-50 shadow-sm hover:bg-amber-600"
          >
            Request a quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-stone-400 p-1.5 text-stone-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-stone-300 bg-stone-50 md:hidden">
          <div className="container mx-auto flex flex-col gap-3 px-4 py-3 text-sm text-stone-800">
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/our-work" onClick={() => setOpen(false)}>
              Our work
            </Link>
            <Link href="/shop" onClick={() => setOpen(false)}>
              Shop
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <div className="mt-2 flex gap-3">
              <a
                href="tel:5551234567" // TODO: real phone
                className="flex-1 rounded-full border border-stone-400 px-3 py-1.5 text-xs font-medium"
              >
                Call now
              </a>
              <a
                href="https://mcleancarpentryremodelingllc.simplywise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-amber-700 px-3 py-1.5 text-xs font-semibold text-amber-50"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
