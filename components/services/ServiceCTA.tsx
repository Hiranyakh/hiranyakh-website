"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function ServiceCTA() {
  return (
    <section className="bg-gradient-to-r from-[#0F4C81] to-[#10B981] py-24 text-white">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-4xl font-extrabold lg:text-5xl">
              Your Transformation Starts Today
            </h2>

            <p className="mt-8 text-xl leading-9 text-white/90">
              You don't need another crash diet.
              You need a structured, science-based plan that fits your
              lifestyle and helps you create lasting results.
            </p>

            <div className="mt-12">
              <Button>
                Book Your Consultation
              </Button>
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
}