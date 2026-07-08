"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { aboutHero } from "@/data/about";
<Link
  href="/"
  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-[#10B981] hover:text-[#10B981]"
>
  <ArrowLeft size={16} />
  Back to Home
</Link>
export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <FadeIn>
            <div>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
                {aboutHero.badge}
              </span>

              <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
                {aboutHero.title}
              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9 text-gray-600">
                {aboutHero.subtitle}
              </p>

              <div className="mt-12">
                <Button>
                  Book Consultation
                </Button>
              </div>

            </div>
          </FadeIn>

          {/* Right */}

          <FadeIn delay={0.2}>
            <div className="flex justify-center">

              <div className="overflow-hidden rounded-[40px] shadow-2xl">

                <Image
                  src={aboutHero.image}
                  alt="Hiranyakh Chatterjee"
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