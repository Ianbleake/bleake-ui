import type { Meta, StoryObj } from "@storybook/react-vite";
import type React from "react";
import { Steps } from "./index";

const meta: Meta<typeof Steps> = {
	title: "Design System/Primitives/Steps",
	component: Steps,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		currentStep: {
			control: { type: "number", min: 1, max: 8 },
			description: "Currently active step number",
		},
		className: {
			control: "text",
			description: "Additional classes for the wrapper",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Steps>;

const THREE_STEPS: Step[] = [
	{ step: 1, label: "Account" },
	{ step: 2, label: "Details" },
	{ step: 3, label: "Confirm" },
];

const FOUR_STEPS: Step[] = [
	{ step: 1, label: "Setup" },
	{ step: 2, label: "Content" },
	{ step: 3, label: "Targeting" },
	{ step: 4, label: "Review" },
];

const FIVE_STEPS: Step[] = [
	{ step: 1, label: "Basics" },
	{ step: 2, label: "Audience" },
	{ step: 3, label: "Budget" },
	{ step: 4, label: "Creative" },
	{ step: 5, label: "Launch" },
];

export const ThreeStepsFirst: Story = {
	args: {
		steps: THREE_STEPS,
		currentStep: 1,
	},
	decorators: [
		(Story) => (
			<div className="w-[600px]">
				<Story />
			</div>
		),
	],
};

export const ThreeStepsMiddle: Story = {
	args: {
		steps: THREE_STEPS,
		currentStep: 2,
	},
	decorators: [
		(Story) => (
			<div className="w-[600px]">
				<Story />
			</div>
		),
	],
};

export const ThreeStepsLast: Story = {
	args: {
		steps: THREE_STEPS,
		currentStep: 3,
	},
	decorators: [
		(Story) => (
			<div className="w-[600px]">
				<Story />
			</div>
		),
	],
};

export const FourSteps: Story = {
	args: {
		steps: FOUR_STEPS,
		currentStep: 2,
	},
	decorators: [
		(Story) => (
			<div className="w-[600px]">
				<Story />
			</div>
		),
	],
};

export const FiveSteps: Story = {
	args: {
		steps: FIVE_STEPS,
		currentStep: 3,
	},
	decorators: [
		(Story) => (
			<div className="w-[600px]">
				<Story />
			</div>
		),
	],
};

export const NoLabels: Story = {
	args: {
		steps: [{ step: 1 }, { step: 2 }, { step: 3 }, { step: 4 }],
		currentStep: 2,
	},
	decorators: [
		(Story) => (
			<div className="w-[600px]">
				<Story />
			</div>
		),
	],
};

const barDecorator = [
	(Story: () => React.ReactElement) => (
		<div className="w-80">
			<Story />
		</div>
	),
];

export const BarThreeStepsFirst: Story = {
	args: {
		steps: THREE_STEPS,
		currentStep: 1,
		variant: "bar",
		label: "Step 1 of 3",
	},
	decorators: barDecorator,
};

export const BarThreeStepsMiddle: Story = {
	args: {
		steps: THREE_STEPS,
		currentStep: 2,
		variant: "bar",
		label: "Step 2 of 3",
	},
	decorators: barDecorator,
};

export const BarThreeStepsLast: Story = {
	args: {
		steps: THREE_STEPS,
		currentStep: 3,
		variant: "bar",
		label: "Step 3 of 3",
	},
	decorators: barDecorator,
};
