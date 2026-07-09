"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLinks from "./NavLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-xl p-2 text-[#0F4C81] transition hover:bg-slate-100"
        aria-label="Toggle Menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {open && (
        <div className="absolute left-0 top-20 w-full border-t border-slate-200 bg-white shadow-xl">
          <nav className="flex flex-col gap-2 p-6">
            <NavLinks mobile onClick={() => setOpen(false)} />

            <button className="mt-4 rounded-full bg-[#0F4C81] px-6 py-3 font-semibold text-white transition hover:bg-[#10B981]">
              Book Consultation
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}