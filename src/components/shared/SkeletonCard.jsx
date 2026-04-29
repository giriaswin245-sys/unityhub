import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard({ lines = 3 }) {
  return (
    <div className="bg-card rounded-2xl border border-border/50 p-6 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-xl" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className="h-3 w-full" style={{ width: `${100 - i * 15}%` }} />
      ))}
    </div>
  );
}