import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./index";

const meta: Meta<typeof Spinner> = {
	title: "UI/Spinner",
	component: Spinner,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
	args: {},
};

export const Large: Story = {
	args: {
		className: "size-8",
	},
};
