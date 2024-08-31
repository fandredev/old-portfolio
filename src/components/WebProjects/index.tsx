import React from "react";
import bootstrapImage from "../../assets/images/clones/web/bootstrap.png";
import devFinance$Image from "../../assets/images/clones/web/devfinance$.png";
import devScoreImage from "../../assets/images/clones/web/devscore.png";
import dropboxImage from "../../assets/images/clones/web/dropbox.png";
import ecoletaImage from "../../assets/images/clones/web/ecoleta.png";
import githubDeskImage from "../../assets/images/clones/web/githubDesk.png";
import happyImage from "../../assets/images/clones/web/happy.png";
import linkedinImage from "../../assets/images/clones/web/linkedin.png";
import moveItImage from "../../assets/images/clones/web/moveit.png";
import npmImage from "../../assets/images/clones/web/npm.png";
import fastPizzaImage from "../../assets/images/clones/web/fast-pizza.png";
import sassImage from "../../assets/images/clones/web/sass.png";
import duolingoSchoolsImage from "../../assets/images/clones/web/duolingo-schools.png";
import CardImages from "../Card/Projects";

export default function WebProjects() {
  return (
    <>
      <CardImages
        image={linkedinImage}
        description="Clonando a interface web do linkedin"
        text="Clonando a interface web do linkedin"
        url="https://ui-clone-linkedin.flubygit.vercel.app/"
      />
      <CardImages
        image={duolingoSchoolsImage}
        description="Clonando a interface web do Duolingo Schools                         "
        text="Clonando a interface web do Duolingo Schools"
        url="https://ui-clone-duolingo-schools.vercel.app/"
      />
      <CardImages
        image={bootstrapImage}
        description="Clonando a interface web do bootstrap"
        text="Clonando a interface web do bootstrap"
        url="https://ui-clone-bootstrap.flubygit.vercel.app/"
      />
      <CardImages
        image={dropboxImage}
        description="Clonando a interface web do dropbox"
        text="Clonando a interface web do dropbox"
        url="https://ui-clone-dropbox.vercel.app/"
      />
      <CardImages
        image={ecoletaImage}
        description="NLW 2| Ecoleta"
        text="NLW 2 | Ecoleta"
        url="https://ecoleta-xi.vercel.app/"
      />
      <CardImages
        image={npmImage}
        description="Clonando a interface web do npm"
        text="Clonando a interface web do npm"
        url="https://ui-clone-npm.flubygit.vercel.app/"
      />
      <CardImages
        image={sassImage}
        description="Clonando a interface web do SASS"
        text="Clonando a interface web do SASS"
        url="https://ui-clone-sass.flubygit.vercel.app/"
      />
      <CardImages
        image={githubDeskImage}
        description="Clonando a interface web do github desktop"
        text="Clonando a interface web do github desktop"
        url="https://githubdesktop.vercel.app/"
      />
      <CardImages
        image={happyImage}
        description="NLW 3 | Happy"
        text="NLW 3 | Happy"
        url="https://nlwhappy.vercel.app/"
      />
      <CardImages
        image={fastPizzaImage}
        description="Pizza menu"
        text="Fast Pizza React Co."
        url="https://pizza-menu-alpha.vercel.app/"
      />
      <CardImages
        image={devScoreImage}
        description="DevScore"
        text="DevScore"
        url="https://devscore.vercel.app/"
      />
      <CardImages
        image={moveItImage}
        description="NLW 4 | move.it"
        text="NLW 4 | move.it"
        url="https://nlw-4-rocket.vercel.app/"
      />
      <CardImages
        image={devFinance$Image}
        description="dev.finance$"
        text="dev.finance$"
        url="https://deevfinance.vercel.app/"
      />
    </>
  );
}
