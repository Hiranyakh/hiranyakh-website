"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({
  program,
}: ProgramCardProps) {
  return (
    <Link href={program.slug}>

      <div className="group h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-[#10B981] hover:shadow-2xl">

        <div
          className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${program.color} text-4xl shadow-lg`}
        >
          {program.icon}
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          {program.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {program.description}
        </p>

        <div className="mt-8 flex items-center font-semibold text-[#10B981]">

          Explore Program

          <ArrowRight
            className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
            size={20}
          />

        </div>

      </div>

    </Link>
  );
}