import type { Meta, StoryObj } from "@storybook/react-vite";
import { SlideUp } from "./index";

const meta: Meta<typeof SlideUp> = {
	title: "Design System/Patterns/Animations/SlideUp",
	component: SlideUp,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof SlideUp>;

export const Default: Story = {
	args: {
		children: (
			<div className="rounded-xl border bg-white p-6 shadow-sm">
				<p className="text-sm font-medium text-gray-900">Slide up animation</p>
				<p className="text-xs text-gray-500">This card slides up from below on mount.</p>
			</div>
		),
	},
};

export const WithCard: Story = {
	name: "With Card Content",
	render: () => (
		<SlideUp>
			<div className="w-72 rounded-xl border bg-white p-6 shadow-md">
				<h3 className="text-base font-semibold text-gray-900">Campaign Summary</h3>
				<p className="mt-1 text-sm text-gray-500">34,218 impressions · 1,204 clicks</p>
			</div>
		</SlideUp>
	),
};

export const MultipleStaggered: Story = {
	name: "Multiple Items (Staggered)",
	render: () => (
		<div className="flex flex-col gap-4 w-72">
			<SlideUp>
				<div className="rounded-xl border bg-white p-4 shadow-sm">
					<p className="text-sm font-semibold text-gray-900">Item 1</p>
					<p className="text-xs text-gray-500">First card — animates in</p>
				</div>
			</SlideUp>
			<SlideUp>
				<div className="rounded-xl border bg-white p-4 shadow-sm">
					<p className="text-sm font-semibold text-gray-900">Item 2</p>
					<p className="text-xs text-gray-500">Second card — same animation</p>
				</div>
			</SlideUp>
			<SlideUp>
				<div className="rounded-xl border bg-white p-4 shadow-sm">
					<p className="text-sm font-semibold text-gray-900">Item 3</p>
					<p className="text-xs text-gray-500">Third card — same animation</p>
				</div>
			</SlideUp>
		</div>
	),
};

export const WithCustomClass: Story = {
	name: "With Custom className",
	render: () => (
		<SlideUp className="rounded-2xl bg-orange-50 p-8 text-center shadow-lg">
			<p className="text-sm font-semibold text-orange-700">Custom styled wrapper</p>
			<p className="text-xs text-orange-500">className is forwarded to the motion div.</p>
		</SlideUp>
	),
};
