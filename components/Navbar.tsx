"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo + Brand */}

        <div className="flex items-center gap-4">

          <Image
            src="/logos/logo.png"
            alt="Hiranyakh Chatterjee"
            width={60}
            height={60}
          />

          <div>

            <h1 className="text-2xl font-bold text-[#0F4C81]">
              Hiranyakh Chatterjee
            </h1>

            <p className="text-sm text-gray-600">
              Clinical Nutritionist • Wellness Coach • Business Mentor
            </p>

          </div>

        </div>

        {/* Menu */}

        <nav className="hidden lg:flex gap-8 font-medium">

          <a href="#" className="hover:text-[#10B981] transition">
            Home
          </a>

          <a href="#" className="hover:text-[#10B981] transition">
            About
          </a>

          <a href="#" className="hover:text-[#10B981] transition">
            Wellness
          </a>

          <a href="#" className="hover:text-[#10B981] transition">
            Financial Freedom
          </a>

          <a href="#" className="hover:text-[#10B981] transition">
            Blog
          </a>

          <a href="#" className="hover:text-[#10B981] transition">
            Contact
          </a>

        </nav>

        {/* CTA */}

        <button className="rounded-full bg-[#0F4C81] px-6 py-3 text-white font-semibold transition hover:bg-[#10B981]">
          Book Consultation
        </button>

      </div>
    </header>
  );
}