import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-chart-2 p-12 md:p-16 text-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to unite your community?
          </h2>
          <p className="text-white/80 mt-4 max-w-lg mx-auto text-lg">
            Join thousands of organisations already using UnityHub to connect, collaborate, and govern together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/dashboard">
              <Button
                size="lg"
                className="rounded-2xl px-8 h-13 bg-white text-primary hover:bg-white/90 shadow-xl group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border/40 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">U</span>
            </div>
            <span className="font-semibold">UnityHub</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 UnityHub. Built for communities, by communities.
          </p>
        </div>
      </footer>
    </section>
  );
}