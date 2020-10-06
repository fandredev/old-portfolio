import { render } from "@testing-library/react";

import Header from "../index";

const header = Header();

describe("Testing header component", () => {
  it("Must be find data-testid", () => {
    const { getByTestId, getByAltText } = render(header);
    expect(getByTestId("header")).toBeDefined();
    expect(getByTestId("header")).toBeInTheDocument();
  });
});
