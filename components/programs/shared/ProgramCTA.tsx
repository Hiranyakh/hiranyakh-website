"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { ProgramData } from "@/data/programs/types";

interface ProgramCTAProps {
  data: ProgramData;
}

export default function ProgramCTA({
  data,
}: ProgramCTAProps) {
  return (
    <section className="bg-gradient-to-r from-[#0F4C81] to-[#10B981] py-24 text-white">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-extrabold lg:text-5xl">
              {data.ctaTitle}
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/90">
              {data.ctaDescription}
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