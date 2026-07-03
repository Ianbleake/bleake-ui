import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./index";

const meta: Meta<typeof Progress> = {
	title: "UI/Progress",
	component: Progress,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Zero: Story = {
	args: {
		value: 0,
	},
};

export const Half: Story = {
	args: {
		value: 50,
	},
};

export const Full: Story = {
	args: {
		value: 100,
	},
};

export const Indeterminate: Story = {
	args: {
		value: null,
	},
};
