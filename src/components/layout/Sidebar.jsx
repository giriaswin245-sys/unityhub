import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  Users,
  BookOpen,
  Bell,
  Settings,
  Shield,
  Newspaper,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Building2, label: "Organisations", path: "/organisations" },
  { icon: Newspaper, label: "Common Wall", path: "/wall" },
  { icon: Users, label: "Groups", path: "/groups" },
  { icon: BookOpen, label: "E-Magazine", path: "/magazine" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Shield, label: "Admin Panel", path: "/admin" },
];

export default function Sidebar({ open, onClose }) {
  const location = useLocation();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-16 bottom-0 z-40 w-64 bg-card/95 backdrop-blur-xl border-r border-border/40 transition-transform duration-300 ease-in-out",
          "md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-4">
          <div className="space-y-1 flex-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <item.icon className="h-4.5 w-4.5" />
                    <span>{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-border/40">
            <Link to="/dashboard">
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-secondary transition-colors">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">A</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Alex Johnson</p>
                  <p className="text-xs text-muted-foreground truncate">alex@unityhub.com</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}