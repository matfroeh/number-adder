import { useState } from "react";
import { addNumbers } from "@/services/api";
import NumberAdderForm from "@/components/NumberAdderForm";
import ResultBar from "@/components/ResultBar";
import ErrorBar from "@/components/ErrorBar";
import { verifyNumberAdderInput } from "@/lib/inputVerification";

const NumberAdder = () => {
  const [form, setForm] = useState({
    firstNumber: "",
    secondNumber: "",
  });
  const [error, setError] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [disableInputVerification, setDisableInputVerification] =
    useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    setIsLoading(true);
    try {
      // For demonstration purposes only, frontend input verification can be disabled through a checkbox.
      if (!disableInputVerification) {
        verifyNumberAdderInput({
          firstNumber: form.firstNumber,
          secondNumber: form.secondNumber,
        });
      }
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
      <NumberAdderForm
        form={form}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        isLoading={isLoading}
      />
      <ResultBar result={result} />
      <ErrorBar error={error} />

      {/* Checkbox for disabling frontend input verification for demo purposes */}
      <div className="flex items-center justify-end mt-8">
        <input
          type="checkbox"
          className="ml-2 mt-0.5"
          checked={disableInputVerification}
          onChange={(e) => setDisableInputVerification(e.target.checked)}
          aria-label="Disable Input Verification"
        />
        <label className="text-gray-200 text-xs ml-2">
          Disable (Frontend) Input Verification
        </label>
      </div>
    </div>
  );
};

export default NumberAdder;
