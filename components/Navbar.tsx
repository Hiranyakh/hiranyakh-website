"use client";

import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Programs", href: "#programs" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logos/logo.png"
            alt="Hiranyakh"
            width={54}
            height={54}
            priority
          />

          <div>

            <h2 className="text-xl font-bold text-[#0F4C81]">
              HIRANYAKH
            </h2>

            <p className="text-xs text-gray-500">
              Clinical Nutrition • Wellness • Business
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-[#10B981]"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* CTA */}

        <button className="rounded-full bg-[#0F4C81] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#10B981] hover:shadow-lg">
          Book Consultation
        </button>

      </div>
    </header>
  );
}