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
        <div
          className="flex items-center justify-center flex-col text-center my-8 rounded-3xl font-secondary"
          id="card"
        >
          <figure className="mt-2">{children}</figure>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </a>
    </aside>
  );
}
