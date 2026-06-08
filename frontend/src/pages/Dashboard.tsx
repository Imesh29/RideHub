import MainLayout from "../layouts/MainLayout";

import StatCard from "../components/dashboard/StatCard";

function Dashboard() {
  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Bookings" value="128" color="bg-blue-600" />

        <StatCard title="Pending" value="18" color="bg-yellow-500" />

        <StatCard title="Completed" value="110" color="bg-green-600" />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
