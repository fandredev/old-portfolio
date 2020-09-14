import React from "react";
import "./styled.scss";

interface Card<T, RN> {
  readonly title: T;
  readonly description: T;
  readonly children: RN;
  readonly url: T;
}

export default function Card({
  title,
  description,
  children,
  url,
}: Card<string, React.ReactNode>): JSX.Element {
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
