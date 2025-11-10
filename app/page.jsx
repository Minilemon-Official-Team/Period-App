import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}
