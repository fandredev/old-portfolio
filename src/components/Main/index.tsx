import React from "react";
import { Link } from "react-router-dom";
import boyDeveloper from "../../assets/images/boyDeveloper.png";
import "./styled.scss";

export default function Main(): JSX.Element {
  return (
    <main>
      <section>
        <span>Heyy !!</span>
        <h1>
          Eu sou o <span>Felipe André :)</span>
        </h1>
        <span>Web Developer Júnior</span>
      </section>
      <figure>
        <img src={boyDeveloper} alt="" />
      </figure>
      <div>
        <button type="button">
          <Link to="https://github.com/flubyGit">Saber mais</Link>
        </button>
      </div>
    </main>
  );
}
