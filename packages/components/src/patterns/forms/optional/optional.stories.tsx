import type { Meta, StoryObj } from "@storybook/react-vite";
import { Optional } from "./index";

const meta: Meta<typeof Optional> = {
	title: "Design System/Patterns/Forms/Optional",
	component: Optional,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Optional>;

export const Default: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<span className="text-sm font-medium">Field label</span>
			<Optional />
		</div>
	),
};

export const Standalone: Story = {
	render: () => <Optional />,
};
