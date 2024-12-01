import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { DashboardStats } from "@/components/dashboard/stats";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Dashboard"
        text="Welcome to your dashboard overview."
      />
      <div className="grid gap-8">
        <DashboardStats />
        <RecentActivity />
      </div>
    </DashboardShell>
  );
}