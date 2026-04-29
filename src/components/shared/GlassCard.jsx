import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassCard({ children, className, hover = true, delay = 0, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={cn(
        "bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-shadow duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}