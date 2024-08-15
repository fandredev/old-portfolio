import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import developer from "../../assets/images/developer.png";
import myPhoto from "../../assets/images/me.jpeg";
import Card from "../Card";
import "./styled.scss";

export default function IntroduceMy(): JSX.Element {
  return (
    <section id="contact" className="text-center font-primary">
      <div>
        <figure>
          <img className="w-7/12" src={developer} alt="" />
        </figure>
        <h2 className="text-6xl">Contato</h2>
        <section id="contact">
          <Card
            title="E-mail"
            description="profissionalf.andre@gmail.com"
            url="mailto:profissionalf.andre@gmail.com?subject=Olá Felipe... >"
          >
            <AiOutlineMail size={28} />
          </Card>
          <Card
            title="Whatsapp"
            description="(11) 973813705"
            url="http://wa.me/5511973813705?Olá Felipe..."
          >
            <FaWhatsapp size={28} />
          </Card>
          <Card
            title="Linkedin"
            description="www.linkedin.com/in/devfandre/"
            url="https://www.linkedin.com/in/devfandre/"
          >
            <FaLinkedin size={28} />
          </Card>
          <Card
            title="Github"
            description="https://github.com/flubyGit"
            url="https://github.com/flubyGit"
          >
            <FaGithub size={28} />
          </Card>
        </section>
      </div>
      <h2 id="who_my" className="text-5xl my-10">
        Introdução
      </h2>
      <section id="introduce">
        <i>
          <img className="rounded-full" src={myPhoto} alt="Felipe André" />
        </i>
        <article className="text-justify py-8 font-tertiary">
          &quot;Meu nome é Felipe André e tenho 23 anos e moro na região oeste
          de São Paulo. Sou estudante de tecnologia desde os 17 anos e sou grato
          pelo progresso que venho aprendendo com a
          <abbr title="World Wide Web"> web</abbr> e com esse mundo vasto de ser
          uma pessoa programadora. Atualmente estou trabalhando como Programador
          Pleno em uma startup de gestão de contratos e processos para advogados
          e hoje trabalho com as tecnologias de Django usando Python e React +
          Typescript. Meu foco atualmente esse ano está em dar um gás no meu
          inglês e faço isso todos os dias após o trabalho, bem como estudar
          outros materais de tecnologias, programação, politica, astronômia e
          afins. Recentemente comecei a estudar Docker + Kubernetes e estou
          dando meus primeiros passos no FastAPI também. Welcome to my page!
          😁&quot;
        </article>
      </section>
    </section>
  );
}
