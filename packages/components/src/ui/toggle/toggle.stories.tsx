import type { Meta, StoryObj } from "@storybook/react-vite";
import { BoldIcon } from "lucide-react";
import { Toggle } from "./index";

const meta: Meta<typeof Toggle> = {
	title: "UI/Toggle",
	component: Toggle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	args: {
		children: "Toggle",
	},
};

export const Pressed: Story = {
	args: {
		children: "Pressed",
		pressed: true,
	},
};

export const WithIcon: Story = {
	args: {
		children: <BoldIcon />,
		pressed: true,
	},
};

export const Disabled: Story = {
	args: {
		children: "Disabled",
		disabled: true,
	},
};
