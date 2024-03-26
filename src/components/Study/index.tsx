import React from "react";
import { SiPython, SiTailwindcss } from "react-icons/si";
import Techs, { DescTechs } from "../../enums";
import Card from "../Card";
import "./styled.scss";

export default function Study(): JSX.Element {
  const { PythonDjango, TailwindCSS } = Techs;
  const { PythonDjangoDesc, TailwindCSSDesc } = DescTechs;
  return (
    <>
      <h2 className="text-6xl my-11" id="skills">
        O que estou estudando?
      </h2>
      <div id="study">
        <Card title={TailwindCSS} description={TailwindCSSDesc}>
          <SiTailwindcss size={25} />
        </Card>
        <Card title={PythonDjango} description={PythonDjangoDesc}>
          <SiPython size={25} />
        </Card>
      </div>
    </>
  );
}
