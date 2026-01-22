"use client";

import SettingsSection from "./settings-section";
import ThemeToggle from "@/components/theme-toggle";
import { useUIStore } from "@/store/ui-store";

export default function AppearanceSettings() {
  const collapsed = useUIStore((s) => s.collapsed);

  return (
    <SettingsSection
      title="Appearance"
      description="Customize your interface"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Theme</p>
          <p className="text-sm text-muted-foreground">
            Light or dark mode
          </p>
        </div>

        <ThemeToggle />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="font-medium">Sidebar collapsed</p>
          <p className="text-sm text-muted-foreground">
            Remember sidebar state
          </p>
        </div>

        <span className="text-sm">
          {collapsed ? "Collapsed" : "Expanded"}
        </span>
      </div>
    </SettingsSection>
  );
}
