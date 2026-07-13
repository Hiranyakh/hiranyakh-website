"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { ProgramData } from "@/data/programs/types";

interface ProgramHeroProps {
  data: ProgramData;
}

export default function ProgramHero({ data }: ProgramHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Left Content */}
          <FadeIn>
            <div>

              <span className="rounded-full bg-[#10B981]/10 px-4 py-2 text-sm font-semibold text-[#10B981]">
                {data.badge}
              </span>

              <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                {data.title}
              </h1>

              <p className="mt-8 text-xl leading-9 text-slate-600">
                {data.subtitle}
              </p>

              <div className="mt-12">
                <Button>
                  Book Consultation
                </Button>
              </div>

            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center">

              <div className="overflow-hidden rounded-[40px] shadow-2xl">

                <Image
                  src={data.heroImage}
                  alt={data.title}
                  width={520}
                  height={650}
                  priority
                  className="object-cover"
                />

              </div>

            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}