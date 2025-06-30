import Input from "@/components/generic/Input";
import Button from "@/components/generic/Button";

type NumberAdderFormProps = {
  form: {
    firstNumber: string;
    secondNumber: string;
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
};

const NumberAdderForm = ({
  form,
  handleSubmit,
  handleInputChange,
  isLoading,
}: NumberAdderFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h1 className="text-3xl text-center text-gray-200">Add Two Numbers</h1>
      <Input
        label="First Number (1-100)"
        value={form.firstNumber}
        onChange={handleInputChange}
        config={{
          type: "number",
          name: "firstNumber",
        }}
      />
      <Input
        label="Second Number (1-100)"
        value={form.secondNumber}
        onChange={handleInputChange}
        config={{
          type: "number",
          name: "secondNumber",
        }}
      />
      <Button
        text={isLoading ? "Adding Numbers..." : "Add Numbers"}
        disabled={isLoading}
      />
    </form>
  );
};

export default NumberAdderForm;
