type ButtonProps = {
  text: string;
  disabled?: boolean;
};

const Button = ({ text, disabled }: ButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      disabled={disabled}
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default Button;
