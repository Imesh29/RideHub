import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import StatCard from "../../components/dashboard/StatCard";

import { getDashboardStats } from "../../api/bookingApi";

import type { DashboardStats } from "../../types/dashboard";

function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    total: 0,
    pending: 0,
    completed: 0,
    archived: 0,
  });

  useEffect(() => {
    loadDashboardStats();
  }, []);

  const loadDashboardStats = async () => {
    try {
      const data = await getDashboardStats();

      setStats(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="text-gray-500 mt-2">
            Vehicle Booking Management Overview
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Bookings"
          value={stats.total.toString()}
          color="bg-blue-600"
        />

        <StatCard
          title="Pending"
          value={stats.pending.toString()}
          color="bg-yellow-500"
        />

        <StatCard
          title="Completed"
          value={stats.completed.toString()}
          color="bg-green-600"
        />

        <StatCard
          title="Archived"
          value={stats.archived.toString()}
          color="bg-red-500"
        />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
