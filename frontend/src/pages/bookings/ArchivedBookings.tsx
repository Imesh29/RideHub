import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import { getArchivedBookings, restoreBooking } from "../../api/bookingApi";

import RestoreButton from "../../components/booking/RestoreButton";

function ArchivedBookings() {
  const [bookings, setBookings] = useState<any[]>([]);

  const loadBookings = async () => {
    const data = await getArchivedBookings();

    setBookings(data);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleRestore = async (id: string) => {
    await restoreBooking(id);

    loadBookings();
  };

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Archived Bookings</h1>

      <table className="w-full bg-white shadow">
        <thead>
          <tr>
            <th>Reference</th>

            <th>Customer</th>

            <th>Vehicle</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.booking_reference}</td>

              <td>{booking.customer_name}</td>

              <td>{booking.vehicle_make}</td>

              <td>
                <RestoreButton onRestore={() => handleRestore(booking.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainLayout>
  );
}

export default ArchivedBookings;
