import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, MessageSquare, Info, Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const initialNotifications = [
  { id: 1, type: "approval", title: "Request Approved", message: "Your request to join Tech Innovators has been approved!", time: "2 hours ago", read: false },
  { id: 2, type: "message", title: "New Message", message: "Sarah Chen sent a message in #general channel", time: "3 hours ago", read: false },
  { id: 3, type: "info", title: "New Magazine Issue", message: "Weekly Issue #42 is now live — check out the featured article!", time: "5 hours ago", read: false },
  { id: 4, type: "rejection", title: "Request Declined", message: "Your request to join Exclusive Club was declined by the admin.", time: "1 day ago", read: true },
  { id: 5, type: "approval", title: "New Member", message: "James Wilson joined your organisation Community Leaders", time: "1 day ago", read: true },
  { id: 6, type: "message", title: "Mention", message: "Maria Garcia mentioned you in a comment on Common Wall", time: "2 days ago", read: true },
  { id: 7, type: "info", title: "Poll Results", message: "The weekend meetup poll has closed — 68% voted Yes!", time: "3 days ago", read: true },
];

const iconMap = {
  approval: CheckCircle2,
  rejection: XCircle,
  message: MessageSquare,
  info: Info,
};

const colorMap = {
  approval: "bg-chart-3/10 text-chart-3",
  rejection: "bg-destructive/10 text-destructive",
  message: "bg-primary/10 text-primary",
  info: "bg-chart-2/10 text-chart-2",
};

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            Notifications
          </h1>
          <p className="text-muted-foreground mt-1">{unreadCount} unread notifications</p>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm" className="rounded-xl gap-1.5" onClick={markAllRead}>
            <Check className="h-3.5 w-3.5" />
            Mark all read
          </Button>
        )}
      </motion.div>

      <div className="space-y-2">
        <AnimatePresence>
          {notifications.map((notif, i) => {
            const Icon = iconMap[notif.type];
            return (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "flex items-start gap-4 p-5 rounded-2xl border border-border/50 transition-all duration-200 hover:shadow-md cursor-pointer",
                  notif.read ? "bg-card/50" : "bg-card shadow-sm"
                )}
              >
                <div className={cn("p-2.5 rounded-xl flex-shrink-0", colorMap[notif.type])}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={cn("text-sm font-semibold", notif.read && "font-medium")}>{notif.title}</p>
                    {!notif.read && (
                      <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{notif.message}</p>
                  <p className="text-xs text-muted-foreground mt-2">{notif.time}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}