"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

type ServiceHeroProps = {
  badge: string;
  title: string;
  description: string;
};

export default function ServiceHero({
  badge,
  title,
  description,
}: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-28">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              {badge}
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              {title}
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              {description}
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Button>
                Book Consultation
              </Button>

              <button className="rounded-full border border-slate-300 px-8 py-4 font-semibold transition hover:border-emerald-500 hover:text-emerald-600">
                Learn More
              </button>

            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
}