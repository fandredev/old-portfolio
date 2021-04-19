import React from "react";

import "./styled.scss";
import bootstrapClone from "../../assets/images/clones/bootstrap.png";
import devscore from "../../assets/images/clones/devscore.png";
import dropboxClone from "../../assets/images/clones/dropbox.png";
import ecoletaClone from "../../assets/images/clones/ecoleta.png";
import githubClone from "../../assets/images/clones/github.png";
import githubDesk from "../../assets/images/clones/githubDesk.png";
import happy from "../../assets/images/clones/happy.png";
import linkedinClone from "../../assets/images/clones/linkedin.png";
import npmClone from "../../assets/images/clones/npm.png";
import nubank from "../../assets/images/clones/nubank.png";
import reduxClone from "../../assets/images/clones/redux.png";
import sassClone from "../../assets/images/clones/sass.png";
import moveit from "../../assets/images/clones/moveit.png";
import mouse from "../../assets/images/icons/mouse.png";
import CardImages from "../Card/Projects";

export default function Projects(): JSX.Element {
  return (
    <section id="projects">
      <h2>
        Projetos <img src={mouse} alt="Imagem ilustrativa de um mouse" />
      </h2>
      <div id="card-projects">
        <CardImages
          image={linkedinClone}
          description="Clonando a interface web do linkedin"
          text="Clonando a interface web do linkedin"
          url="https://ui-clone-linkedin.flubygit.vercel.app/"
        />
        <CardImages
          image={bootstrapClone}
          description="Clonando a interface web do bootstrap"
          text="Clonando a interface web do bootstrap"
          url="https://ui-clone-bootstrap.flubygit.vercel.app/"
        />
        <CardImages
          image={dropboxClone}
          description="Clonando a interface web do dropbox"
          text="Clonando a interface web do dropbox"
          url=""
        />
        <CardImages
          image={ecoletaClone}
          description="NLW 2| Ecoleta"
          text="NLW 2 | Ecoleta"
          url="https://ecoleta-xi.vercel.app/"
        />
        <CardImages
          image={githubClone}
          description="Clonando a interface web do github"
          text="Clonando a interface web do github"
          url="https://ui-clone-github.vercel.app/"
        />
        <CardImages
          image={npmClone}
          description="Clonando a interface web do npm"
          text="Clonando a interface web do npm"
          url="https://ui-clone-npm.flubygit.vercel.app/"
        />
        <CardImages
          image={reduxClone}
          description="Clonando a interface web do redux"
          text="Clonando a interface web do redux"
          url="https://ui-clone-redux.flubygit.vercel.app/"
        />
        <CardImages
          image={sassClone}
          description="Clonando a interface web do SASS"
          text="Clonando a interface web do SASS"
          url="https://ui-clone-sass.flubygit.vercel.app/"
        />
        <CardImages
          image={githubDesk}
          description="Clonando a interface web do github desktop"
          text="Clonando a interface web do github desktop"
          url="https://githubdesktop.vercel.app/"
        />
        <CardImages
          image={happy}
          description="NLW 3 | Happy"
          text="NLW 3 | Happy"
          url="https://nlwhappy.vercel.app/"
        />
        <CardImages
          image={nubank}
          description="Clonando a interface web do Nubank"
          text="Clonando a interface web do Nubank"
          url="https://nubank.vercel.app/"
        />
        <CardImages
          image={devscore}
          description="DevScore"
          text="DevScore"
          url="https://devscore.vercel.app/"
        />
        <CardImages
          image={moveit}
          description="NLW 4 | move.it"
          text="NLW 4 | move.it"
          url="https://nlw-4-rocket.vercel.app/"
        />
      </div>
    </section>
  );
}
