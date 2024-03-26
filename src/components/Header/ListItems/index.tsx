import React, { useContext } from "react";
import { FiMoon } from "react-icons/fi";
import { WiSolarEclipse } from "react-icons/wi";
import Switch from "react-switch";
import "./styled.scss";

import rocket from "../../../assets/images/icons/rocket.png";
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import { LandingContext } from "../../../contexts/LandingContext";

export default function ListItems(): JSX.Element {
  const darkContext = useContext(DarkModeContext);
  const landingContext = useContext(LandingContext);

  const { theme, handleTheme } = darkContext;
  const { width } = landingContext;

  return (
    <>
      <ol className="flex justify-center items-center gap-4 font-secondary text-3xl text-white">
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
            <Switch
              onChange={() => handleTheme()}
              checked={theme}
              offColor="#000"
              uncheckedIcon={<FiMoon size={25} />}
              checkedIcon={<WiSolarEclipse size={25} />}
            />
          )}
        </li>
      </ol>
    </>
  );
}
