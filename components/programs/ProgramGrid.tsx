import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ProgramCard from "./ProgramCard";
import { programs } from "@/data/programs";

export default function ProgramGrid() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <FadeIn>
          <div className="mb-16 text-center">

            <span className="rounded-full bg-[#10B981]/10 px-4 py-2 text-sm font-semibold text-[#10B981]">
              OUR PROGRAMS
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
              Choose Your Health Transformation
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Every health journey is unique. Explore our evidence-based
              clinical nutrition programs designed to help you achieve lasting,
              sustainable results.
            </p>

          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => (
            <FadeIn
              key={program.id}
              delay={index * 0.1}
            >
              <ProgramCard program={program} />
            </FadeIn>
          ))}
        </div>

      </Container>
    </section>
  );
}