"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/cards/TestimonialCard";

import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <SectionTitle
            badge="SUCCESS STORIES"
            title="Real People."
            highlight="Real Transformations."
            description="Every health journey is unique. Here are a few inspiring stories from clients who embraced evidence-based nutrition and sustainable lifestyle changes."
          />
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={testimonial.name + index}
              delay={index * 0.15}
            >
              <TestimonialCard {...testimonial} />
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}