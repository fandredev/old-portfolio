import React from "react";
import { DiCss3Full } from "react-icons/di";
import { FaGithub, FaNode, FaSass } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import {
  SiAngular,
  SiReact,
  SiStorybook,
  SiTypescript,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import paperPlane from "../../assets/images/icons/plane.png";
import Card from "../../components/Card";
import Techs, { DescTechs } from "../../enums";
import "./styled.scss";

export default function Skills(): JSX.Element {
  const {
    HTML5,
    Sass,
    CSS3,
    Typescript,
    NodeJS,
    GitGitHub,
    Angular,
    StoryBook,
    Jest,
    PythonDjango,
    ReactTech,
    TailwindCSS,
  } = Techs;
  const {
    HTML5Desc,
    CSS3Desc,
    SASSDesc,
    TypescriptDesc,
    NodeJSDesc,
    ReactDesc,
    StoryBookDesc,
    GitDesc,
    TailwindCSSDesc,
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
        <Card title={Typescript} description={TypescriptDesc}>
          <SiTypescript size={25} />
        </Card>
        <Card title={NodeJS} description={NodeJSDesc}>
          <FaNode size={25} />
        </Card>
        <Card title={ReactTech} description={ReactDesc}>
          <SiReact size={25} />
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

        <Card title={TailwindCSS} description={TailwindCSSDesc}>
          <SiTailwindcss size={25} />
        </Card>
        <Card url="" title={GitGitHub} description={GitDesc}>
          <FaGithub size={25} />
        </Card>

        <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
          <h3>Outras ferramentas: </h3>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>Black | Ruff | flake8 | eslint</span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>CI/CD com GH Actions</span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>pnpm, npm, pip, pipx</span>
          </li>
          <li className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg
              className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span>VSCode, Webstorm, Pycharm</span>
          </li>
        </ul>
      </div>
    </>
  );
}
