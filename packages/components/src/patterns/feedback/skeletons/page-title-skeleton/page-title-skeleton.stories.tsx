import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageTitleSkeleton } from "./index";

const meta: Meta<typeof PageTitleSkeleton> = {
	title: "Design System/Patterns/Feedback/Skeletons/PageTitleSkeleton",
	component: PageTitleSkeleton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof PageTitleSkeleton>;

export const Default: Story = {};
