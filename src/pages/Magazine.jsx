import React from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featured = {
  title: "The Future of Community-Driven Governance",
  desc: "How digital platforms are reshaping democratic participation and enabling communities to self-govern with transparency and trust.",
  author: "Sarah Chen",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format",
  category: "Featured",
};

const articles = [
  { title: "Building Inclusive Digital Spaces", author: "James Wilson", readTime: "5 min", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&auto=format", category: "Technology" },
  { title: "The Art of Collaborative Decision Making", author: "Maria Garcia", readTime: "6 min", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&auto=format", category: "Culture" },
  { title: "Remote Communities: Staying Connected", author: "David Kim", readTime: "4 min", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format", category: "Opinion" },
  { title: "Open Source: A New Social Contract", author: "Emily Brown", readTime: "7 min", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&auto=format", category: "Technology" },
  { title: "Design Systems for Community Apps", author: "Alex Johnson", readTime: "5 min", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format", category: "News" },
  { title: "Measuring Community Health", author: "Lisa Wang", readTime: "6 min", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format", category: "Opinion" },
];

export default function Magazine() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            E-Magazine
          </h1>
          <p className="text-muted-foreground mt-1">Weekly Issue #42 — April 2026</p>
        </div>
      </motion.div>

      {/* Featured Article */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        className="relative rounded-3xl overflow-hidden cursor-pointer group"
      >
        <div className="relative h-72 md:h-96">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <Badge className="rounded-full bg-primary border-0 text-xs mb-4">{featured.category}</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-2xl">
              {featured.title}
            </h2>
            <p className="text-white/70 mt-3 max-w-xl text-sm md:text-base leading-relaxed hidden sm:block">
              {featured.desc}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-white/80 text-sm">{featured.author}</span>
              <span className="text-white/50 text-sm flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {featured.readTime}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Articles Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Badge className="absolute top-3 left-3 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs border-0">
                {article.category}
              </Badge>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-muted-foreground">{article.author}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}