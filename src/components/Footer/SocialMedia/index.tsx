import React from "react";
import "./styled.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia(): JSX.Element {
  return (
    <ol>
      <li>
        <a href="https://github.com/flubyGit">
          <FaGithub size={20} />
        </a>
      </li>
      <li>
        <a href="mailto:profissionalf.andre@gmail.com?subject=Olá Felipe...">
          <AiOutlineMail size={20} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/devfandre/">
          <FaLinkedin size={20} />
        </a>
      </li>
      <li>
        <a href="http://wa.me/5511973813705?Olá Felipe...">
          <FaWhatsapp size={20} />
        </a>
      </li>
    </ol>
  );
}
