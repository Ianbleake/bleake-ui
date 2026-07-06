import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FilterSelect } from "./index";

const meta: Meta<typeof FilterSelect> = {
	title: "Design System/Patterns/Filters/FilterSelect",
	component: FilterSelect,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FilterSelect>;

const STATUS_OPTIONS: Option[] = [
	{ value: "all", label: "All statuses" },
	{ value: "active", label: "Active" },
	{ value: "paused", label: "Paused" },
	{ value: "completed", label: "Completed" },
	{ value: "draft", label: "Draft" },
];

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<string>("all");

		return (
			<FilterSelect
				label="Status"
				options={STATUS_OPTIONS}
				value={value}
				onChange={setValue}
				placeholder="Select status..."
			/>
		);
	},
};

export const ActiveState: Story = {
	render: () => {
		const [value, setValue] = useState<string>("active");

		return (
			<FilterSelect
				label="Status"
				options={STATUS_OPTIONS}
				value={value}
				onChange={setValue}
				placeholder="Select status..."
			/>
		);
	},
};

export const WithoutLabel: Story = {
	render: () => {
		const [value, setValue] = useState<string>("");

		return (
			<FilterSelect
				options={STATUS_OPTIONS}
				value={value}
				onChange={setValue}
				placeholder="Select status..."
			/>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<FilterSelect
			label="Status"
			options={STATUS_OPTIONS}
			value="active"
			placeholder="Select status..."
			disabled
		/>
	),
};
