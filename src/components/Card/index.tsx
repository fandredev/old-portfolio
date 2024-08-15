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
      <section className="no-underline">
        <div
          className="flex bg-violet-500 w-full h-96 px-3 items-center justify-center flex-col text-center my-8 rounded-3xl font-secondary gap-4"
          id="card"
        >
          <figure className="mt-2">{children}</figure>
          <h2 className="text-4xl text-black leading-10">{title}</h2>
          <span className="text-white text-2xl leading-10">{description}</span>
        </div>
      </section>
    </aside>
  );
}
