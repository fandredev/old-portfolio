import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

import bootstrapClone from "../../../assets/images/clones/bootstrap.png";
import CardProject from "../Projects/index";

interface Props<S> {
  description: S;
  image: S;
  text: S;
  url: S;
}

const props: Readonly<Props<string>> = {
  description: "Clonando a interface web do linkedin",
  image: bootstrapClone,
  text: "Clonando a interface web do linkedin",
  url: "https://ui-clone-linkedin.flubygit.vercel.app/",
};

const cardProject = CardProject(props);

describe("Testing component CardProject", () => {
  interface Fake {
    text: () => void;
  }
  const fake: Fake = {
    text: () => "",
  };

  beforeAll(() => {
    jest.spyOn(fake, "text");
  });

  afterEach(cleanup);

  it("Must render prop image", () => {
    const { getByAltText } = render(cardProject);

    const txt: string = "Clonando a interface web do linkedin";

    expect(txt).toBeDefined();
    expect(getByAltText(txt)).not.toHaveClass();
    expect(getByAltText(txt)).toBeVisible();
    expect(getByAltText(txt)).not.toBeNull();
    expect(getByAltText(txt)).toHaveAttribute("src", bootstrapClone);
  });

  it("Must render prop text and description", () => {
    const { getByTestId } = render(cardProject);

    expect(getByTestId("text")).toBeVisible();
    expect(getByTestId("text")).not.toBeNull();
    expect(getByTestId("text")).toHaveTextContent(/linkedin$/i);
  });

  it("Must render container card project", () => {
    const { getByTestId } = render(cardProject);

    expect(getByTestId("wrapper")).toBeDefined();
    expect(getByTestId("text")).toBeVisible();
    expect(getByTestId("wrapper")).toBeInTheDocument();
  });
});
