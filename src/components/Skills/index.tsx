import React from "react";
import "./styled.scss";
import Card from "../../components/Card";
import { GrHtml5 } from "react-icons/gr";
import { DiCss3Full, DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaSass, FaNode, FaReact, FaGithub, FaDocker } from "react-icons/fa";
import paperPlane from "../../assets/images/icons/plane.png";

export default function Skills(): JSX.Element {
  return (
    <>
      <h2>
        Hard Skills{" "}
        <img
          src={paperPlane}
          alt={"Imagem ilustrativa de um aviãozinho de papel"}
        />
      </h2>
      <Card
        title="HTML5"
        description={
          "Gosto bastante do sintaxe e ja trabalhei bastante com ela."
        }
      >
        <GrHtml5 size={25} />
      </Card>
      <Card
        title="CSS3"
        description={"CSS, o carinha que deixa tudo mais bonito <3"}
      >
        <DiCss3Full size={25} />
      </Card>
      <Card
        title="Sass"
        description={
          "O dinamismo que o SASS traz faz com que eu o utilize muito em meus projetos pessoais."
        }
      >
        <FaSass size={25} />
      </Card>
      <Card
        title="Bootstrap"
        description={
          "Utilizava demais, hoje utilizo pouco, mas, a agilidade com que o css trás e a responsividade faz o bootstrap ser muito querido!"
        }
      >
        <BsBootstrap size={25} />
      </Card>
      <Card
        title="Javascript"
        description={
          "A linguagem de programação que me fez apaixonar pela area. Javascript é tudo de bom! <3"
        }
      >
        <DiJavascript1 size={25} />
      </Card>
      <Card
        title="Typescript"
        description={
          "O maior desafio que estou enfrentando é entender bem o superset do Javascript. Já iniciei alguns projetos com ReactJS + Typescript, mas, estou no processo de estudos e testes com ela. <3"
        }
      >
        <SiTypescript size={25} />
      </Card>
      <Card
        title="NodeJS"
        description={
          "Utilizo node frequentemente juntamente com o express para criação de API's básicas para complemento com o front-end"
        }
      >
        <FaNode size={25} />
      </Card>
      <Card
        title="ReactJS"
        description={
          "Todo projeto que ínicio com front-end, ele tá incluso. ReactJS é maravilhoso, adoro componentizar e é de longe a ferramenta que mais gosto na programação."
        }
      >
        <FaReact size={25} />
      </Card>
      <section>
        <h2>Dev Ops</h2>
        <Card
          title="Git/Github"
          description={
            "Utilizo muito, pode ser um projeto mínino e básico, estou utilizando essa 'belezinha'"
          }
        >
          <FaGithub size={25} />
        </Card>
        <Card
          title="Docker"
          description={
            "Comecei a utilizar recentemente e estou curtindo a ideia de utilizar containers para as aplicações."
          }
        >
          <FaDocker size={25} />
        </Card>
      </section>
    </>
  );
}
