import React from "react";
import "./styled.scss";

interface Card<T, RN> {
  title: T;
  description: T;
  children: RN;
}

export default function Card({
  title,
  description,
  children,
}: Card<string, React.ReactNode>): JSX.Element {
  return (
    <aside>
      <div id="card">
        <figure>{children}</figure>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </aside>
  );
}
