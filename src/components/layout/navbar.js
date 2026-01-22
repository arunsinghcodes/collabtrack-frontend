"use client";

import { Menu } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { useUIStore } from "@/store/ui-store";

export default function Navbar() {
  const openSidebar = useUIStore((s) => s.openSidebar);

  return (
    <header className="flex h-14 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-3">
        {/* mobile menu */}
        <button
          onClick={openSidebar}
          className="lg:hidden rounded-md p-2 hover:bg-muted"
        >
          <Menu className="h-5 w-5" />
        </button>

        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div>User</div>
      </div>
    </header>
  );
}
