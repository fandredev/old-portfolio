import Techs, { DescTechs } from ".";

describe("Techs enum", () => {
  it("should have a value for Docker", () => {
    expect(Techs.Docker).toBeDefined();
    expect(typeof Techs.Docker).toBe("string");
  });

  it("should have a value for Angular", () => {
    expect(Techs.Angular).toBeDefined();
    expect(typeof Techs.Angular).toBe("string");
  });

  it("should have a value for React", () => {
    expect(Techs.ReactTech).toBeDefined();
    expect(typeof Techs.ReactTech).toBe("string");
  });

  it("should have a value for HTML5", () => {
    expect(Techs.HTML5).toBeDefined();
    expect(typeof Techs.HTML5).toBe("string");
  });

  it("should have a value for CSS3", () => {
    expect(Techs.CSS3).toBeDefined();
    expect(typeof Techs.CSS3).toBe("string");
  });

  it("should have a value for Sass", () => {
    expect(Techs.Sass).toBeDefined();
    expect(typeof Techs.Sass).toBe("string");
  });

  it("should have a value for Javascript", () => {
    expect(Techs.Javascript).toBeDefined();
    expect(typeof Techs.Javascript).toBe("string");
  });

  it("should have a value for Typescript", () => {
    expect(Techs.Typescript).toBeDefined();
    expect(typeof Techs.Typescript).toBe("string");
  });

  it("should have a value for NodeJS", () => {
    expect(Techs.NodeJS).toBeDefined();
    expect(typeof Techs.NodeJS).toBe("string");
  });

  it("should have a value for GitGitHub", () => {
    expect(Techs.GitGitHub).toBeDefined();
    expect(typeof Techs.GitGitHub).toBe("string");
  });

  it("should have a value for PythonDjango", () => {
    expect(Techs.PythonDjango).toBeDefined();
    expect(typeof Techs.PythonDjango).toBe("string");
  });

  it("should have a value for TailwindCSS", () => {
    expect(Techs.TailwindCSS).toBeDefined();
    expect(typeof Techs.TailwindCSS).toBe("string");
  });

  it("should have a value for StoryBook", () => {
    expect(Techs.StoryBook).toBeDefined();
    expect(typeof Techs.StoryBook).toBe("string");
  });

  it("should have a value for Jest", () => {
    expect(Techs.Jest).toBeDefined();
    expect(typeof Techs.Jest).toBe("string");
  });
});

describe("DescTechs enum", () => {
  it("should have a description for HTML5", () => {
    expect(DescTechs.HTML5Desc).toBeDefined();
    expect(typeof DescTechs.HTML5Desc).toBe("string");
  });

  it("should have a description for CSS", () => {
    expect(DescTechs.CSS3Desc).toBeDefined();
    expect(typeof DescTechs.CSS3Desc).toBe("string");
  });

  it("should have a description for TailwindCSS", () => {
    expect(DescTechs.TailwindCSSDesc).toBeDefined();
    expect(typeof DescTechs.TailwindCSSDesc).toBe("string");
  });

  it("should have a description for Docker", () => {
    expect(DescTechs.DockerDesc).toBeDefined();
    expect(typeof DescTechs.DockerDesc).toBe("string");
  });
  it("should have a description for PythonDjango", () => {
    expect(DescTechs.PythonDjangoDesc).toBeDefined();
    expect(typeof DescTechs.PythonDjangoDesc).toBe("string");
  });

  it("should have a description for Git", () => {
    expect(DescTechs.GitDesc).toBeDefined();
    expect(typeof DescTechs.GitDesc).toBe("string");
  });

  it("should have a description for Node", () => {
    expect(DescTechs.NodeJSDesc).toBeDefined();
    expect(typeof DescTechs.NodeJSDesc).toBe("string");
  });
  it("should have a description for Typescript", () => {
    expect(DescTechs.TypescriptDesc).toBeDefined();
    expect(typeof DescTechs.TypescriptDesc).toBe("string");
  });

  it("should have a description for Storybook", () => {
    expect(DescTechs.StoryBookDesc).toBeDefined();
    expect(typeof DescTechs.StoryBookDesc).toBe("string");
  });

  it("should have a description for Jest", () => {
    expect(DescTechs.JestDesc).toBeDefined();
    expect(typeof DescTechs.JestDesc).toBe("string");
  });
});
