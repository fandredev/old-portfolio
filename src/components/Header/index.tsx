import React, { useContext } from "react";

import "./styled.scss";
import rocket from "../../assets/images/icons/rocket.png";
import { LandingContext } from "../../contexts/LandingContext";
import MenuBurger from "../MenuBurger";
import ListItems from "./ListItems";

export default function Header(): JSX.Element {
  const landingContext = useContext(LandingContext);
  const { width } = landingContext;

  return (
    <header>
      {width < 600 ? (
        <>
          <MenuBurger />
          <figure>
            <img src={rocket} alt="Foguete ilustativo" />
          </figure>
        </>
      ) : (
        <ListItems />
      )}
    </header>
  );
}
