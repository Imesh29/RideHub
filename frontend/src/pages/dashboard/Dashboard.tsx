import { useAuthStore } from "../../store/authStore";

function Dashboard() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <button onClick={logout} className="bg-red-600 text-white px-4 py-2 mt-4">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
