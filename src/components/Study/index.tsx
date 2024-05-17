import React from "react";
import { SiTailwindcss } from "react-icons/si";
import Techs, { DescTechs } from "../../enums";
import Card from "../Card";
import "./styled.scss";

export default function Study(): JSX.Element {
  const { TailwindCSS } = Techs;
  const { TailwindCSSDesc } = DescTechs;
  return (
    <>
      <h2 className="text-6xl my-11" id="skills">
        O que estou estudando?
      </h2>
      <div id="study">
        <Card title={TailwindCSS} description={TailwindCSSDesc}>
          <SiTailwindcss size={25} />
        </Card>
      </div>
    </>
  );
}
