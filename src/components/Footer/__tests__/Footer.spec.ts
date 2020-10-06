import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

import Footer from "../index";

const footer = Footer();

describe("Testing Footer Component", () => {
  afterEach(cleanup);

  it("Must be render wrapper no errors", () => {
    const { getByTestId } = render(footer);

    expect(getByTestId("footer")).toBeDefined();
    expect(getByTestId("footer")).toBeInTheDocument();
  });

  it("Must be render JSX elements no errors", () => {
    const { getByTestId } = render(footer);

    expect(getByTestId("accessibility-sass")).toHaveAttribute(
      "title",
      "Syntactically Awesome Style Sheets"
    );

    expect(getByTestId("accessibility-sass")).toHaveTextContent(/sass/i);
    expect(getByTestId("find-tech")).toHaveTextContent(/js/i);
    expect(getByTestId("find-ts")).toHaveTextContent(/script$/i);
    expect(getByTestId("find-date")).toBeInTheDocument();
  });
});
