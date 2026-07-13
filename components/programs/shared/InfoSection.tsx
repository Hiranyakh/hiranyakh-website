"use client";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";

interface InfoSectionProps {
  data: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
}

export default function InfoSection({
  data,
}: InfoSectionProps) {
  return (
    <Section background="bg-white">
      <FadeIn>

        <SectionHeader
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-3">
          {data.cards.map((card) => (
            <InfoCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

      </FadeIn>
    </Section>
  );
}