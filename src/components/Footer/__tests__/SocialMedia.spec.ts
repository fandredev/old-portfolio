import { render, cleanup } from "@testing-library/react";

import SocialMedia from "../SocialMedia";

const socialMedia = SocialMedia();

describe("Testing Social Media component", () => {
  afterEach(() => {
    cleanup();
  });

  it("Must be render list ol no errors", () => {
    const { getByTestId } = render(socialMedia);

    expect(getByTestId("list")).toBeDefined();
    expect(getByTestId("list")).not.toBeNull();
    expect(getByTestId("list").nextElementSibling);
  });

  it("Testing link properties and href", () => {
    const { getByTestId } = render(socialMedia);

    expect(getByTestId("link-gh")).toBeDefined();
    expect(getByTestId("link-gh")).not.toBeNull();
  });
});
