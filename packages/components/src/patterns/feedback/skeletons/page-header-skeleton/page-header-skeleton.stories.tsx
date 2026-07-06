import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageHeaderSkeleton } from "./index";

const meta: Meta<typeof PageHeaderSkeleton> = {
	title: "Design System/Patterns/Feedback/Skeletons/PageHeaderSkeleton",
	component: PageHeaderSkeleton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof PageHeaderSkeleton>;

export const Default: Story = {
	decorators: [
		(Story) => (
			<div className="w-[900px]">
				<Story />
			</div>
		),
	],
};
