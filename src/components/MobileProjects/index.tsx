import React from "react";
import GamePlayImg from "../../assets/images/clones/mobile/gameplay.png";
import GoFinancesImg from "../../assets/images/clones/mobile/gofinances.png";
import PlantmanagerImg from "../../assets/images/clones/mobile/plantmanager.png";
import CardProjects from "../Card/Projects";

export default function MobileProjects() {
  return (
    <>
      <CardProjects
        image={GamePlayImg}
        description="App - GamePlay"
        text="App - GamePlay"
        url="https://github.com/flubyGit/NLWTogether"
      />
      <CardProjects
        image={GoFinancesImg}
        description="App - GoFinances"
        text="App - GoFinances"
        url="https://github.com/flubyGit/gofinances"
      />
      <CardProjects
        image={PlantmanagerImg}
        description="App - plantmanager"
        text="App - plantmanager"
        url="https://github.com/flubyGit/NLW5"
      />
    </>
  );
}
