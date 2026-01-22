"use client";

import { useEffect } from "react";
import { useUIStore } from "@/store/ui-store";

export default function KeyboardShortcuts() {
  const toggleCollapse = useUIStore((s) => s.toggleCollapse);

  useEffect(() => {
    const handler = (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");

      const cmdOrCtrl =
        (isMac && e.metaKey) || (!isMac && e.ctrlKey);

      if (cmdOrCtrl && e.key.toLowerCase() === "b") {
        e.preventDefault();
        toggleCollapse();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggleCollapse]);

  return null;
}
