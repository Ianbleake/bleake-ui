import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./index";

const meta: Meta<typeof Switch> = {
	title: "UI/Switch",
	component: Switch,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Off: Story = {
	args: {},
};

export const On: Story = {
	args: {
		checked: true,
	},
};

export const Small: Story = {
	args: {
		size: "sm",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};
