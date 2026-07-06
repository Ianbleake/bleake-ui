import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonSkeleton } from "./index";

const meta: Meta<typeof ButtonSkeleton> = {
	title: "Design System/Patterns/Feedback/Skeletons/ButtonSkeleton",
	component: ButtonSkeleton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof ButtonSkeleton>;

export const Default: Story = {
	args: {
		size: "default",
	},
};

export const FullWidth: Story = {
	args: {
		fullWidth: true,
	},
	decorators: [
		(Story) => (
			<div className="w-80">
				<Story />
			</div>
		),
	],
};

export const IconSize: Story = {
	args: {
		size: "icon",
	},
};
