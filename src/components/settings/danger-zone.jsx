import SettingsSection from "./settings-section";

export default function DangerZone() {
  return (
    <SettingsSection
      title="Danger zone"
      description="Irreversible actions"
    >
      <div className="flex flex-col gap-4">
        <button className="rounded-md border border-destructive px-4 py-2 text-destructive hover:bg-destructive/10">
          Logout
        </button>

        <button
          disabled
          className="rounded-md border px-4 py-2 opacity-50"
        >
          Delete account (coming soon)
        </button>
      </div>
    </SettingsSection>
  );
}
