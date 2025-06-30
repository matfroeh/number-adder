type verifyNumberAdderInputProps = {
  firstNumber: string;
  secondNumber: string;
};

export const verifyNumberAdderInput = ({
  firstNumber,
  secondNumber,
}: verifyNumberAdderInputProps) => {
  if (!firstNumber || !secondNumber) {
    throw new Error("Both fields are required.");
  }

  const firstNum = Number(firstNumber);
  const secondNum = Number(secondNumber);

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
