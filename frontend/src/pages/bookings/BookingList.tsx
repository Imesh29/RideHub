import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import BookingTable from "../../components/booking/BookingTable";
import BookingSearch from "../../components/booking/BookingSearch";

import { getBookings, searchBookings } from "../../api/bookingApi";

import type { Booking } from "../../types/booking";
import { archiveBooking } from "../../api/bookingApi";

function BookingList() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState<Booking[]>([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    try {
      setLoading(true);

      const data = await getBookings();

      setBookings(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleArchive = async (id: string) => {
    await archiveBooking(id);

    loadBookings();
  };

  useEffect(() => {
    loadBookings();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      loadBookings();

      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const data = await searchBookings(search);

        setBookings(data);
      } catch (error) {
        console.error(error);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Vehicle Bookings
            </h1>

            <p className="text-gray-500 mt-1">
              Manage and monitor all vehicle service bookings
            </p>
          </div>

          <button
            onClick={() => navigate("/bookings/new")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition"
          >
            + Add Booking
          </button>
        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow-sm border p-5">
          <BookingSearch value={search} onChange={setSearch} />
        </div>

        {/* Table */}

        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          {loading ? (
            <div className="p-10 text-center text-gray-500">
              Loading bookings...
            </div>
          ) : (
            <BookingTable bookings={bookings} onArchive={handleArchive} />
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default BookingList;
