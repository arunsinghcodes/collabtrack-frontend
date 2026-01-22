export default function SettingsSection({ title, description, children }) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {children}
    </div>
  );
}
