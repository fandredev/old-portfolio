import React, { ReactNode } from "react";
import "./styled.scss";

interface Card<T, RN> {
  title: T;
  description: T;
  children: RN;
  url: T;
}

type CardProps = Readonly<Card<string, ReactNode>>;

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
