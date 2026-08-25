"use client";

import { ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <GlassCard className="group h-full p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 p-4 text-[#0F4C81] transition-transform duration-300 group-hover:rotate-6">

        <Icon size={34} />

      </div>

      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-gray-600">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-semibold text-[#0F4C81]">

        Learn More

        <ArrowRight
          className="transition-transform duration-300 group-hover:translate-x-2"
          size={18}
        />

      </div>

    </GlassCard>
  );
}