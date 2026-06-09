import { useAuthStore } from "../../store/authStore";

function Header() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="bg-white shadow-sm border-b px-8 py-4 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Vehicle Booking Management
        </h2>

        <p className="text-sm text-gray-500">
          Manage your vehicle bookings efficiently
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
