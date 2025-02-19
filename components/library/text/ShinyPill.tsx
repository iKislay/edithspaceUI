"use client"
import { ComponentPropsWithoutRef, FC } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export interface ShinyPillProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export const ShinyPill: FC<ShinyPillProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(
      "mx-auto max-w-md",

      "inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-50",

      // Shine gradient
      "bg-gradient-to-r from-transparent via-black/10 via-50% to-transparent  dark:via-white/10",
      className,
    )}>

    <motion.span
      className="bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)] bg-[length:200%_100%] bg-clip-text text-base font-medium text-transparent"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
      >
      {children}
      </motion.span>
      </div>
  );
};
