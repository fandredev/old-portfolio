import React, { useState, useEffect } from "react";
import "./styled.scss";
import Switch from "react-switch";
import rocket from "../../../assets/images/icons/rocket.png";

interface DarkTheme<T> {
  dark: T;
}
interface Width<T> {
  readonly width: T;
}
export default function ListItems({ width }: Width<number>): JSX.Element {
  const [theme, setTheme] = useState<DarkTheme<boolean>>({
    dark: false,
  });
  useEffect(() => {
    const getThemeLocalStorage = window.localStorage.getItem("Theme");
    if (getThemeLocalStorage) return document.body.classList.add("dark-mode");
  }, []);
  function handleTheme(): void {
    if (theme.dark) {
      window.localStorage.setItem("Theme", "dark");
      setTheme({ dark: true });
      document.body.classList.add("dark-mode");
    } else {
      window.localStorage.setItem("Theme", "light");
      setTheme({ dark: false });
      document.body.classList.remove("dark-mode");
    }
    setTheme({ dark: !theme.dark });
  }

  return (
    <>
      <ol>
        <li>
          <figure id="rocket">
            <img src={rocket} alt="Foguete ilustativo" />
          </figure>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
        <li>
          <a href="#who_my">Quem sou eu</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          {width > 600 && (
            <Switch onChange={handleTheme} checked={theme.dark} />
          )}
        </li>
      </ol>
    </>
  );
}
