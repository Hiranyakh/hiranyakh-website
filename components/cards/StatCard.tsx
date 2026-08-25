"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
};

export default function StatCard({
  value,
  suffix = "",
  label,
  icon,
}: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#0F4C81] hover:shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100"></div>

      {/* Icon */}
      <div className="relative mb-5 flex justify-center text-[#0F4C81] transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>

      {/* Counter */}
      <h3 className="relative text-4xl font-extrabold text-[#0F4C81]">
        <AnimatedCounter
          value={value}
          suffix={suffix}
        />
      </h3>

      {/* Label */}
      <p className="relative mt-3 text-gray-600">
        {label}
      </p>

    </div>
  );
}