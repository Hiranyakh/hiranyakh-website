"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Heart,
  Stethoscope,
} from "lucide-react";

interface FloatingCardProps {
  icon: "trophy" | "heart" | "stethoscope";
  title: string;
  subtitle: string;
  className?: string;
}

export default function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
}: FloatingCardProps) {
  const icons = {
    trophy: Trophy,
    heart: Heart,
    stethoscope: Stethoscope,
  };

  const SelectedIcon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
        scale: 1,
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        w-52
        rounded-3xl
        border border-white/60
        bg-white/75
        backdrop-blur-xl
        shadow-2xl
        px-5
        py-5
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-105
        ${className}
      `}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F4C81]/10">
        <SelectedIcon className="h-6 w-6 text-[#0F4C81]" />
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {subtitle}
      </p>
    </motion.div>
  );
}