import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      {isHome ? (
        <main>
          <Outlet />
        </main>
      ) : (
        <div className="flex">
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="flex-1 md:ml-64 min-h-[calc(100vh-4rem)]">
            <div className="p-4 md:p-8 max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}