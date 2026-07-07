"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import EbookCard from "@/components/cards/EbookCard";

import { ebook } from "@/data/ebook";

export default function EbookSection() {
  return (
    <section
      id="ebook"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <SectionTitle
            badge="FEATURED EBOOK"
            title="Learn Better."
            highlight="Live Healthier."
            description="Discover practical, evidence-based nutrition strategies you can start applying from day one."
          />
        </FadeIn>

        <div className="mt-20">

          <FadeIn delay={0.2}>
            <EbookCard {...ebook} />
          </FadeIn>

        </div>

      </div>
    </section>
  );
}