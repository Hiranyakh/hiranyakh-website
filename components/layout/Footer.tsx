"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#081F36] text-white">

      <Container className="py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold">
              Hiranyakh's Wellness
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Helping individuals and families build healthier lives
              through evidence-based nutrition, education and sustainable
              lifestyle transformation.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">

              <li><Link href="/">Home</Link></li>

              <li><Link href="#mission">About</Link></li>

              <li><Link href="#services">Services</Link></li>

              <li><Link href="#ebook">eBook</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-slate-300">

              <li>Weight Loss</li>

              <li>Diabetes Management</li>

              <li>Gut Health</li>

              <li>PCOS</li>

              <li>Fatty Liver</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-slate-300">

              <p>Kolkata, India</p>

              <p>📧 connect@hiranyakhchatterjee.com</p>

              <p>📱 +91 99031 19806</p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-slate-700" />

        {/* Brand Promise */}

        <div className="mx-auto max-w-4xl text-center">

          <h3 className="text-2xl font-bold">
            The Hiranyakh Wellness Promise
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-300">

            Every recommendation is grounded in science,
            delivered with compassion, and designed to support
            sustainable health through lasting lifestyle change.

          </p>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-700 pt-8 text-sm text-slate-400 lg:flex-row">

          <p>
            © 2026 Hiranyakh's Wellness. All rights reserved.
          </p>

          <p>
            Designed with ❤️ for healthier lives.
          </p>

        </div>

      </Container>

    </footer>
  );
}