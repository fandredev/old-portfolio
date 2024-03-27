import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ButtonApplication from "./Button";

describe("ButtonApplication", () => {
  const title = "Web";
  const onClick = jest.fn();

  beforeEach(() => {
    render(<ButtonApplication onClick={onClick} title={title} />);
  });

  it("renders correctly", () => {
    const button: HTMLButtonElement = screen.getByTestId("button-application");
    const textButton = screen.getByText(title);
    expect(textButton.textContent).toBe(title);
    expect(button.textContent).toContain(title);
  });

  it("calls onClick when clicked", () => {
    const expectedTimesCalled = 1;
    const button = screen.getByTestId("button-application");
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(expectedTimesCalled);
  });
});
