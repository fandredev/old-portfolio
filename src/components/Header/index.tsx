import React, { useState, useEffect, useCallback } from "react";
import "./styled.scss";
import MenuBurger from "../MenuBurger";
import ListItems from "./ListItems";
import rocket from "../../assets/images/icons/rocket.png";

export default function Header(): JSX.Element {
  const { innerWidth, addEventListener, removeEventListener } = window;
  const [width, setWidth] = useState(innerWidth);

  const handleWindowState = useCallback(() => {
    setWidth(innerWidth);
  }, [innerWidth]);

  useEffect(() => {
    addEventListener("resize", handleWindowState);

    return () => removeEventListener("resize", handleWindowState);
  }, [addEventListener, handleWindowState, removeEventListener]);

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
