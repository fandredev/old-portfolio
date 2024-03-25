import React from "react";

import boyDeveloper from "../../assets/images/boyDeveloper.png";
import "./styled.scss";

export default function Main(): JSX.Element {
  return (
    <main>
      <section>
        <span>Olá !!</span>
        <h1>
          Eu sou o <span>Felipe André :)</span>
        </h1>
        <span>Typescript & Python Developer</span>
      </section>
      <figure>
        <img
          src={boyDeveloper}
          alt="Imagem de um menino digitando no computador"
        />
      </figure>
      <div>
        <button type="button">
          <a
            href="https://github.com/flubyGit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saiba mais
          </a>
        </button>
      </div>
    </main>
  );
}
