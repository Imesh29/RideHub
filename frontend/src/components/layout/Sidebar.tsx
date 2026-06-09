import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="text-2xl font-bold p-6">RideHub</div>

      <nav className="flex flex-col mt-6">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `px-6 py-3 flex items-center gap-3 transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-slate-700"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            `px-6 py-3 flex items-center gap-3 transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-slate-700"
            }`
          }
        >
          Bookings
        </NavLink>

        <NavLink
          to="/bookings/new"
          className={({ isActive }) =>
            `px-6 py-3 flex items-center gap-3 transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-slate-700"
            }`
          }
        >
          Add Booking
        </NavLink>

        <NavLink
          to="/archived"
          className={({ isActive }) =>
            `px-6 py-3 flex items-center gap-3 transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-slate-700"
            }`
          }
        >
          Archived
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
