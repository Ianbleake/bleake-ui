import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageSkeleton } from "./index";

const meta: Meta<typeof PageSkeleton> = {
	title: "Design System/Patterns/Feedback/Skeletons/PageSkeleton",
	component: PageSkeleton,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof PageSkeleton>;

export const Default: Story = {};
