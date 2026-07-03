import type { Meta, StoryObj } from "@storybook/react-vite";
import { TruncatedText } from "./index";

const meta: Meta<typeof TruncatedText> = {
	title: "Design System/Primitives/TruncatedText",
	component: TruncatedText,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		text: {
			control: "text",
			description: "The text to display and truncate",
		},
		className: {
			control: "text",
			description: "Additional classes for the text span",
		},
		tooltipClassName: {
			control: "text",
			description: "Additional classes for the tooltip content",
		},
	},
};

export default meta;

type Story = StoryObj<typeof TruncatedText>;

export const Default: Story = {
	args: {
		text: "This is a long text that will be truncated when it overflows its container width",
	},
	decorators: [
		(Story) => (
			<div className="w-48">
				<Story />
			</div>
		),
	],
};

export const ShortText: Story = {
	args: {
		text: "Short text",
	},
	decorators: [
		(Story) => (
			<div className="w-48">
				<Story />
			</div>
		),
	],
};
