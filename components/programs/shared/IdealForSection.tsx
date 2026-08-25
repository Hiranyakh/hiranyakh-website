"use client";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

interface IdealForSectionProps {
  data: {
    badge: string;
    title: string;
    subtitle: string;
    people: string[];
  };
}

export default function IdealForSection({
  data,
}: IdealForSectionProps) {
  return (
    <Section background="bg-slate-50">
      <FadeIn>
        <SectionHeader
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.people.map((person) => (
            <div
              key={person}
              className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-4 text-3xl text-emerald-600">✓</div>

              <h3 className="text-xl font-bold text-slate-900">
                {person}
              </h3>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}