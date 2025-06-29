const API_URL = import.meta.env.VITE_APP_NUMBER_ADDER_API_URL;

if (!API_URL) {
  throw new Error("API_URL is not defined");
}

export const addNumbers = async (
  firstNumber: number,
  secondNumber: number
): Promise<number> => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "add",
      params: {
        first: firstNumber,
        second: secondNumber,
      },
      id: Math.floor(Math.random() * 1000000),
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(`Error Code ${data.error.code}: ${data.error.message}`);
  }

  return data.result;
};
