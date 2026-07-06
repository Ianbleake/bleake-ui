import type { Meta, StoryObj } from "@storybook/react-vite";
import { BreadcrumbSkeleton } from "./index";

const meta: Meta<typeof BreadcrumbSkeleton> = {
	title: "Design System/Patterns/Feedback/Skeletons/BreadcrumbSkeleton",
	component: BreadcrumbSkeleton,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof BreadcrumbSkeleton>;

export const Default: Story = {};
