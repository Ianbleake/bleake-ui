import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoCard } from "./index";

const meta: Meta<typeof InfoCard> = {
	title: "Design System/Patterns/Data Display/InfoCard",
	component: InfoCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg"],
			description: "Size of the info icon trigger",
		},
		position: {
			control: "select",
			options: ["top", "right", "left", "bottom"],
			description: "Position of the hover card relative to the trigger",
		},
	},
};

export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
	args: {
		size: "md",
		position: "top",
	},
	render: (args) => (
		<InfoCard {...args}>
			<p className="text-sm text-gray-700">
				This field controls the campaign visibility. Only active campaigns are shown to candidates.
			</p>
		</InfoCard>
	),
};

export const Small: Story = {
	args: {
		size: "sm",
		position: "right",
	},
	render: (args) => (
		<InfoCard {...args}>
			<p className="text-sm text-gray-700">Short helper text for small icon size.</p>
		</InfoCard>
	),
};

export const Large: Story = {
	args: {
		size: "lg",
		position: "bottom",
	},
	render: (args) => (
		<InfoCard {...args}>
			<div className="flex flex-col gap-2">
				<p className="text-sm font-semibold text-gray-900">Budget allocation</p>
				<p className="text-sm text-gray-600">
					The budget is distributed across all active channels. Adjustments take effect on the next
					billing cycle.
				</p>
			</div>
		</InfoCard>
	),
};
