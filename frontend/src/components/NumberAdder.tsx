import { useState } from "react";
import { addNumbers } from "@/api/api";
import Input from "@/components/generic/Input";
import Button from "@/components/generic/Button";

const NumberAdder = () => {
  const [form, setForm] = useState({
    firstNumber: 0,
    secondNumber: 0,
  });
  const [error, setError] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`);
    console.log("Input type:", typeof value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const verifyInput = () => {
    if (!form.firstNumber || !form.secondNumber) {
      throw new Error("Both fields are required.");
    }

    if (
      isNaN(Number(form.firstNumber)) ||
      isNaN(Number(form.secondNumber)) ||
      Number(form.firstNumber) < 1 ||
      Number(form.firstNumber) > 100 ||
      Number(form.secondNumber) < 1 ||
      Number(form.secondNumber) > 100
    ) {
      throw new Error("Both numbers must be between 1 and 100.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    const firstNumber = Number(form.firstNumber);
    const secondNumber = Number(form.secondNumber);

    try {
      verifyInput();
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      setResult(null);
      return;
    }

    try {
      const result = await addNumbers(firstNumber, secondNumber);
      setResult(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(`API Error: ${err.message}`);
      }
    }
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
        <Button text="Add Numbers" />
      </form>
      <p className="text-gray-200 text-center">
        Result: <span className="text-green-500">{result}</span>
      </p>
      <p className="text-red-500 text-center mt-4">{error}</p>
    </div>
  );
};

export default NumberAdder;
