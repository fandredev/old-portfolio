import React from "react";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { FaDocker, FaGithub, FaNode, FaReact, FaSass } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { SiTypescript, SiNextDotJs } from "react-icons/si";

import atom from "../../assets/images/icons/atom.png";
import paperPlane from "../../assets/images/icons/plane.png";
import Card from "../../components/Card";
import "./styled.scss";

export default function Skills(): JSX.Element {
  return (
    <>
      <h2 id="skills">
        Hard Skills{" "}
        <img
          src={paperPlane}
          alt="Imagem ilustrativa de um aviãozinho de papel"
        />
      </h2>
      <div id="cards">
        <Card
          url=""
          title="HTML5"
          description="Utilizo diariamente para deixar estrutura e SEO de uma maneira correta."
        >
          <ImHtmlFive size={25} color="#fff" />
        </Card>
        <Card
          url=""
          title="CSS3"
          description="Utilizo diariamente para deixar meus projetos com um carinha mais bonita."
        >
          <DiCss3Full size={25} />
        </Card>
        <Card
          url=""
          title="Sass"
          description="O dinamismo que o SASS traz faz com que eu o utilize muito em meus projetos pessoais."
        >
          <FaSass size={25} />
        </Card>
        <Card
          url=""
          title="Bootstrap"
          description="Utilizo bastante quando quero algo mais depressa, por mais que ainda utilize muito o SASS e CSS puro."
        >
          <BsBootstrap size={25} />
        </Card>
        <Card
          url=""
          title="Javascript"
          description="A linguagem de programação que me fez apaixonar pela area. Javascript é tudo de bom! <3"
        >
          <DiJavascript1 size={25} />
        </Card>
        <Card
          url=""
          title="Typescript"
          description="Venho utilizando muito atualmente junto com Next.JS e React.JS. 'Tipar' as coisas é muito importante =)"
        >
          <SiTypescript size={25} />
        </Card>
        <Card
          url=""
          title="NodeJS"
          description={
            "Utilizo node frequentemente juntamente com o express para criação de API's básicas para complemento com o front-end"
          }
        >
          <FaNode size={25} />
        </Card>
        <Card
          url=""
          title="ReactJS"
          description="O que mais venho utilizando recentemente. Não tem um projeto front-end que eu inicie que ele não esteja no meio."
        >
          <FaReact size={25} />
        </Card>
        <Card
          url=""
          title="React Native"
          description="Outro que venho utilizando recentemente, inclusive eu trabalho atualmente com a tecnologia. Mobile e Web com React é demais!!"
        >
          <FaReact size={25} />
        </Card>
        <Card
          url=""
          title="Next.JS"
          description="Meus estudos com o framework estão iniciando agora. Estou adorando usar ele até o momento, mas, ainda em estudo."
        >
          <SiNextDotJs size={25} />
        </Card>
      </div>
      <h2>
        DevOps <img src={atom} alt="Imagem de um atómo" />
      </h2>
      <section id="devops">
        <Card
          url=""
          title="Git/Github"
          description="Utilizo diariamente para networking, pesquisa de bibliotecas, armazenamento de projetos pessoais e etc..."
        >
          <FaGithub size={25} />
        </Card>
        <Card
          url=""
          title="Docker"
          description="Comecei a utilizar recentemente e estou curtindo a ideia de utilizar containers para as aplicações."
        >
          <FaDocker size={25} />
        </Card>
      </section>
    </>
  );
}
