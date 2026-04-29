import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function StatCard({ icon: Icon, label, value, trend, color = "primary", delay = 0 }) {
  const colorMap = {
    primary: "bg-primary/10 text-primary",
    blue: "bg-chart-1/10 text-chart-1",
    teal: "bg-chart-2/10 text-chart-2",
    green: "bg-chart-3/10 text-chart-3",
    purple: "bg-chart-4/10 text-chart-4",
    pink: "bg-chart-5/10 text-chart-5",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{label}</p>
          <p className="text-3xl font-bold mt-2 tracking-tight">{value}</p>
          {trend && (
            <p className="text-xs text-chart-3 font-medium mt-2 flex items-center gap-1">
              ↑ {trend}
            </p>
          )}
        </div>
        <div className={cn("p-3 rounded-xl", colorMap[color])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}