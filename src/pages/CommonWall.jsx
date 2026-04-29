import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image, Send, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import PostCard from "../components/wall/PostCard";

const samplePosts = [
  {
    id: 1,
    author: "Sarah Chen",
    time: "2 hours ago",
    content: "Just published our Q1 community report! We've grown by 340% and launched 5 new programmes. So proud of this team! 🚀",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format",
    likes: 47,
    comments: 12,
  },
  {
    id: 2,
    author: "Community Leaders",
    time: "5 hours ago",
    content: "🗳️ Should we extend our weekly meetups to include weekends? Cast your vote below!",
    likes: 23,
    comments: 8,
    poll: [
      { label: "Yes, weekends too!", pct: 68 },
      { label: "No, weekdays only", pct: 32 },
    ],
  },
  {
    id: 3,
    author: "James Wilson",
    time: "1 day ago",
    content: "Had an amazing brainstorming session with the design team today. Can't wait to share what we've been working on. Stay tuned for the big reveal next week! 🎨✨",
    likes: 31,
    comments: 5,
  },
  {
    id: 4,
    author: "Maria Garcia",
    time: "2 days ago",
    content: "Thank you everyone who participated in our volunteer drive! Together we raised $12,000 for local education initiatives.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format",
    likes: 89,
    comments: 24,
  },
];

export default function CommonWall() {
  const [newPost, setNewPost] = useState("");

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-bold">Common Wall</h1>
        <p className="text-muted-foreground mt-1">Share updates with your community</p>
      </motion.div>

      {/* Post Creator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl border border-border/50 p-5"
      >
        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
            A
          </div>
          <div className="flex-1">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full resize-none bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none min-h-[60px]"
              rows={2}
            />
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="rounded-xl text-muted-foreground gap-1.5">
                  <Image className="h-4 w-4" />
                  <span className="hidden sm:inline text-xs">Photo</span>
                </Button>
                <Button variant="ghost" size="sm" className="rounded-xl text-muted-foreground gap-1.5">
                  <Smile className="h-4 w-4" />
                  <span className="hidden sm:inline text-xs">Feeling</span>
                </Button>
              </div>
              <Button
                size="sm"
                className="rounded-xl px-5"
                disabled={!newPost.trim()}
              >
                <Send className="h-3.5 w-3.5 mr-1.5" />
                Post
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Feed */}
      <div className="space-y-4">
        {samplePosts.map((post, i) => (
          <PostCard key={post.id} post={post} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}