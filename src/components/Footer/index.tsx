import React from "react";
// import "./styled.scss";

import SocialMedia from "./SocialMedia";

const date: number = new Date().getFullYear();

export default function Footer(): JSX.Element {
  return (
    <footer className="text-center text-white gap-4 flex justify-center items-center flex-row flex-wrap bg-indigo-600 font-tertiary">
      <SocialMedia />
      <aside className="leading-9 md:px-2">
        <p>
          Página feita com ReactJS, <span>Typescript</span>,{" "}
          <span>
            <abbr
              className="no-underline"
              title="Syntactically Awesome Style Sheets"
            >
              Sass
            </abbr>
          </span>{" "}
          e TaildwindCSS.
        </p>
        <span> {date} &mdash; Felipe André</span>
      </aside>
    </footer>
  );
}
