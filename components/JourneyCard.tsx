"use client";

import { ArrowRight } from "lucide-react";

type JourneyCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  buttonText: string;
};

export default function JourneyCard({
  icon,
  title,
  description,
  items,
  buttonText,
}: JourneyCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0F4C81] hover:shadow-2xl">

      <div className="mb-6 inline-flex rounded-2xl bg-blue-50 p-4 text-[#0F4C81]">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

      <ul className="mt-6 space-y-3">

        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-gray-700"
          >
            ✓ {item}
          </li>
        ))}

      </ul>

      <button className="mt-8 flex items-center gap-2 font-semibold text-[#0F4C81] transition group-hover:gap-3">

        {buttonText}

        <ArrowRight size={18} />

      </button>

    </div>
  );
}