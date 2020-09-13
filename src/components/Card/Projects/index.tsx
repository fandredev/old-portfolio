import React from "react";
import "./styled.scss";

interface Project<T> {
  image: T;
  description: T;
  text: T;
}

export default function CardProjects({
  image,
  description,
  text,
}: Project<string>): JSX.Element {
  return (
    <div id="projects">
      <img src={image} alt={description} />
      <h2>{text}</h2>
    </div>
  );
}
