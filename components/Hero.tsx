"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:flex lg:items-center lg:justify-between">

        {/* Left Side */}
        <div className="max-w-2xl">

          <FadeIn>

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Clinical Nutritionist • Wellness Coach • Business Mentor
            </span>

          </FadeIn>

          <FadeIn delay={0.2}>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">

              Transform Your
              <span className="text-[#0F4C81]"> Health.</span>

              <br />

              Build
              <span className="text-[#10B981]"> Sustainable Wealth.</span>

              <br />

              Live Financially Free.

            </h1>

          </FadeIn>

          <FadeIn delay={0.4}>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

              Helping individuals achieve lasting health through
              evidence-based nutrition while building sustainable
              wealth through education, mentorship and proven systems.

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

              <span>✔ Evidence-Based</span>
              <span>✔ Personalized Coaching</span>
              <span>✔ Holistic Wellness</span>

            </div>

          </FadeIn>

        </div>

        {/* Right Side */}

        <FadeIn delay={0.4}>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="mt-16 flex justify-center lg:mt-0"
          >

            <div className="rounded-[40px] bg-white p-5 shadow-2xl">

              <Image
                src="/images/hiranyakh-v2.png"
                alt="Hiranyakh Chatterjee"
                width={470}
                height={580}
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