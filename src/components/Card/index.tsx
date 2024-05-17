import React from "react";
import { CardProps } from "../../types/components";
import "./styled.scss";

export default function Card({
  title,
  description,
  children,
  url = "",
}: CardProps): JSX.Element {
  return (
    <aside>
      <section>
        <div
          className="flex items-center justify-center flex-col text-center my-8 rounded-3xl font-secondary gap-4"
          id="card"
        >
          <figure className="mt-2">{children}</figure>
          <h2 className="text-4xl leading-10">{title}</h2>
          <span className="text-white text-2xl leading-10">{description}</span>
        </div>
      </section>
    </aside>
  );
}
