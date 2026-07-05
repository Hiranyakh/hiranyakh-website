"use client";

import { ArrowRight } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#0F4C81] hover:shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100"></div>

      {/* Icon */}
      <div className="relative mb-6 inline-flex rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 p-4 text-[#0F4C81] transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative text-xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="relative mt-4 leading-7 text-gray-600">
        {description}
      </p>

      {/* Button */}
      <button className="relative mt-8 flex items-center gap-2 font-semibold text-[#0F4C81] transition-all duration-300 group-hover:gap-4">

        Learn More

        <ArrowRight size={18} />

      </button>

    </div>
  );
}