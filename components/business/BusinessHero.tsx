import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function BusinessHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 py-32">
      {/* Background Glows */}
      <div className="absolute -top-32 -right-20 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-100/20 blur-3xl" />

      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#0F4C81]">
              Business Mentor • Leadership Coach • Speaker
            </span>

            <h1 className="mt-8 max-w-3xl text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900 lg:text-7xl">
              Build a Business.
              <br />
              Create Financial Freedom.
              <br />
              Leave a Legacy.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Helping ambitious professionals, entrepreneurs and families
              develop leadership, health and sustainable business systems that
              create lasting impact.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/contact">
                <Button size="lg">
                  Start Your Journey
                </Button>
              </Link>

              <Link href="#programs">
                <Button variant="secondary" size="lg">
                  Explore Mentorship
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-4 text-sm font-medium text-slate-600">
              <span>✓ Business Coaching</span>
              <span>✓ Leadership Development</span>
              <span>✓ Wellness Integration</span>
              <span>✓ Personal Mentorship</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="absolute h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

            <Image
              src="/images/business/hero/hiranyakh.png"
              alt="Hiranyakh Chatterjee"
              width={650}
              height={800}
              priority
              className="relative z-10 h-auto w-full max-w-xl lg:translate-y-8"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}