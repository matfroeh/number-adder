import { useState } from "react";
import { addNumbers } from "@/services/api";
import Input from "@/components/generic/Input";
import Button from "@/components/generic/Button";

const NumberAdder = () => {
  const [form, setForm] = useState({
    firstNumber: "",
    secondNumber: "",
  });
  const [error, setError] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const verifyInput = () => {
    if (!form.firstNumber || !form.secondNumber) {
      throw new Error("Both fields are required.");
    }

    const firstNum = Number(form.firstNumber);
    const secondNum = Number(form.secondNumber);

    if (
      isNaN(firstNum) ||
      isNaN(secondNum) ||
      firstNum < 1 ||
      firstNum > 100 ||
      secondNum < 1 ||
      secondNum > 100
    ) {
      throw new Error("Both numbers must be between 1 and 100.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    setIsLoading(true);
    try {
      verifyInput();
      const firstNumber = Number(form.firstNumber);
      const secondNumber = Number(form.secondNumber);
      const result = await addNumbers(firstNumber, secondNumber);
      setResult(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-black space-y-6">
      <form onSubmit={handleSubmit} className="space-y-3">
        <h1 className="text-3xl text-center text-gray-200">Add Two Numbers</h1>
        <Input
          label="First Number (1-100)"
          value={form.firstNumber}
          onChange={handleInputChange}
          config={{
            type: "number",
            name: "firstNumber",
            min: 1,
            max: 100,
            required: true,
          }}
        />
        <Input
          label="Second Number (1-100)"
          value={form.secondNumber}
          onChange={handleInputChange}
          config={{
            type: "number",
            name: "secondNumber",
            min: 1,
            max: 100,
            required: true,
          }}
        />
        <Button
          text={isLoading ? "Adding Numbers..." : "Add Numbers"}
          disabled={isLoading}
        />
      </form>
      <p className="text-gray-200 text-center">
        Result: <span className="text-green-500">{result}</span>
      </p>
      <p className="text-red-500 text-center mt-4">{error}</p>
    </div>
  );
};

export default NumberAdder;
