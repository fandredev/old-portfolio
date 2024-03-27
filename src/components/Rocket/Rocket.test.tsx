import { render, screen } from "@testing-library/react";
import React from "react";
import Rocket from "./index";

describe("Rocket", () => {
  beforeEach(() => {
    render(<Rocket alt="Foguete ilustativo" />);
  });
  it("renders the rocket image with the correct alt text", () => {
    const rocketImage = screen.getByAltText("Foguete ilustativo");
    expect(rocketImage).toBeInTheDocument();
    expect(rocketImage.getAttribute("src")).toContain("rocket.png");
  });
});
