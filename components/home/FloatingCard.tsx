"use client";

import { motion } from "framer-motion";

interface FloatingCardProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function FloatingCard({
  title,
  subtitle,
  className = "",
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.95,
      }}
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
        rounded-2xl
        border
        border-white/60
        bg-white/70
        px-5
        py-4
        shadow-xl
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        ${className}
      `}
    >
      <h3 className="text-xl font-bold text-[#0F4C81]">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-600">
        {subtitle}
      </p>
    </motion.div>
  );
}