import { useNavigate } from "react-router-dom";

import BookingStatusBadge from "./BookingStatusBadge";

interface Props {
  bookings: any[];
  onArchive?: (id: string) => void;
}

function BookingTable({ bookings, onArchive }: Props) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left">Reference</th>

            <th className="px-6 py-4 text-left">Customer</th>

            <th className="px-6 py-4 text-left">Vehicle</th>

            <th className="px-6 py-4 text-left">Booking Date</th>

            <th className="px-6 py-4 text-left">Status</th>

            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4">{booking.booking_reference}</td>

              <td className="px-6 py-4">{booking.customer_name}</td>

              <td className="px-6 py-4">
                {booking.vehicle_make} {booking.vehicle_model}
              </td>

              <td className="px-6 py-4">
                {booking.booking_date?.substring(0, 10)}
              </td>

              <td className="px-6 py-4">
                <BookingStatusBadge status={booking.booking_status} />
              </td>

              <td className="px-6 py-4 flex justify-center gap-2">
                <button
                  onClick={() => navigate(`/bookings/${booking.id}/edit`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                {onArchive && (
                  <button
                    onClick={() => onArchive(booking.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    Archive
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;
