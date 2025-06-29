type InputProps = {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  config?: React.InputHTMLAttributes<HTMLInputElement>;
};

const Input = ({ label, value, onChange, config }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-200 mb-1">{label}</label>
      <input
        className="border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={label}
        value={value}
        onChange={onChange}
        {...config}
      />
    </div>
  );
};

export default Input;
