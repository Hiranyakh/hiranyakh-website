"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"></div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 pt-32 pb-24 lg:flex-row">

        {/* Left Content */}

        <div className="max-w-xl">

          <FadeIn>

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Clinical Nutritionist • Wellness Coach • Business Mentor
            </span>

          </FadeIn>

          <FadeIn delay={0.2}>

            <h1 className="mt-8 text-4xl font-extrabold leading-[1.15] text-gray-900 lg:text-6xl">

              Transform Your{" "}
              <span className="text-[#0F4C81]">
                Health.
              </span>

              <br />

              Build{" "}
              <span className="text-[#10B981]">
                Sustainable Wealth.
              </span>

              <br />

              Achieve Financial Freedom.

            </h1>

          </FadeIn>

          <FadeIn delay={0.4}>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-600">

              Helping individuals transform their health through
              evidence-based nutrition while empowering them to build
              sustainable wealth, stronger lifestyles and long-term
              financial freedom.

            </p>

          </FadeIn>

          <FadeIn delay={0.6}>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button>
                Book Consultation
              </Button>

              <Button variant="secondary">
                Explore Programs
              </Button>

            </div>

          </FadeIn>

          <FadeIn delay={0.8}>

            <div className="mt-10 flex flex-wrap gap-6 text-gray-700">

              <span>✔ Evidence-Based Nutrition</span>

              <span>✔ Personalized Coaching</span>

              <span>✔ Business Mentorship</span>

            </div>

          </FadeIn>

        </div>

        {/* Right Content */}

        <FadeIn delay={0.5}>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-16 lg:mt-0"
          >

            <div className="rounded-[36px] bg-white/80 p-5 shadow-2xl backdrop-blur-md">

              <Image
                src="/images/hiranyakh-v2.png"
                alt="Hiranyakh Chatterjee"
                width={430}
                height={540}
                priority
                className="rounded-3xl"
              />

            </div>

          </motion.div>

        </FadeIn>

      </div>

    </section>
  );
}