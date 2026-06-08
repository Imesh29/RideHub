import { FaCar, FaHome, FaArchive } from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="text-2xl font-bold p-6">RideHub</div>

      <nav className="flex flex-col">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-6 py-4 hover:bg-slate-700"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/bookings"
          className="flex items-center gap-3 px-6 py-4 hover:bg-slate-700"
        >
          <FaCar />
          Bookings
        </Link>

        <Link
          to="/archived"
          className="flex items-center gap-3 px-6 py-4 hover:bg-slate-700"
        >
          <FaArchive />
          Archived
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
