import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b bg-background px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div>User</div>
      </div>
    </header>
  );
}
