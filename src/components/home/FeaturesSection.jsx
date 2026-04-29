import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Vote, Users, BookOpen, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    desc: "Slack-style group messaging with channels, threads, and file sharing.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Vote,
    title: "Democratic Voting",
    desc: "Create polls, vote on decisions, and see results with transparent percentages.",
    color: "bg-chart-2/10 text-chart-2",
  },
  {
    icon: Users,
    title: "Organisations & Groups",
    desc: "Create and manage organisations with flexible membership and roles.",
    color: "bg-chart-3/10 text-chart-3",
  },
  {
    icon: BookOpen,
    title: "E-Magazine",
    desc: "Publish weekly issues with articles, opinions, and community stories.",
    color: "bg-chart-4/10 text-chart-4",
  },
  {
    icon: Shield,
    title: "Admin Controls",
    desc: "Manage join requests, moderate content, and track engagement analytics.",
    color: "bg-chart-5/10 text-chart-5",
  },
  {
    icon: Zap,
    title: "Smart Notifications",
    desc: "Stay informed with real-time alerts for approvals, messages, and updates.",
    color: "bg-chart-1/10 text-chart-1",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything your community needs
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A complete suite of tools designed to bring people together, enable democratic decisions, and foster meaningful collaboration.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-5`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}