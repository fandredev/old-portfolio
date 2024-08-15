import { FaDocker } from "react-icons/fa";
import React from "react";
import Techs, { DescTechs } from "../../enums";
import "./styled.scss";

export default function Study(): JSX.Element {
  const { Docker } = Techs;
  const { DockerDesc } = DescTechs;
  return (
    <>
      <h2 className="text-6xl my-11" id="skills">
        O que estou estudando?
      </h2>
      <div id="study">
        <FaDocker size={25} />
        <FaDocker size={25} />
      </div>
    </>
  );
}
