"use client";

import { Menu } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { useUIStore } from "@/store/ui-store";
import Breadcrumbs from "@/components/navigation/breadcrumbs";

export default function Navbar() {
  const openSidebar = useUIStore((s) => s.openSidebar);

  return (
    <header className="flex h-14 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={openSidebar}
          className="lg:hidden rounded-md p-2 hover:bg-muted"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Breadcrumbs />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div>User</div>
      </div>
    </header>
  );
}
