import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import developer from "../../assets/images/developer.png";
import myPhoto from "../../assets/images/icons/myPhoto.jpeg";
import Card from "../Card";
import "./styled.scss";

export default function IntroduceMy(): JSX.Element {
  return (
    <section id="contact">
      <div>
        <figure>
          <img src={developer} alt="" />
        </figure>
        <h2>Contato</h2>
        <section id="contact">
          <Card
            title="E-mail"
            description="profissionalf.andre@gmail.com"
            url="mailto:profissionalf.andre@gmail.com?subject=Olá Felipe... >"
          >
            <AiOutlineMail size={25} />
          </Card>
          <Card
            title="Whatsapp"
            description="(11) 973813705"
            url="http://wa.me/5511973813705?Olá Felipe..."
          >
            <FaWhatsapp size={25} />
          </Card>
          <Card
            title="Linkedin"
            description="www.linkedin.com/in/devfandre/"
            url="https://www.linkedin.com/in/devfandre/"
          >
            <FaLinkedin size={25} />
          </Card>
          <Card
            title="Github"
            description="https://github.com/flubyGit"
            url="https://github.com/flubyGit"
          >
            <FaGithub size={25} />
          </Card>
        </section>
      </div>
      <h2 id="who_my">Introdução</h2>
      <section id="introduce">
        <i>
          <img src={myPhoto} alt="Felipe André" />
        </i>
        <article>
          &quot;Meu nome é Felipe André e tenho 23 anos e moro na região oeste
          de São Paulo. Sou estudante de tecnologia desde os 17 anos e sou grato
          pelo progresso que venho aprendendo com a{" "}
          <abbr title="World Wide Web">web</abbr> e com esse mundo vasto de ser
          uma pessoa programadora. Adoro tecnologias usando Typescript
          independentemente de front-end e back-end e já tive experiências com
          Python usando Django Framework. Atualmente, sou um desenvolvedor
          buscando uma nova oportunidade no mercado e trabalho como freelancer
          num proprio parecido com o Pipefy usando tecnologias como NextJS,
          TailwindCSS, Prisma e MongoDB. Amo futebol, sair com amigos e
          conversar sobre astronomia!&quot;
        </article>
      </section>
    </section>
  );
}
