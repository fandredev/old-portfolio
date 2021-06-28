import React from "react";
import rocketPng from "../../assets/images/icons/rocket.png";

type Props = {
  alt?: string;
};

export default function Rocket({ alt = "Foguete ilustativo" }: Props) {
  return (
    <figure>
      <img src={rocketPng} alt={alt} />
    </figure>
  );
}
