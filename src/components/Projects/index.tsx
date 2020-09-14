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
        Projetos <img src={mouse} alt="Imagem ilustrativa de um mouse" />
      </h2>
      <div id="card-projects">
        <CardImages
          image={linkedinClone}
          description="Clonando a interface web do linkedin"
          text="Clonando a interface web do linkedin"
        />
        <CardImages
          image={bootstrapClone}
          description="Clonando a interface web do bootstrap"
          text="Clonando a interface web do bootstrap"
        />
        <CardImages
          image={dropboxClone}
          description="Clonando a interface web do dropbox"
          text="Clonando a interface web do dropbox"
        />
        <CardImages
          image={ecoletaClone}
          description="Clonando a interface web da Next Level Week Ecoleta"
          text="Clonando a interface web da Next Level Week Ecoleta"
        />
        <CardImages
          image={githubClone}
          description="Clonando a interface web do github"
          text="Clonando a interface web do github"
        />
        <CardImages
          image={npmClone}
          description="Clonando a interface web do npm"
          text="Clonando a interface web do npm"
        />
        <CardImages
          image={reduxClone}
          description="Clonando a interface web do redux"
          text="Clonando a interface web  do redux"
        />
        <CardImages
          image={sassClone}
          description="Clonando a interface web do SASS"
          text="Clonando a interface web do SASS"
        />
      </div>
    </section>
  );
}
