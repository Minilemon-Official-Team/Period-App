import Sidebar from "@/components/Sidebar";
import Calendar from "@/components/Calendar";

export default function TrackerPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-10">
        <Calendar />
      </main>
    </div>
  );
}
