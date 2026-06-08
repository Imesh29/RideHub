import BookingStatusBadge from "./BookingStatusBadge";

interface Props {
  bookings: any[];
}

function BookingTable({ bookings }: Props) {
  return (
    <table className="w-full bg-white shadow">
      <thead>
        <tr>
          <th>Reference</th>

          <th>Customer</th>

          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.booking_reference}</td>

            <td>{booking.customer_name}</td>

            <td>
              <BookingStatusBadge status={booking.booking_status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookingTable;
