import React from "react";
import { CardProps } from "../../types/components";
import "./styled.scss";

export default function Card({
  title,
  description,
  children,
  url,
}: CardProps): JSX.Element {
  return (
    <aside>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div id="card">
          <figure>{children}</figure>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </a>
    </aside>
  );
}
