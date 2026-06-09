interface Props {
  message: string;
}

function EmptyState({ message }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-12 text-center">
      <h2 className="text-xl font-semibold text-gray-600">{message}</h2>
    </div>
  );
}

export default EmptyState;
