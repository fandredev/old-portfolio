import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./styled.scss";

export default function SocialMedia(): JSX.Element {
  return (
    <ol>
      <li>
        <a href="https://github.com/flubyGit" aria-label="GitHub">
          <FaGithub size={20} />
        </a>
      </li>
      <li>
        <a
          aria-label="Email"
          href="mailto:profissionalf.andre@gmail.com?subject=Olá Felipe..."
        >
          <AiOutlineMail size={20} />
        </a>
      </li>
      <li>
        <a aria-label="Linkedin" href="https://www.linkedin.com/in/devfandre/">
          <FaLinkedin size={20} />
        </a>
      </li>
      <li>
        <a
          aria-label="Whatsapp"
          href="http://wa.me/5511973813705?Olá Felipe..."
        >
          <FaWhatsapp size={20} />
        </a>
      </li>
    </ol>
  );
}
