import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../input";
import { Label } from "./index";

const meta: Meta<typeof Label> = {
	title: "UI/Label",
	component: Label,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
	args: {
		children: "Email address",
	},
};

export const WithHtmlFor: Story = {
	render: () => (
		<div className="flex flex-col gap-1.5 w-64">
			<Label htmlFor="email-input">Email address</Label>
			<Input
				id="email-input"
				type="email"
				placeholder="you@example.com"
			/>
		</div>
	),
};

export const WithHtmlForDisabled: Story = {
	render: () => (
		<div className="flex flex-col gap-1.5 w-64">
			<Label htmlFor="disabled-input">Username</Label>
			<Input
				id="disabled-input"
				type="text"
				placeholder="Unavailable"
				disabled
			/>
		</div>
	),
};
