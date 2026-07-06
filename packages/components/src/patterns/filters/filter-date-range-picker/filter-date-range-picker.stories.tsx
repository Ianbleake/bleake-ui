import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FilterDateRangePicker } from "./index";

const meta: Meta<typeof FilterDateRangePicker> = {
	title: "Design System/Patterns/Filters/FilterDateRangePicker",
	component: FilterDateRangePicker,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FilterDateRangePicker>;

export const Default: Story = {
	render: () => {
		const [from, setFrom] = useState<string | undefined>(undefined);
		const [to, setTo] = useState<string | undefined>(undefined);

		const handleChange = (nextFrom?: string, nextTo?: string) => {
			setFrom(nextFrom);
			setTo(nextTo);
		};

		return (
			<FilterDateRangePicker
				dateFrom={from}
				dateTo={to}
				onChangeRange={handleChange}
				placeholder="Date range"
			/>
		);
	},
};

export const WithDateRangeSelected: Story = {
	render: () => {
		const [from, setFrom] = useState<string | undefined>("2025-06-01");
		const [to, setTo] = useState<string | undefined>("2025-06-30");

		const handleChange = (nextFrom?: string, nextTo?: string) => {
			setFrom(nextFrom);
			setTo(nextTo);
		};

		return (
			<FilterDateRangePicker
				dateFrom={from}
				dateTo={to}
				onChangeRange={handleChange}
				placeholder="Date range"
			/>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<FilterDateRangePicker
			dateFrom={undefined}
			dateTo={undefined}
			onChangeRange={() => undefined}
			placeholder="Date range"
			disabled
		/>
	),
};
