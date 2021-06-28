import React from "react";
import { GiSmartphone } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { Button, ButtonProps } from "reactstrap";
import { Groups } from "../Projects";
import "./styled.scss";

type Props = ButtonProps & {
  onClick: (type: Groups) => void;
  title: "Mobile" | "Web";
};

export default function ButtonApplication({
  onClick,
  title,
}: Props): JSX.Element {
  return (
    <Button id="button-app" onClick={onClick}>
      {title === "Web" ? <RiComputerLine /> : <GiSmartphone />}
      {title}
    </Button>
  );
}
