import StatsCards from "@/components/dashboard/stats-cards";
import AssignedTasks from "@/components/dashboard/assigned-tasks";
import ProjectGrid from "@/components/dashboard/project-grid";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <StatsCards />

      <AssignedTasks />

      <ProjectGrid />
    </div>
  );
}
