import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="my-4">Page Not Found</p>

      <Link
        to="/dashboard"
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Go Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
