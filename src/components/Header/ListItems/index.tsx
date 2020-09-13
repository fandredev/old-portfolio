import React from "react";
import "./styled.scss";

import rocket from "../../../assets/images/icons/rocket.png";
export default function ListItems(): JSX.Element {
  return (
    <>
      <ol>
        <li>
          <figure id="rocket">
            <img src={rocket} alt="Foguete ilustativo" />
          </figure>
        </li>
        <li>Quem sou eu?</li>
        <li>Skills</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ol>
    </>
  );
}
