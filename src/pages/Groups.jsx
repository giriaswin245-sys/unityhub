import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Smile, Paperclip, Phone, Video, MoreVertical, Search, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const channels = [
  { id: 1, name: "general", unread: 3, active: true },
  { id: 2, name: "announcements", unread: 0 },
  { id: 3, name: "design-team", unread: 12 },
  { id: 4, name: "dev-talks", unread: 0 },
  { id: 5, name: "random", unread: 5 },
];

const members = [
  { name: "Sarah Chen", online: true },
  { name: "James Wilson", online: true },
  { name: "Maria Garcia", online: false },
  { name: "David Kim", online: true },
  { name: "Emily Brown", online: false },
];

const initialMessages = [
  { id: 1, sender: "Sarah Chen", content: "Hey everyone! Just pushed the new design updates 🎨", time: "10:24 AM", isMe: false },
  { id: 2, sender: "James Wilson", content: "Looks amazing! The new color scheme is much better.", time: "10:26 AM", isMe: false },
  { id: 3, sender: "You", content: "Thanks! I'll add the final animations tonight.", time: "10:28 AM", isMe: true },
  { id: 4, sender: "Maria Garcia", content: "Can we schedule a review call for tomorrow? I have some feedback on the navigation flow.", time: "10:32 AM", isMe: false },
  { id: 5, sender: "You", content: "Sure! Let me check my calendar. How about 2 PM?", time: "10:33 AM", isMe: true },
  { id: 6, sender: "David Kim", content: "2 PM works for me too. I'll send a calendar invite.", time: "10:35 AM", isMe: false },
];

export default function Groups() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMsg, setNewMsg] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  const messagesEnd = useRef(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "You",
        content: newMsg,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isMe: true,
      },
    ]);
    setNewMsg("");
  };

  return (
    <div className="flex gap-0 -m-4 md:-m-8 h-[calc(100vh-4rem)]">
      {/* Channel List */}
      <div className={cn(
        "w-64 bg-card border-r border-border/40 flex-shrink-0 flex flex-col",
        "hidden md:flex"
      )}>
        <div className="p-4 border-b border-border/40">
          <h2 className="font-semibold text-sm">Channels</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-0.5">
          {channels.map((ch) => (
            <button
              key={ch.id}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-colors",
                ch.active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Hash className="h-4 w-4 flex-shrink-0" />
              <span className="flex-1 text-left">{ch.name}</span>
              {ch.unread > 0 && !ch.active && (
                <span className="h-5 min-w-[20px] rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center px-1.5">
                  {ch.unread}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Online Members */}
        <div className="p-4 border-t border-border/40">
          <p className="text-xs text-muted-foreground font-medium mb-3">ONLINE — {members.filter(m => m.online).length}</p>
          <div className="space-y-2">
            {members.filter(m => m.online).map((m) => (
              <div key={m.name} className="flex items-center gap-2">
                <div className="relative">
                  <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary/60 to-chart-2/60 flex items-center justify-center text-white text-xs font-semibold">
                    {m.name[0]}
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-chart-3 border-2 border-card" />
                </div>
                <span className="text-xs">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-background">
        {/* Chat Header */}
        <div className="h-14 border-b border-border/40 flex items-center justify-between px-4 md:px-6 bg-card/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Hash className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold text-sm">general</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">• 128 members</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex gap-3", msg.isMe && "flex-row-reverse")}
            >
              {!msg.isMe && (
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/60 to-chart-4/60 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                  {msg.sender[0]}
                </div>
              )}
              <div className={cn("max-w-[70%]", msg.isMe && "items-end")}>
                {!msg.isMe && (
                  <p className="text-xs font-medium mb-1 ml-1">{msg.sender}</p>
                )}
                <div
                  className={cn(
                    "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    msg.isMe
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-card border border-border/50 rounded-bl-md"
                  )}
                >
                  {msg.content}
                </div>
                <p className={cn("text-xs text-muted-foreground mt-1", msg.isMe ? "text-right mr-1" : "ml-1")}>
                  {msg.time}
                </p>
              </div>
            </motion.div>
          ))}
          <div ref={messagesEnd} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border/40 bg-card/80 backdrop-blur-sm">
          <div className="flex items-center gap-2 bg-secondary/80 rounded-2xl px-4 py-2">
            <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8 flex-shrink-0 text-muted-foreground">
              <Paperclip className="h-4 w-4" />
            </Button>
            <input
              type="text"
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground"
            />
            <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8 flex-shrink-0 text-muted-foreground">
              <Smile className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="rounded-xl h-8 w-8 flex-shrink-0"
              onClick={sendMessage}
              disabled={!newMsg.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}