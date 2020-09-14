import React from "react";
import "./styled.scss";

interface Project<T> {
  image: T;
  description: T;
  text: T;
  url: T;
}

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
