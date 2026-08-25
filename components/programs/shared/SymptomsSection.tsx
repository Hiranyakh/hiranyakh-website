"use client";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

interface SymptomsSectionProps {
  data: {
    badge: string;
    title: string;
    subtitle: string;
    items: string[];
  };
}

export default function SymptomsSection({
  data,
}: SymptomsSectionProps) {
  return (
    <Section background="bg-slate-50">
      <FadeIn>
        <SectionHeader
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-4 text-3xl">⚠️</div>

              <h3 className="text-xl font-bold text-slate-900">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}