import React from "react";
import "./style.css";
import { push as Menu } from "react-burger-menu";
import SocialMedia from "../Footer/SocialMedia";
import rocket from "../../assets/images/icons/rocket.png";

export default function MenuBurger(): JSX.Element {
  return (
    <Menu width={200}>
      <a className="menu-item" href="/">
        Quem sou eu?
      </a>

      <a className="menu-item" href="/about">
        Skills
      </a>

      <a className="menu-item" href="/services">
        Projetos
      </a>

      <a className="menu-item" href="/contact">
        Contato
      </a>
      <section>
        <SocialMedia />
      </section>
      <figure id="rocket">
        <img src={rocket} alt="Foguete ilustativo" />
      </figure>
    </Menu>
  );
}
