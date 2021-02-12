import React from "react";
import { Project } from "../../../interfaces/components";
import "./styled.scss";

export default function CardProjects({
  image,
  description,
  text,
  url,
}: Project<string>): JSX.Element {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div id="projects">
        <img src={image} alt={description} />
        <h2>{text}</h2>
      </div>
    </a>
  );
}
