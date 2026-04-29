import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, MoreHorizontal, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PostCard({ post, delay = 0 }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 pb-0">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-chart-4 flex items-center justify-center text-white font-semibold text-sm">
            {post.author[0]}
          </div>
          <div>
            <p className="text-sm font-semibold">{post.author}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.time}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-sm leading-relaxed">{post.content}</p>
      </div>

      {/* Image */}
      {post.image && (
        <div className="px-5 pb-4">
          <img
            src={post.image}
            alt="Post"
            className="w-full rounded-xl object-cover max-h-80"
          />
        </div>
      )}

      {/* Poll */}
      {post.poll && (
        <div className="px-5 pb-4 space-y-2">
          {post.poll.map((option, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl bg-secondary/80 p-3">
              <div
                className="absolute inset-y-0 left-0 bg-primary/10 rounded-xl"
                style={{ width: `${option.pct}%` }}
              />
              <div className="relative flex justify-between items-center">
                <span className="text-sm font-medium">{option.label}</span>
                <span className="text-sm font-semibold text-primary">{option.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-1 px-3 pb-3 border-t border-border/30 pt-2 mx-5 mb-2">
        <Button
          variant="ghost"
          size="sm"
          className={`rounded-xl text-xs gap-1.5 ${liked ? "text-chart-5" : "text-muted-foreground"}`}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
          {likeCount}
        </Button>
        <Button variant="ghost" size="sm" className="rounded-xl text-xs gap-1.5 text-muted-foreground">
          <MessageCircle className="h-4 w-4" />
          {post.comments || 0}
        </Button>
        <Button variant="ghost" size="sm" className="rounded-xl text-xs gap-1.5 text-muted-foreground ml-auto">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}