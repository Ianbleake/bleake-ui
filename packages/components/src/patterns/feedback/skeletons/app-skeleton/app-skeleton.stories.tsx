import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppSkeleton } from "./index";

const meta: Meta<typeof AppSkeleton> = {
	title: "Design System/Patterns/Feedback/Skeletons/AppSkeleton",
	component: AppSkeleton,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof AppSkeleton>;

export const Default: Story = {};

export const InContainer: Story = {
	name: "In Bounded Container",
	parameters: {
		layout: "centered",
	},
	render: () => (
		<div className="h-[600px] w-[900px] overflow-hidden rounded-xl border shadow-lg">
			<AppSkeleton />
		</div>
	),
};
