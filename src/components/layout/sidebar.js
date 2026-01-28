"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Folder,
  CheckSquare,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/ui-store";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useAuthStore } from "@/store/auth-store";

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Projects", href: "/projects", icon: Folder },
  { title: "Tasks", href: "/tasks", icon: CheckSquare },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const logout = useAuthStore((s) => s.logout);

  const {
    collapsed,
    toggleCollapse,
    sidebarOpen,
    closeSidebar,
    hydrate,
    hydrated,
  } = useUIStore();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (!hydrated) return null;

  const effectiveCollapsed = isDesktop ? collapsed : false;

  const sidebarWidth = effectiveCollapsed ? "w-16" : "w-64";

  return (
    <>
      {/* mobile backdrop */}
      {!isDesktop && sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      <aside
        className={cn(
          "fixed z-50 h-screen bg-background border-r transition-transform duration-300",
          isDesktop
            ? `relative ${sidebarWidth}`
            : `w-64 -translate-x-full ${sidebarOpen && "translate-x-0"}`,
        )}
      >
        {/* header */}
        <div className="flex items-center justify-between px-4 py-4">
          {!collapsed && <span className="font-bold">CollabTrack</span>}

          {isDesktop && (
            <button
              onClick={toggleCollapse}
              className="p-1 rounded-md hover:bg-muted"
            >
              <ChevronLeft
                className={cn(
                  "h-5 w-5 transition-transform",
                  collapsed && "rotate-180",
                )}
              />
            </button>
          )}
        </div>

        {/* nav */}
        <nav className="px-2 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={!isDesktop ? closeSidebar : undefined}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm",
                  "hover:bg-muted",
                  active &&
                    "bg-primary text-primary-foreground hover:bg-primary",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!effectiveCollapsed && item.title}
              </Link>
            );
          })}
        </nav>

        {/* bottom */}
        <div className="absolute bottom-6 left-0 w-full px-2 space-y-1">
          <Link
            href="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted"
          >
            <Settings className="h-4 w-4" />
            {!effectiveCollapsed && "Settings"}
          </Link>

          <button
            onClick={logout}
            className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-destructive hover:bg-destructive/10"
          >
            <LogOut className="h-4 w-4" />
            {!effectiveCollapsed && "Logout"}
          </button>
        </div>
      </aside>
    </>
  );
}
