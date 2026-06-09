interface Props {
  text: string;

  onClick?: () => void;

  type?: "button" | "submit";
}

function Button({
  text,

  onClick,

  type = "button",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
    >
      {text}
    </button>
  );
}

export default Button;
