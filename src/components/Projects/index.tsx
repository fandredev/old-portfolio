import React, { useState } from "react";
import mouse from "../../assets/images/icons/mouse.png";
import ButtonApplication from "../Button/Button";
import MobileProjects from "../MobileProjects";
import WebProjects from "../WebProjects";
import "./styled.scss";

export type Groups = "mobile" | "web";

export default function Projects(): JSX.Element {
  const [handleUserGroup, setHandleUserGroup] = useState<Groups>("web");

  function handleOpenedProjects(type: Groups) {
    setHandleUserGroup(type);
  }

  return (
    <section id="projects">
      <h2 className="text-6xl my-11">
        Projetos <img src={mouse} alt="Imagem ilustrativa de um mouse" />
      </h2>

      <aside id="container-buttons">
        <ButtonApplication
          onClick={() => handleOpenedProjects("mobile")}
          title="Mobile"
        />
        <ButtonApplication
          onClick={() => handleOpenedProjects("web")}
          title="Web"
        />
      </aside>
      {handleUserGroup === "web" ? (
        <div id="card-projects">
          <WebProjects />
        </div>
      ) : (
        <div id="card-projects">
          <MobileProjects />
        </div>
      )}
    </section>
  );
}
