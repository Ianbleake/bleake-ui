import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./index";

const meta: Meta<typeof Textarea> = {
	title: "UI/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	decorators: [
		(Story) => (
			<div className="w-72">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {},
};

export const WithPlaceholder: Story = {
	args: {
		placeholder: "Write your message here…",
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled textarea",
		disabled: true,
	},
};

export const WithValue: Story = {
	args: {
		defaultValue:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
};
