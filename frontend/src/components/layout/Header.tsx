import { useAuthStore } from "../../store/authStore";

function Header() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="flex justify-between items-center bg-white p-5 shadow">
      <h2 className="text-2xl font-bold">Vehicle Booking Management</h2>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
