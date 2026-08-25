"use client";

import { Trophy, Heart, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileTrustCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
w-full
rounded-3xl
border
border-white/60
bg-white/75
backdrop-blur-xl
shadow-2xl
p-5
lg:hidden
"
    >
      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
            <Trophy className="h-6 w-6 text-emerald-600" />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              17 kg Transformation
            </h3>

            <p className="text-sm text-slate-600">
              Personal Health Journey
            </p>
          </div>
        </div>

        <div className="h-px bg-slate-200" />

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
            <Stethoscope className="h-6 w-6 text-[#0F4C81]" />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              Clinical Nutrition
            </h3>

            <p className="text-sm text-slate-600">
              Science-Based Care
            </p>
          </div>
        </div>

        <div className="h-px bg-slate-200" />

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100">
            <Heart className="h-6 w-6 text-rose-500" />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              1:1 Coaching
            </h3>

            <p className="text-sm text-slate-600">
              Personalised Support
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}