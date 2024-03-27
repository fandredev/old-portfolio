import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "./index";

describe("Footer", () => {
  it("renders correctly", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();

    const textElement = screen.getByText(/Página feita com React/i);
    expect(textElement).toBeInTheDocument();

    const dateElement = screen.getByText(/Felipe André/i);
    expect(dateElement).toBeInTheDocument();
  });
});
