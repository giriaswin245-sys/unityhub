import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Menu, X, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onToggleSidebar, sidebarOpen }) {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/80 backdrop-blur-xl supports-[backdrop-filter]:bg-card/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          {!isHome && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl"
              onClick={onToggleSidebar}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
              <span className="text-primary-foreground font-bold text-lg">U</span>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline">
              Unity<span className="text-primary">Hub</span>
            </span>
          </Link>
        </div>

        {!isHome && (
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search organisations, posts..."
                className="w-full h-10 pl-10 pr-4 rounded-2xl bg-secondary/80 border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl text-muted-foreground hover:text-foreground"
            onClick={toggleDarkMode}
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {!isHome && (
            <Link to="/notifications">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl relative text-muted-foreground hover:text-foreground"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse" />
              </Button>
            </Link>
          )}

          {isHome ? (
            <Link to="/dashboard">
              <Button className="rounded-2xl px-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                Sign In
              </Button>
            </Link>
          ) : (
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center cursor-pointer">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}