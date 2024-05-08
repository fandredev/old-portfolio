import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import ButtonApplication from "./Button";

const meta: Meta<typeof ButtonApplication> = {
  component: ButtonApplication,
  argTypes: {
    title: {
      description: "Título do botão",
    },
    onClick: {
      description: "Função que será executada ao clicar no botão",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonApplication>;

export const WithMobileTitle: Story = {
  render: () => <ButtonApplication title="Mobile" onClick={() => null} />,
  args: {
    title: "Mobile",
  },
};

export const WithWebTitle: Story = {
  render: () => <ButtonApplication title="Web" onClick={() => null} />,
  args: {
    title: "Web",
  },
};
