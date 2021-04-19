import React from "react";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { FaDocker, FaGithub, FaNode, FaReact, FaSass } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { SiAngular, SiTypescript } from "react-icons/si";
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
    Javascript,
    Typescript,
    ReactJS,
    ReactNative,
    NodeJS,
    Docker,
    GitGitHub,
    Angular,
  } = Techs;
  const {
    HTML5Desc,
    CSS3Desc,
    SASSDesc,
    BootstrapDesc,
    JavascriptDesc,
    TypescriptDesc,
    NodeJSDesc,
    ReactJSDesc,
    ReactNativeDesc,
    GitDesc,
    DockerDesc,
  } = DescTechs;
  return (
    <>
      <h2 id="skills">
        Hard Skills{" "}
        <img
          src={paperPlane}
          alt="Imagem ilustrativa de um aviãozinho de papel"
        />
      </h2>
      <div id="cards">
        <Card url="" title={HTML5} description={HTML5Desc}>
          <ImHtmlFive size={25} color="#fff" />
        </Card>
        <Card url="" title={CSS3} description={CSS3Desc}>
          <DiCss3Full size={25} />
        </Card>
        <Card url="" title={Sass} description={SASSDesc}>
          <FaSass size={25} />
        </Card>
        <Card url="" title={Bootstrap} description={BootstrapDesc}>
          <BsBootstrap size={25} />
        </Card>
        <Card url="" title={Javascript} description={JavascriptDesc}>
          <DiJavascript1 size={25} />
        </Card>
        <Card url="" title={Typescript} description={TypescriptDesc}>
          <SiTypescript size={25} />
        </Card>
        <Card url="" title={NodeJS} description={NodeJSDesc}>
          <FaNode size={25} />
        </Card>
        <Card url="" title={ReactJS} description={ReactJSDesc}>
          <FaReact size={25} />
        </Card>
        <Card url="" title={ReactNative} description={ReactNativeDesc}>
          <FaReact size={25} />
        </Card>
        <Card
          url=""
          title={Angular}
          description="Utilizo diariamente para SPAs,
          ótima tecnogia com suporte nativo a typescript. RxJS é o conceito de programação reativa muito presente no framework."
        >
          <SiAngular size={25} color="#fff" />
        </Card>
      </div>
      <Study />
      <h2>
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
