interface Props {
  onArchive: () => void;
}

function ArchiveButton({ onArchive }: Props) {
  const handleClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to archive this booking?",
    );

    if (confirmed) {
      onArchive();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
    >
      Archive
    </button>
  );
}

export default ArchiveButton;
