"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function ProgramsCTA() {
  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>

          <div className="rounded-[40px] bg-gradient-to-r from-[#0F4C81] to-[#10B981] px-10 py-20 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-extrabold lg:text-5xl">
              Not Sure Which Program Is Right For You?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/90">
              Every individual is different. During your consultation,
              we'll understand your medical history, lifestyle, goals and
              health challenges before recommending the most suitable
              transformation program.
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