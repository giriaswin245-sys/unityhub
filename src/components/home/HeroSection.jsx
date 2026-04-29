import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chart-4/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>The future of community management</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Connect,{" "}
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-4 bg-clip-text text-transparent">
              Collaborate,
            </span>
            <br />
            Govern
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Build thriving communities with powerful tools for communication,
            democratic voting, and seamless collaboration — all in one beautiful platform.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/dashboard">
              <Button
                size="lg"
                className="rounded-2xl px-8 h-13 text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all group"
              >
                Join Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/organisations">
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-8 h-13 text-base border-2 hover:bg-secondary"
              >
                Create Organisation
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-card bg-gradient-to-br from-primary/60 to-chart-2/60"
                  style={{ zIndex: 5 - i }}
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold">2,400+</p>
              <p className="text-xs text-muted-foreground">Active members</p>
            </div>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            {/* Mock dashboard cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-card/90 backdrop-blur-sm rounded-3xl border border-border/50 p-6 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">U</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">UnityHub Dashboard</p>
                  <p className="text-xs text-muted-foreground">Live Activity</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Members", val: "2.4k" },
                  { label: "Active", val: "892" },
                  { label: "Posts", val: "156" },
                ].map((s) => (
                  <div key={s.label} className="bg-secondary/80 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold">{s.val}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {[85, 62, 45].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 rounded-full bg-secondary flex-1">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-chart-2"
                        style={{ width: `${w}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8">{w}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-8 -left-8 bg-card rounded-2xl border border-border/50 p-4 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-chart-3 animate-pulse" />
                <span className="text-sm font-medium">12 members online</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}