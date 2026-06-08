interface Props {
  status: string;
}

function BookingStatusBadge({ status }: Props) {
  let color = "bg-gray-400";

  if (status === "PENDING") color = "bg-yellow-500";

  if (status === "COMPLETED") color = "bg-green-500";

  if (status === "CONFIRMED") color = "bg-blue-500";

  return (
    <span className={`${color} text-white px-3 py-1 rounded-full text-sm`}>
      {status}
    </span>
  );
}

export default BookingStatusBadge;
