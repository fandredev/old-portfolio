import { render, screen } from "@testing-library/react";
import React from "react";
import SocialMedia from ".";

describe("SocialMedia", () => {
  beforeEach(() => {
    render(<SocialMedia />);
  });

  it("renders GitHub link correctly", () => {
    const githubLink = screen.getByLabelText("GitHub");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.getAttribute("href")).toBe("https://github.com/flubyGit");
  });

  it("renders Email link correctly", () => {
    const emailLink = screen.getByLabelText("Email");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.getAttribute("href")).toBe(
      "mailto:profissionalf.andre@gmail.com?subject=Olá Felipe..."
    );
  });

  it("renders Linkedin link correctly", () => {
    const linkedinLink = screen.getByLabelText("Linkedin");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink.getAttribute("href")).toBe(
      "https://www.linkedin.com/in/devfandre/"
    );
  });

  it("renders Whatsapp link correctly", () => {
    const whatsappLink = screen.getByLabelText("Whatsapp");
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink.getAttribute("href")).toBe(
      "http://wa.me/5511973813705?Olá Felipe..."
    );
  });
});
