import React from "react";
import { GiSmartphone } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { Button, ButtonProps } from "reactstrap";
import { Groups } from "../Projects";

type Props = ButtonProps & {
  onClick: (type: Groups) => void;
  title: "Mobile" | "Web";
};

export default function ButtonApplication({
  onClick,
  title,
}: Props): JSX.Element {
  return (
    <Button
      data-testid="button-application"
      className="transition-width bg-emerald-700 first:mr-5 w-80 border-4 border-solid border-transparent py-8 font-tertiary font-semibold text-4xl text-white flex items-center justify-center rounded-xl hover:opacity-80 hover:transition hover:rotate-neg-1"
      onClick={onClick}
    >
      {title === "Web" ? <RiComputerLine /> : <GiSmartphone />}
      {title}
    </Button>
  );
}
