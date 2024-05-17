import React from "react";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3Full } from "react-icons/di";
import { FaDocker, FaGithub, FaNode, FaReact, FaSass } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import {
  SiAngular,
  SiNextDotJs,
  SiStorybook,
  SiTypescript,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import atom from "../../assets/images/icons/atom.png";
import paperPlane from "../../assets/images/icons/plane.png";
import Card from "../../components/Card";
import Techs, { DescTechs } from "../../enums";
import Study from "../Study";
import "./styled.scss";

export default function Skills(): JSX.Element {
  const {
    Bootstrap,
    HTML5,
    Sass,
    CSS3,
    Typescript,
    NextJS,
    ReactNative,
    NodeJS,
    Docker,
    GitGitHub,
    Angular,
    StoryBook,
    Jest,
    PythonDjango,
  } = Techs;
  const {
    HTML5Desc,
    CSS3Desc,
    SASSDesc,
    BootstrapDesc,
    TypescriptDesc,
    NodeJSDesc,
    NextJSDesc,
    ReactNativeDesc,
    StoryBookDesc,
    GitDesc,
    DockerDesc,
    JestDesc,
    PythonDjangoDesc,
  } = DescTechs;
  return (
    <>
      <h2 className="text-6xl" id="skills">
        Hard Skills{" "}
        <img
          src={paperPlane}
          alt="Imagem ilustrativa de um aviãozinho de papel"
        />
      </h2>
      <div id="cards">
        <Card title={HTML5} description={HTML5Desc}>
          <ImHtmlFive size={25} color="#fff" />
        </Card>
        <Card title={CSS3} description={CSS3Desc}>
          <DiCss3Full size={25} />
        </Card>
        <Card title={Sass} description={SASSDesc}>
          <FaSass size={25} />
        </Card>
        <Card title={Bootstrap} description={BootstrapDesc}>
          <BsBootstrap size={25} />
        </Card>
        <Card title={Typescript} description={TypescriptDesc}>
          <SiTypescript size={25} />
        </Card>
        <Card title={NodeJS} description={NodeJSDesc}>
          <FaNode size={25} />
        </Card>
        <Card title={NextJS} description={NextJSDesc}>
          <SiNextDotJs size={25} />
        </Card>
        <Card title={ReactNative} description={ReactNativeDesc}>
          <FaReact size={25} />
        </Card>

        <Card title={StoryBook} description={StoryBookDesc}>
          <SiStorybook size={25} />
        </Card>

        <Card title={Jest} description={JestDesc}>
          <SiStorybook size={25} />
        </Card>

        <Card
          url=""
          title={Angular}
          description="Utilizei em projetos e empresas anteriores. Utilizava angular 9 e as versões mais recentes do angular não consegui ver ainda como estão. Pretendo fazer um projetinho recente para ver como ainda estão as coisas no Angular, mas, já tive experiência anteriormente de 3 anos de uso"
        >
          <SiAngular size={25} color="#fff" />
        </Card>
        <Card title={PythonDjango} description={PythonDjangoDesc}>
          <SiPython size={25} />
        </Card>
      </div>
      <Study />
      <h2 className="text-6xl my-11">
        DevOps <img src={atom} alt="Imagem de um atómo" />
      </h2>
      <section id="devops">
        <Card url="" title={GitGitHub} description={GitDesc}>
          <FaGithub size={25} />
        </Card>
        <Card url="" title={Docker} description={DockerDesc}>
          <FaDocker size={25} />
        </Card>
      </section>
    </>
  );
}
