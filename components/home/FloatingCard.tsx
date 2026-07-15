"use client";

import { motion } from "framer-motion";

type FloatingCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
};

export default function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`
        absolute
        rounded-3xl
        border
        border-white/30
        bg-white/70
        backdrop-blur-xl
        shadow-2xl
        p-5
        w-56
        ${className}
      `}
    >
      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10B981]/10 text-2xl">
          {icon}
        </div>

        <div>

          <h4 className="font-bold text-slate-900">
            {title}
          </h4>

          <p className="text-sm text-slate-500">
            {subtitle}
          </p>

        </div>

      </div>
    </motion.div>
  );
}