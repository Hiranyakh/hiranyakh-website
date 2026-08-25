"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";

import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <SectionTitle
            badge="SERVICES"
            title="Helping You Achieve"
            highlight="Better Health"
            description="Personalized evidence-based nutrition programs designed to improve your health, prevent disease and create lasting lifestyle transformation."
          />
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (

            <FadeIn
              key={service.title}
              delay={index * 0.1}
            >

              <ServiceCard {...service} />

            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}