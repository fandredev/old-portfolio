import React from "react";
import { FiUser } from "react-icons/fi";
import MenuBurger from "../MenuBurger";
import "./styled.scss";
export default function Header(): JSX.Element {
  return (
    <header>
      <MenuBurger />
      <i>
        <FiUser size={30} color={"#fff"} />
      </i>
    </header>
  );
}
