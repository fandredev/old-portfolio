import React from "react";
import "./styled.scss";
import CardImages from "../Card/Projects";
import linkedinClone from "../../assets/images/clones/linkedin.png";
import bootstrapClone from "../../assets/images/clones/bootstrap.png";
import dropboxClone from "../../assets/images/clones/dropbox.png";
import ecoletaClone from "../../assets/images/clones/ecoleta.png";
import githubClone from "../../assets/images/clones/github.png";
import npmClone from "../../assets/images/clones/npm.png";
import reduxClone from "../../assets/images/clones/redux.png";
import sassClone from "../../assets/images/clones/sass.png";
import mouse from "../../assets/images/icons/mouse.png";

export default function Projects(): JSX.Element {
  return (
    <section>
      <h2>
        Projetos <img src={mouse} alt={""} />
      </h2>
      <CardImages
        image={linkedinClone}
        description={"Clonando a interface web do linkedin"}
        text={"Clonando a interface web do linkedin"}
      />
      <CardImages
        image={bootstrapClone}
        description={"Clonando a interface web do bootstrap"}
        text={"Clonando a interface web do bootstrap"}
      />
      <CardImages
        image={dropboxClone}
        description={"Clonando a interface web do dropbox"}
        text={"Clonando a interface web do dropbox"}
      />
      <CardImages
        image={ecoletaClone}
        description={"Clonando a interface web da next level week ecoleta"}
        text={"Clonando a interface web da next level week ecoleta"}
      />
      <CardImages
        image={githubClone}
        description={"Clonando a interface web do site do github"}
        text={"Clonando a interface web do site do github"}
      />
      <CardImages
        image={npmClone}
        description={"Clonando a interface web do site do npm"}
        text={"Clonando a interface web do site do npm"}
      />
      <CardImages
        image={reduxClone}
        description={
          "Clonando a interface web do 'agrupador de estados', redux"
        }
        text={"Clonando a interface web do 'agrupador de estados', redux"}
      />
      <CardImages
        image={sassClone}
        description={"Clonando a interface web do pré processador SASS"}
        text={"Clonando a interface web do pré processador SASS"}
      />

      {/* <aside>
        Observações:{" "}
        <strong>Projetos no back-end podem ser encontrados aqui:</strong>
        <a href="https://github.com/flubyGit" target="_blank"></a>
      </aside> */}
    </section>
  );
}
