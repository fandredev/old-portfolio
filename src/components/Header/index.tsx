import React, { useContext } from "react";
import { LandingContext } from "../../contexts/LandingContext";
import MenuBurger from "../MenuBurger";
import Rocket from "../Rocket";
import ListItems from "./ListItems";
import "./styled.scss";

export default function Header(): JSX.Element {
  const landingContext = useContext(LandingContext);
  const { width } = landingContext;

  return (
    <header>
      {width < 600 ? (
        <>
          <MenuBurger />
          <Rocket />
        </>
      ) : (
        <ListItems />
      )}
    </header>
  );
}
