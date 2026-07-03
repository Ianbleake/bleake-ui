import type { Meta, StoryObj } from "@storybook/react-vite";
import { Glow } from "./index";

const meta: Meta<typeof Glow> = {
	title: "Design System/Primitives/Decorative/Glow",
	component: Glow,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		className: {
			control: "text",
			description: "Tailwind classes for sizing and positioning",
		},
		background: {
			control: "text",
			description: "CSS background value (gradient or solid color)",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Glow>;

export const OrangeGlow: Story = {
	render: (args) => (
		<div className="relative w-full h-64 bg-gray-950 overflow-hidden flex items-center justify-center">
			<Glow
				{...args}
				className="w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-60"
				background="radial-gradient(circle, oklch(0.65 0.22 50) 0%, transparent 70%)"
			/>
			<span className="relative z-10 text-white text-sm font-medium">Content over glow</span>
		</div>
	),
};

export const MultiGlow: Story = {
	render: () => (
		<div className="relative w-full h-64 bg-gray-950 overflow-hidden">
			<Glow
				className="w-80 h-80 -top-20 -left-20 blur-3xl opacity-40"
				background="radial-gradient(circle, oklch(0.65 0.22 50) 0%, transparent 70%)"
			/>
			<Glow
				className="w-64 h-64 -bottom-16 -right-16 blur-3xl opacity-30"
				background="radial-gradient(circle, oklch(0.60 0.18 280) 0%, transparent 70%)"
			/>
		</div>
	),
};

export const SubtleGlow: Story = {
	render: (args) => (
		<div className="relative w-full h-48 bg-white overflow-hidden flex items-center justify-center">
			<Glow
				{...args}
				className="w-48 h-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-20"
				background="oklch(0.65 0.22 50)"
			/>
			<span className="relative z-10 text-gray-700 text-sm font-medium">
				Subtle light background
			</span>
		</div>
	),
};
