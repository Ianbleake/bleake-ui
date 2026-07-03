import type { Meta, StoryObj } from "@storybook/react-vite";
import { WaveLayer } from "./index";

const WAVE_PATH = "M0 400 C100 300 200 500 350 350 C500 200 600 450 700 300 L700 600 L0 600 Z";

const meta: Meta<typeof WaveLayer> = {
	title: "Design System/Primitives/Decorative/WaveLayer",
	component: WaveLayer,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		fill: {
			control: "color",
			description: "Fill color for the wave path",
		},
		className: {
			control: "text",
			description: "Tailwind classes applied to the SVG element",
		},
		viewBox: {
			control: "text",
			description: "SVG viewBox attribute",
		},
	},
};

export default meta;

type Story = StoryObj<typeof WaveLayer>;

export const Default: Story = {
	render: (args) => (
		<div className="relative w-full h-48 bg-gray-100 overflow-hidden">
			<WaveLayer
				{...args}
				className="absolute bottom-0 left-0 w-full h-full"
				path={WAVE_PATH}
				fill="oklch(0.65 0.22 50 / 0.2)"
			/>
		</div>
	),
};

export const OrangeFill: Story = {
	render: () => (
		<div className="relative w-full h-64 bg-gray-950 overflow-hidden">
			<WaveLayer
				className="absolute bottom-0 left-0 w-full h-full"
				path={WAVE_PATH}
				fill="oklch(0.65 0.22 50 / 0.15)"
			/>
		</div>
	),
};

export const LayeredWaves: Story = {
	render: () => (
		<div className="relative w-full h-64 bg-gray-950 overflow-hidden">
			<WaveLayer
				className="absolute bottom-0 left-0 w-full h-full"
				path="M0 450 C150 350 250 500 400 380 C550 260 650 430 700 320 L700 600 L0 600 Z"
				fill="oklch(0.65 0.22 50 / 0.08)"
			/>
			<WaveLayer
				className="absolute bottom-0 left-0 w-full h-full"
				path={WAVE_PATH}
				fill="oklch(0.65 0.22 50 / 0.15)"
			/>
		</div>
	),
};
