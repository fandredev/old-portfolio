import React from "react";
import rocketPng from "../../assets/images/icons/rocket.png";

type RocketProps = {
  alt?: string;
};

export default function Rocket({ alt = "Foguete ilustativo" }: RocketProps) {
  return (
    <figure>
      <img src={rocketPng} alt={alt} />
    </figure>
  );
}
