"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const routeLabels = {
  dashboard: "Dashboard",
  projects: "Projects",
  tasks: "Tasks",
  settings: "Settings",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href =
      "/" + segments.slice(0, index + 1).join("/");

    const label =
      routeLabels[segment] ??
      segment.replace(/-/g, " ");

    return {
      href,
      label:
        label.charAt(0).toUpperCase() +
        label.slice(1),
    };
  });

  return (
    <nav className="flex items-center text-sm text-muted-foreground">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="mx-2 h-4 w-4" />
          )}

          {index < breadcrumbs.length - 1 ? (
            <Link
              href={crumb.href}
              className="hover:text-foreground transition"
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">
              {crumb.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
