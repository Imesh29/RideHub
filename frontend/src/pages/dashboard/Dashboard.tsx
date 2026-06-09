import MainLayout from "../../layouts/MainLayout";

import StatCard from "../../components/dashboard/StatCard";

import { useAuthStore } from "../../store/authStore";

function Dashboard() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="text-gray-500 mt-2">
            Vehicle Booking Management Overview
          </p>
        </div>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Bookings" value="125" color="bg-blue-600" />

        <StatCard title="Pending" value="25" color="bg-yellow-500" />

        <StatCard title="Completed" value="82" color="bg-green-600" />

        <StatCard title="Archived" value="18" color="bg-red-500" />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
