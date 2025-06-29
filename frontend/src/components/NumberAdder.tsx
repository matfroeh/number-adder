import Input from "@/components/generic/Input";
import Button from "@/components/generic/Button";

const NumberAdder = () => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-black space-y-6">
      <form className="space-y-3">
        <h1 className="text-3xl text-center text-gray-200">Add Two Numbers</h1>
        <Input
          label="First Number (1-100)"
          value={0}
          onChange={(e) => console.log(e.target.value)}
          config={{ type: "number", min: 1, max: 100, required: true }}
        />
        <Input
          label="Second Number (1-100)"
          value={0}
          onChange={(e) => console.log(e.target.value)}
          config={{ type: "number", min: 1, max: 100, required: true }}
        />
        <Button text="Add Numbers" />
      </form>
      <p className="text-gray-200 text-center">
        Result: <span className="text-green-500">0</span>
      </p>
      <p className="text-red-500 text-center mt-4">ErrorBar</p>
    </div>
  );
};

export default NumberAdder;
