type ErrorBarProps = {
  error: string;
};

const ErrorBar = ({ error }: ErrorBarProps) => {
  return <p className="text-red-500 text-center mt-4">{error}</p>;
};

export default ErrorBar;
