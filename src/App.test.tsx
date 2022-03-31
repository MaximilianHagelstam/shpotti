import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello team heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello Team!/i);
  expect(headingElement).toBeInTheDocument();
});
