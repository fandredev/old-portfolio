import React from "react";
import bootstrapClone from "../../assets/images/clones/web/bootstrap.png";
import devFinance$Img from "../../assets/images/clones/web/devfinance$.png";
import devscore from "../../assets/images/clones/web/devscore.png";
import dropboxClone from "../../assets/images/clones/web/dropbox.png";
import ecoletaClone from "../../assets/images/clones/web/ecoleta.png";
import githubClone from "../../assets/images/clones/web/github.png";
import githubDesk from "../../assets/images/clones/web/githubDesk.png";
import happy from "../../assets/images/clones/web/happy.png";
import linkedinClone from "../../assets/images/clones/web/linkedin.png";
import moveit from "../../assets/images/clones/web/moveit.png";
import npmClone from "../../assets/images/clones/web/npm.png";
import nubank from "../../assets/images/clones/web/nubank.png";
import reduxClone from "../../assets/images/clones/web/redux.png";
import sassClone from "../../assets/images/clones/web/sass.png";
import CardImages from "../Card/Projects";

export default function WebProjects() {
  return (
    <>
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
      <CardImages
        image={devFinance$Img}
        description="dev.finance$"
        text="dev.finance$"
        url="https://deevfinance.vercel.app/"
      />
    </>
  );
}
