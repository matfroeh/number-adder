type ResultBarProps = {
  result: number | null;
};

const ResultBar = ({ result }: ResultBarProps) => {
  return (
    <p className="text-gray-200 text-center">
      Result: <span className="text-green-500">{result}</span>
    </p>
  );
};

export default ResultBar;
