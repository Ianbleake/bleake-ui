import type { Meta, StoryObj } from "@storybook/react-vite";
import { Separator } from "./index";

const meta: Meta<typeof Separator> = {
	title: "UI/Separator",
	component: Separator,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<p>Content above</p>
			<Separator />
			<p>Content below</p>
		</div>
	),
};

export const Vertical: Story = {
	render: () => (
		<div className="flex h-20 items-center gap-4">
			<span>Left</span>
			<Separator orientation="vertical" />
			<span>Right</span>
		</div>
	),
};
