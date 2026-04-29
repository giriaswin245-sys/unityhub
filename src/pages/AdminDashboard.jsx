import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, FileText, Activity, TrendingUp, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import StatCard from "../components/shared/StatCard";
import GlassCard from "../components/shared/GlassCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const chartData = [
  { name: "Mon", posts: 12, members: 4 },
  { name: "Tue", posts: 19, members: 7 },
  { name: "Wed", posts: 15, members: 3 },
  { name: "Thu", posts: 22, members: 9 },
  { name: "Fri", posts: 28, members: 11 },
  { name: "Sat", posts: 18, members: 5 },
  { name: "Sun", posts: 14, members: 6 },
];

const joinRequests = [
  { id: 1, name: "Sarah Chen", email: "sarah@email.com", org: "Tech Innovators", date: "2 hours ago" },
  { id: 2, name: "James Wilson", email: "james@email.com", org: "Community Leaders", date: "5 hours ago" },
  { id: 3, name: "Maria Garcia", email: "maria@email.com", org: "Design Guild", date: "1 day ago" },
  { id: 4, name: "David Kim", email: "david@email.com", org: "Open Source Collective", date: "2 days ago" },
];

export default function AdminDashboard() {
  const [requests, setRequests] = useState(joinRequests);

  const handleRequest = (id, action) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">Manage your community and monitor engagement</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total Users" value="2,431" trend="+12% this week" color="primary" delay={0.1} />
        <StatCard icon={FileText} label="Pending Requests" value={requests.length.toString()} color="purple" delay={0.2} />
        <StatCard icon={Activity} label="Active Today" value="892" trend="+8%" color="teal" delay={0.3} />
        <StatCard icon={TrendingUp} label="Engagement Rate" value="78%" trend="+5%" color="green" delay={0.4} />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard className="p-6" delay={0.2}>
          <h3 className="font-semibold mb-6">Weekly Engagement</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="posts" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="p-6" delay={0.3}>
          <h3 className="font-semibold mb-6">New Members</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Line type="monotone" dataKey="members" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Join Requests Table */}
      <GlassCard className="p-6" delay={0.4}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold">Join Requests</h3>
          <Badge variant="secondary" className="rounded-full">
            {requests.length} pending
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left text-xs font-medium text-muted-foreground pb-3 pr-4">User</th>
                <th className="text-left text-xs font-medium text-muted-foreground pb-3 pr-4 hidden sm:table-cell">Organisation</th>
                <th className="text-left text-xs font-medium text-muted-foreground pb-3 pr-4 hidden md:table-cell">Submitted</th>
                <th className="text-right text-xs font-medium text-muted-foreground pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {requests.map((req) => (
                  <motion.tr
                    key={req.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="border-b border-border/30 last:border-0"
                  >
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/60 to-chart-4/60 flex items-center justify-center text-white text-sm font-semibold">
                          {req.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{req.name}</p>
                          <p className="text-xs text-muted-foreground">{req.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 pr-4 hidden sm:table-cell">
                      <span className="text-sm">{req.org}</span>
                    </td>
                    <td className="py-4 pr-4 hidden md:table-cell">
                      <span className="text-sm text-muted-foreground">{req.date}</span>
                    </td>
                    <td className="py-4">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          className="rounded-xl h-8 px-3 bg-chart-3/10 text-chart-3 hover:bg-chart-3/20 border-0"
                          onClick={() => handleRequest(req.id, "approve")}
                        >
                          <Check className="h-3.5 w-3.5 mr-1" />
                          <span className="hidden sm:inline">Approve</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="rounded-xl h-8 px-3 text-destructive hover:bg-destructive/10"
                          onClick={() => handleRequest(req.id, "reject")}
                        >
                          <X className="h-3.5 w-3.5 mr-1" />
                          <span className="hidden sm:inline">Reject</span>
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {requests.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-sm">No pending requests 🎉</p>
          </div>
        )}
      </GlassCard>
    </div>
  );
}