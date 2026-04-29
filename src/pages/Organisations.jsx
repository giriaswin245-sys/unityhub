import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Users, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const orgs = [
  { id: 1, name: "Tech Innovators", desc: "Building the next generation of technology solutions together.", members: 128, category: "Technology", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format", joined: true },
  { id: 2, name: "Community Leaders", desc: "Empowering local communities through education and action.", members: 256, category: "Community", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&auto=format", joined: false },
  { id: 3, name: "Design Guild", desc: "Where designers collaborate, share, and grow together.", members: 89, category: "Education", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&auto=format", pending: true },
  { id: 4, name: "Open Source Collective", desc: "Contributing to open source projects that matter.", members: 412, category: "Technology", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&auto=format", joined: true },
  { id: 5, name: "Green Future Alliance", desc: "Working towards a sustainable and greener tomorrow.", members: 198, category: "Nonprofit", image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&auto=format", joined: false },
  { id: 6, name: "Startup Network", desc: "Connect with founders, mentors, and investors.", members: 342, category: "Business", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&auto=format", joined: false },
];

export default function Organisations() {
  const [search, setSearch] = useState("");

  const filtered = orgs.filter(
    (o) => o.name.toLowerCase().includes(search.toLowerCase()) || o.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Organisations</h1>
          <p className="text-muted-foreground mt-1">Discover and join communities</p>
        </div>
        <Button className="rounded-2xl px-6 shadow-lg shadow-primary/25">
          + Create Organisation
        </Button>
      </motion.div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search organisations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-11 pl-11 pr-4 rounded-2xl bg-card border border-border/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((org, i) => (
          <motion.div
            key={org.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative h-36 overflow-hidden">
              <img src={org.image} alt={org.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <Badge className="absolute top-3 left-3 rounded-full bg-white/90 text-foreground text-xs border-0">
                {org.category}
              </Badge>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-base">{org.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{org.desc}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {org.members} members
                </span>
                {org.joined ? (
                  <Badge className="rounded-full bg-chart-3/10 text-chart-3 border-0 text-xs">Joined</Badge>
                ) : org.pending ? (
                  <Badge className="rounded-full bg-chart-4/10 text-chart-4 border-0 text-xs">Pending</Badge>
                ) : (
                  <Button size="sm" className="rounded-xl h-8 px-4 text-xs">
                    Join
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}