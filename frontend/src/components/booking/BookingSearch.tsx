interface Props {
  value: string;

  onChange: (value: string) => void;
}

function BookingSearch({
  value,

  onChange,
}: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search booking..."
      className="border rounded p-2 w-full"
    />
  );
}

export default BookingSearch;
