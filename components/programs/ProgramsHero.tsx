"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function ProgramsHero() {
  return (
    <section className="bg-gradient-to-br from-[#0F4C81] via-[#145A92] to-[#10B981] py-28 text-white">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
              HEALTH TRANSFORMATION PROGRAMS
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
              Your Journey to Better Health Starts Here
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/90">
              Discover evidence-based nutrition programs designed to help you
              lose weight, manage chronic conditions, improve gut health and
              build sustainable lifestyle habits for lifelong wellness.
            </p>

            <div className="mt-12">
              <Button>
                Book Consultation
              </Button>
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
}