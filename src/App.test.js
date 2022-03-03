import { render, screen } from "@testing-library/react";
import App from "./App";

test("Privacy Policy", () => {
  render(<App />);
  const header = screen.getByText(/Privacy Policy/i);
  expect(header).toBeInTheDocument();
});
