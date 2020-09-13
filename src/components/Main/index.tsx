import React from "react";
import boyDeveloper from "../../assets/images/boyDeveloper.png";
import { Link } from "react-router-dom";
import "./styled.scss";

export default function Main(): JSX.Element {
  return (
    <main>
      <section>
        <span>Heyy !!</span>
        <h1>Eu sou o Felipe André =)</h1>
        <span>Web Developer Júnior</span>
      </section>
      <figure>
        <img src={boyDeveloper} alt="" />
      </figure>
      <div>
        <button>
          <Link to="https://github.com/flubyGit">Saber mais</Link>
        </button>
      </div>
    </main>
  );
}
