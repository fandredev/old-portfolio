import React from "react";
import "./styled.scss";
import { FaGithub, FaDiscord, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia(): JSX.Element {
  return (
    <ol>
      <li>
        <FaGithub size={20} />
      </li>
      <li>
        <FaDiscord size={20} />
      </li>
      <li>
        <FaLinkedin size={20} />
      </li>
      <li>
        <FaWhatsapp size={20} />
      </li>
    </ol>
  );
}
