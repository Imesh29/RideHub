interface Props {
  title: string;

  value: string;

  color: string;
}

function StatCard({
  title,

  value,

  color,
}: Props) {
  return (
    <div className={`rounded-lg p-6 shadow text-white ${color}`}>
      <h3 className="text-lg">{title}</h3>

      <p className="text-3xl font-bold mt-3">{value}</p>
    </div>
  );
}

export default StatCard;
