interface Props {
  placeholder: string;

  value: string;

  onChange: (value: string) => void;
}

function Input({
  placeholder,

  value,

  onChange,
}: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border rounded-lg px-4 py-2 w-full"
    />
  );
}

export default Input;
