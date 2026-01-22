import AccountSettings from "@/components/settings/account-settings";
import AppearanceSettings from "@/components/settings/appearance-settings";
import DangerZone from "@/components/settings/danger-zone";

export const metadata = {
  title: "Settings | CollabTrack",
};

export default function SettingsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>

      <AccountSettings />
      <AppearanceSettings />
      <DangerZone />
    </div>
  );
}
