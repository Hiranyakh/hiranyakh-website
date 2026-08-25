"use client";

import GlassCard from "@/components/ui/GlassCard";

type Props = {
  name: string;
  location: string;
  message: string;
  result: string;
};

export default function TestimonialCard({
  name,
  location,
  message,
  result,
}: Props) {
  return (
    <GlassCard className="h-full p-8">

      <div className="text-5xl text-[#0F4C81]">
        "
      </div>

      <p className="mt-4 leading-8 text-gray-700 italic">
        {message}
      </p>

      <div className="mt-8">

        <h4 className="font-bold text-xl">
          {name}
        </h4>

        <p className="text-gray-500">
          {location}
        </p>

        <div className="mt-5 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">

          {result}

        </div>

      </div>

    </GlassCard>
  );
}