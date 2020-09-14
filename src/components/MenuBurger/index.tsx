import React, { useContext } from "react";
import "./style.css";
import { stack as Menu } from "react-burger-menu";
import Switch from "react-switch";
import SocialMedia from "../Footer/SocialMedia";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export default function MenuBurger(): JSX.Element {
  const darkModeContext = useContext(DarkModeContext);

  const { theme, handleTheme } = darkModeContext;
  return (
    <Menu width={200}>
      <a className="menu-item" href="#contact">
        Contato
      </a>
      <a className="menu-item" href="#who_my">
        Quem sou eu?
      </a>

      <a className="menu-item" href="#skills">
        Skills
      </a>

      <a className="menu-item" href="#projects">
        Projetos
      </a>
      <section>
        <SocialMedia />
      </section>
      <section>
        <Switch checked={theme} onChange={() => handleTheme()} />
      </section>
    </Menu>
  );
}
