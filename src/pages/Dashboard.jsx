import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Bell, FileText, Users, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatCard from "../components/shared/StatCard";
import GlassCard from "../components/shared/GlassCard";

const recentActivity = [
  { icon: CheckCircle2, text: "Your request to join Tech Innovators was approved", time: "2h ago", color: "text-chart-3" },
  { icon: Bell, text: "New announcement in Community Leaders", time: "5h ago", color: "text-primary" },
  { icon: Users, text: "3 new members joined your organisation", time: "1d ago", color: "text-chart-4" },
  { icon: FileText, text: "New magazine issue published: 'Future of Remote Work'", time: "2d ago", color: "text-chart-2" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary to-chart-2 p-8 md:p-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative">
          <p className="text-white/80 text-sm font-medium">Welcome back,</p>
          <h1 className="text-3xl font-bold text-white mt-1">Alex Johnson 👋</h1>
          <p className="text-white/70 mt-2 max-w-lg">
            You have 3 pending notifications and 1 new join request. Stay connected with your communities.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link to="/organisations">
              <Button className="rounded-2xl bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                <Building2 className="mr-2 h-4 w-4" />
                Browse Organisations
              </Button>
            </Link>
            <Link to="/wall">
              <Button className="rounded-2xl bg-white text-primary hover:bg-white/90">
                My Feed
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Building2} label="Organisations" value="4" trend="+2 this month" color="primary" delay={0.1} />
        <StatCard icon={Bell} label="Notifications" value="12" trend="+5 today" color="purple" delay={0.2} />
        <StatCard icon={FileText} label="My Posts" value="23" trend="+8 this week" color="teal" delay={0.3} />
        <StatCard icon={Users} label="Connections" value="156" trend="+12 new" color="green" delay={0.4} />
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* My Organisations */}
        <GlassCard className="lg:col-span-2 p-6" delay={0.2}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">My Organisations</h2>
            <Link to="/organisations" className="text-sm text-primary hover:underline font-medium">
              View All
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Tech Innovators", members: 128, role: "Member", status: "approved" },
              { name: "Community Leaders", members: 256, role: "Admin", status: "approved" },
              { name: "Design Guild", members: 89, role: "Member", status: "pending" },
              { name: "Open Source Collective", members: 412, role: "Member", status: "approved" },
            ].map((org) => (
              <div
                key={org.name}
                className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{org.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">{org.name}</p>
                  <p className="text-xs text-muted-foreground">{org.members} members • {org.role}</p>
                </div>
                {org.status === "pending" && (
                  <span className="text-xs px-2 py-1 rounded-full bg-chart-4/10 text-chart-4 font-medium">Pending</span>
                )}
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Recent Activity */}
        <GlassCard className="p-6" delay={0.3}>
          <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>
          <div className="space-y-5">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-0.5">
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm leading-snug">{item.text}</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}