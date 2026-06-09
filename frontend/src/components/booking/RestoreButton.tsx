interface Props {
  onRestore: () => void;
}

function RestoreButton({ onRestore }: Props) {
  return (
    <button
      onClick={onRestore}
      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
    >
      Restore
    </button>
  );
}

export default RestoreButton;
