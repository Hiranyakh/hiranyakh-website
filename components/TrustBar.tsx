"use client";

import {
  Heart,
  Stethoscope,
  Award,
  BookOpen,
} from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";
import StatCard from "@/components/cards/StatCard";

export default function TrustBar() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <StatCard
              value={500}
              suffix="+"
              label="Lives Transformed"
              icon={<Heart size={42} />}
            />

            <StatCard
              value={1000}
              suffix="+"
              label="Consultations"
              icon={<Stethoscope size={42} />}
            />

            <StatCard
              value={10}
              suffix="+"
              label="Years Experience"
              icon={<Award size={42} />}
            />

            <StatCard
              value={100}
              suffix="%"
              label="Evidence-Based"
              icon={<BookOpen size={42} />}
            />

          </div>

        </FadeIn>

      </div>
    </section>
  );
}