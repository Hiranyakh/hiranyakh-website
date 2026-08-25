"use client";

import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0F4C81] via-[#1565A8] to-[#10B981] py-28">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <Container className="relative">

        <FadeIn>

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
              START TODAY
            </span>

            <h2 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-6xl">

              Your Health Journey
              <br />
              Begins With One Conversation

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">

              Whether your goal is weight loss, diabetes management,
              gut health, hormonal balance or overall wellness,
              I'm here to guide you with evidence-based nutrition
              and sustainable lifestyle changes.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Button>
                Book Consultation
              </Button>

              <Button variant="secondary">
                Chat on WhatsApp
              </Button>

            </div>

          </div>

        </FadeIn>

      </Container>

    </section>
  );
}