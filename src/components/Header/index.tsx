import React, { useState, useEffect, useCallback } from "react";
import "./styled.scss";
import MenuBurger from "../MenuBurger";
import ListItems from "./ListItems";
import rocket from "../../assets/images/icons/rocket.png";

export default function Header(): JSX.Element {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowState = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowState);

    return () => window.removeEventListener("resize", handleWindowState);
  }, [handleWindowState]);

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
        <ListItems width={width} />
      )}
    </header>
  );
}
