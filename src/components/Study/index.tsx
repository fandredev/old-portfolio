import React from "react";
import { SiAngular, SiNextDotJs } from "react-icons/si";
import Techs from "../../enums";
import Card from "../Card";
import "./styled.scss";

export default function Study(): JSX.Element {
  const { AngularRxJS, NextJS } = Techs;
  return (
    <>
      <h2 id="skills">O que estou estudando?</h2>
      <div id="study">
        <Card
          url=""
          title={AngularRxJS}
          description="Utilizo diariamente para SPAs,
          ótima tecnogia com suporte nativo a typescript. RxJS é o conceito de programação reativa muito presente no framework."
        >
          <SiAngular size={25} color="#fff" />
        </Card>
        <Card
          url=""
          title={NextJS}
          description="Meus estudos com o framework estão iniciando agora. Estou adorando usar ele até o momento, mas, ainda em estudo."
        >
          <SiNextDotJs size={25} />
        </Card>
      </div>
    </>
  );
}
