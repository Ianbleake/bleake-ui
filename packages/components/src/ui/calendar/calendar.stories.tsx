import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Calendar } from "./index";

const meta: Meta<typeof Calendar> = {
	title: "UI/Calendar",
	component: Calendar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
	render: () => <Calendar mode="single" />,
};

export const WithSelectedDate: Story = {
	render: () => {
		const [selected, setSelected] = useState<Date | undefined>(new Date());

		return (
			<Calendar
				mode="single"
				selected={selected}
				onSelect={setSelected}
			/>
		);
	},
};

export const WithDropdownCaption: Story = {
	render: () => {
		const [selected, setSelected] = useState<Date | undefined>(new Date());

		return (
			<Calendar
				mode="single"
				captionLayout="dropdown"
				selected={selected}
				onSelect={setSelected}
			/>
		);
	},
};

export const RangeSelection: Story = {
	render: () => {
		const [range, setRange] = useState<DateRange | undefined>({
			from: new Date(),
			to: undefined,
		});

		return (
			<Calendar
				mode="range"
				selected={range}
				onSelect={setRange}
			/>
		);
	},
};
