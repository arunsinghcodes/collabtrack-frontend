import SettingsSection from "./settings-section";

export default function AccountSettings() {
  return (
    <SettingsSection
      title="Account"
      description="Your account information"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm text-muted-foreground">
            Name
          </label>
          <div className="mt-1 rounded-md border px-3 py-2">
            Arun Kumar Singh
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground">
            Email
          </label>
          <div className="mt-1 rounded-md border px-3 py-2">
            arun@email.com
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}
