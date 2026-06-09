import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import BookingList from "../pages/bookings/BookingList";
import BookingCreate from "../pages/bookings/BookingCreate";
import BookingEdit from "../pages/bookings/BookingEdit";
import ArchivedBookings from "../pages/bookings/ArchivedBookings";
import NotFound from "../pages/errors/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bookings"
        element={
          <ProtectedRoute>
            <BookingList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bookings/new"
        element={
          <ProtectedRoute>
            <BookingCreate />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bookings/:id/edit"
        element={
          <ProtectedRoute>
            <BookingEdit />
          </ProtectedRoute>
        }
      />

      <Route
        path="/archived"
        element={
          <ProtectedRoute>
            <ArchivedBookings />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
