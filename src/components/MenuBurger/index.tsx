import React from "react";
import "./style.css";
import { stack as Menu } from "react-burger-menu";
import SocialMedia from "../Footer/SocialMedia";

export default function MenuBurger(): JSX.Element {
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
    </Menu>
  );
}
