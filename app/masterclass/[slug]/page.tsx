import { notFound } from "next/navigation";
import { CheckCircle2, Clock3, Video, ShieldCheck } from "lucide-react";
import MasterclassForm from "@/components/masterclass/MasterclassForm";
import MasterclassPixel from "@/components/masterclass/MasterclassPixel";
import { getMasterclass, masterclasses } from "@/lib/masterclasses";

export function generateStaticParams() {
  return Object.keys(masterclasses).map((slug) => ({ slug }));
}

export default async function MasterclassPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const masterclass = getMasterclass(slug);

  if (!masterclass) notFound();

  const isWeightLoss = slug === "weight-loss";

  return (
    <>
      <MasterclassPixel />

      <main className="min-h-screen bg-[#F7FAFC] text-[#081F36]">

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="bg-[#081F36] text-white">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">

            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

              {/* VIDEO */}
              {isWeightLoss ? (
                 <div className="-mt-8 lg:-mt-12">
                  <div className="overflow-hidden rounded-[1.75rem] bg-black shadow-2xl ring-1 ring-white/10">
                    <video
                      className="aspect-video w-full"
                      controls
                      playsInline
                      preload="metadata"
                    >
                      <source
                        src="/videos/weight-management-masterclass.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video element.
                    </video>
                  </div>

                  <p className="mt-3 text-center text-xs text-slate-400">
                    Watch the short introduction before registering.
                  </p>
                </div>
              ) : (
                <div className="flex min-h-[280px] items-center justify-center rounded-[1.75rem] bg-white/5 p-8 ring-1 ring-white/10">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                      <Video className="h-8 w-8 text-emerald-300" />
                    </div>

                    <p className="mt-5 text-lg font-bold">
                      Personalised 1-to-1 Session
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Your masterclass is designed around your individual
                      nutrition and lifestyle priorities.
                    </p>
                  </div>
                </div>
              )}

              {/* HERO COPY */}
              <div>
                <span className="inline-flex rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-emerald-300">
                  {masterclass.eyebrow}
                </span>

                <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
                  {masterclass.headline}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  {masterclass.subheadline}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 ring-1 ring-white/10">
                    <Clock3 className="h-4 w-4 text-emerald-300" />
                    1-to-1 session
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 ring-1 ring-white/10">
                    <Video className="h-4 w-4 text-emerald-300" />
                    Online
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 ring-1 ring-white/10">
                    <ShieldCheck className="h-4 w-4 text-emerald-300" />
                    Personalised guidance
                  </span>
                </div>

                <a
                  href="#register"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3.5 font-bold text-[#081F36] transition hover:bg-emerald-400"
                >
                  Reserve Your Session
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            REGISTRATION
        ========================================================= */}
        <section id="register" className="bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">

            <div className="text-center">
              <span className="text-xs font-bold tracking-[0.2em] text-emerald-700">
                REGISTRATION
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-[#081F36] sm:text-4xl">
                Reserve Your 1-to-1 {masterclass.shortName} Session
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Enter your details below. After registration, you'll be taken
                to the scheduling page to choose a convenient time.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-xl rounded-[2rem] bg-white p-6 shadow-[0_25px_80px_rgba(15,76,129,.13)] ring-1 ring-slate-200 sm:p-8">
              <MasterclassForm masterclass={masterclass} />
            </div>

          </div>
        </section>

        {/* =========================================================
            PERSONAL TRANSFORMATION — WEIGHT MANAGEMENT ONLY
        ========================================================= */}
        {isWeightLoss && (
          <section className="bg-emerald-50">
            <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">

              <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">

                {/* BEFORE / AFTER */}
                <div>

                  <div className="grid grid-cols-2 gap-4 sm:gap-6">

                    {/* BEFORE */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src="/images/weight-before.jpg"
                          alt="Hiranyakh before his personal weight-management journey"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="px-4 py-4 text-center sm:px-5">
                        <p className="text-xs font-bold tracking-[0.18em] text-slate-500">
                          BEFORE
                        </p>

                        <p className="mt-1 text-2xl font-extrabold text-[#081F36] sm:text-3xl">
                          84.2 kg
                        </p>
                      </div>
                    </div>

                    {/* AFTER */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-emerald-100">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src="/images/weight-after.jpg"
                          alt="Hiranyakh after his personal weight-management journey"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="px-4 py-4 text-center sm:px-5">
                        <p className="text-xs font-bold tracking-[0.18em] text-emerald-600">
                          AFTER
                        </p>

                        <p className="mt-1 text-2xl font-extrabold text-[#081F36] sm:text-3xl">
                          67.5 kg
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center rounded-full bg-[#081F36] px-6 py-3 text-base font-bold text-white sm:text-lg">
                      84.2 kg
                      <span className="mx-3 text-emerald-300">→</span>
                      67.5 kg
                    </div>

                    <p className="mt-3 text-sm font-semibold text-slate-600">
                      A 16.7 kg personal transformation over 90 days
                    </p>
                  </div>

                </div>

                {/* STORY */}
                <div>
                  <span className="text-sm font-bold tracking-[0.18em] text-emerald-700">
                    MY PERSONAL JOURNEY
                  </span>

                  <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#081F36] sm:text-4xl">
                    I didn't just study nutrition. I experienced the journey
                    myself.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600">
                    My own journey from 84.2 kg to 67.5 kg over 90 days taught
                    me that sustainable weight management is about much more
                    than simply following another restrictive diet.
                  </p>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    It made me look more closely at food choices, routines,
                    lifestyle patterns and the practical factors that
                    influence an individual's journey.
                  </p>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Today, I combine that personal experience with my
                    professional nutrition knowledge to help people approach
                    weight management with greater structure, understanding
                    and sustainability.
                  </p>

                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    This is my personal experience and is not a guarantee of a
                    particular result for any individual.
                  </p>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            WHAT THIS MASTERCLASS IS ABOUT
        ========================================================= */}
        <section className="bg-[#F7FAFC]">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-emerald-700">
                  WHAT WE'LL EXPLORE
                </span>

                <h2 className="mt-4 text-3xl font-extrabold text-[#081F36] sm:text-4xl">
                  {isWeightLoss
                    ? "A Practical Approach to Weight Management"
                    : `A Practical Approach to ${masterclass.shortName}`}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {masterclass.description}
                </p>

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  {masterclass.disclaimer}
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-8">
                <h3 className="text-xl font-bold text-[#081F36]">
                  Who it may be useful for
                </h3>

                <ul className="mt-5 space-y-4">
                  {masterclass.audience.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================
            OUTCOMES
        ========================================================= */}
        <section className="bg-[#081F36] text-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">

            <div className="text-center">
              <span className="text-xs font-bold tracking-[0.2em] text-emerald-300">
                WHAT YOU'LL WORK THROUGH
              </span>

              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Practical Nutrition & Lifestyle Direction
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                Use the session to understand your current situation,
                identify practical priorities and discuss appropriate next
                steps.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {masterclass.outcomes.map((item, i) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="text-sm font-bold text-emerald-300">
                    0{i + 1}
                  </span>

                  <p className="mt-3 font-semibold leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20">

            <h2 className="text-3xl font-extrabold text-[#081F36] sm:text-4xl">
              Ready to understand your own{" "}
              {masterclass.shortName.toLowerCase()} journey?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Reserve your 1-to-1 session and choose a convenient time for
              your personalised masterclass.
            </p>

            <a
              href="#register"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-[#0F4C81] px-8 py-4 font-bold text-white transition hover:bg-[#0B3A63]"
            >
              Reserve Your Session
            </a>

          </div>
        </section>

      </main>
    </>
  );
}