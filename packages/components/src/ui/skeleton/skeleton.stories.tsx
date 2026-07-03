import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./index";

const meta: Meta<typeof Skeleton> = {
	title: "UI/Skeleton",
	component: Skeleton,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
	args: {
		className: "h-4 w-48",
	},
};

export const Card: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Skeleton className="size-12 rounded-full" />
			<div className="flex flex-col gap-2">
				<Skeleton className="h-4 w-32" />
				<Skeleton className="h-3 w-24" />
			</div>
		</div>
	),
};
