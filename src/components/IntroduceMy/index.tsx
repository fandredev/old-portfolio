import React from "react";
import "./styled.scss";
import developer from "../../assets/images/developer.png";
import myPhoto from "../../assets/images/icons/myPhoto.jpeg";
import atom from "../../assets/images/icons/atom.png";

export default function IntroduceMy(): JSX.Element {
  return (
    <section>
      <figure>
        <img src={developer} alt="" />
      </figure>
      <h2>
        Introdução <img src={atom} alt={"Imagem ilustrativa de um atómo"} />
      </h2>
      <section>
        <i>
          <img src={myPhoto} alt="Felipe André" />
        </i>
        <article>
          "Meu nome é Felipe André e tenho 20 anos e moro na região oeste de São
          Paulo. Sou estudante de tecnologia desde os 18 anos e sou grato pelo
          progresso que venho aprendendo com a{" "}
          <abbr title="World Wide Web">web</abbr> e com esse mundo vasto da web
          em si. Adoro front-end, javascript, back-end e estou em constante
          evolução para me tornar um desenvolvedor full-stack melhor a cada
          dia!"
        </article>
      </section>
    </section>
  );
}
