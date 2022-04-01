import { render } from "@testing-library/react";
import App from "./App";

test("renders hello button", () => {
  const { getByText } = render(<App />);
  const button = getByText("Hello");
  expect(button).toBeInTheDocument();
});
