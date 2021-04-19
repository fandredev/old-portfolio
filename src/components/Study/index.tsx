import React from "react";
import { SiNextDotJs, SiPython } from "react-icons/si";
import Techs, { DescTechs } from "../../enums";
import Card from "../Card";
import "./styled.scss";

export default function Study(): JSX.Element {
  const { PythonDjango, NextJS } = Techs;
  const { PythonDjangoDesc, NextJSDesc } = DescTechs;
  return (
    <>
      <h2 id="skills">O que estou estudando?</h2>
      <div id="study">
        <Card title={NextJS} description={NextJSDesc}>
          <SiNextDotJs size={25} />
        </Card>
        <Card title={PythonDjango} description={PythonDjangoDesc}>
          <SiPython size={25} />
        </Card>
      </div>
    </>
  );
}
