import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
	title: "UI/Input",
	component: Input,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	decorators: [
		(Story) => (
			<div className="w-64">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		type: "text",
	},
};

export const WithPlaceholder: Story = {
	args: {
		type: "text",
		placeholder: "Enter text here…",
	},
};

export const Disabled: Story = {
	args: {
		type: "text",
		placeholder: "Disabled input",
		disabled: true,
	},
};

export const TypeEmail: Story = {
	args: {
		type: "email",
		placeholder: "you@example.com",
	},
};

export const TypePassword: Story = {
	args: {
		type: "password",
		placeholder: "Enter your password",
	},
};

export const TypeNumber: Story = {
	args: {
		type: "number",
		placeholder: "0",
	},
};
