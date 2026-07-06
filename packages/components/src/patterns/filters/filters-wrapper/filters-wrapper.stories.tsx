import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FilterSelect } from "../filter-select";
import { FiltersWrapper } from "./index";

const meta: Meta<typeof FiltersWrapper> = {
	title: "Design System/Patterns/Filters/FiltersWrapper",
	component: FiltersWrapper,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof FiltersWrapper>;

const STATUS_OPTIONS: Option[] = [
	{ value: "all", label: "All" },
	{ value: "active", label: "Active" },
	{ value: "paused", label: "Paused" },
	{ value: "completed", label: "Completed" },
];

export const Inline: Story = {
	render: () => {
		const [status, setStatus] = useState<string>("all");
		const hasActiveFilters = status !== "all";

		return (
			<FiltersWrapper
				variant="inline"
				activeFilterCount={hasActiveFilters ? 1 : 0}
				hasActiveFilters={hasActiveFilters}
				clearFilters={() => setStatus("all")}
				direction="right"
			>
				<FilterSelect
					options={STATUS_OPTIONS}
					value={status}
					onChange={setStatus}
					placeholder="Status"
				/>
			</FiltersWrapper>
		);
	},
};

export const InlineWithActiveFilter: Story = {
	render: () => {
		const [status, setStatus] = useState<string>("active");
		const hasActiveFilters = status !== "all";

		return (
			<FiltersWrapper
				variant="inline"
				activeFilterCount={hasActiveFilters ? 1 : 0}
				hasActiveFilters={hasActiveFilters}
				clearFilters={() => setStatus("all")}
				direction="right"
			>
				<FilterSelect
					options={STATUS_OPTIONS}
					value={status}
					onChange={setStatus}
					placeholder="Status"
				/>
			</FiltersWrapper>
		);
	},
};

export const Panel: Story = {
	render: () => {
		const [status, setStatus] = useState<string>("all");
		const hasActiveFilters = status !== "all";

		return (
			<FiltersWrapper
				variant="panel"
				activeFilterCount={hasActiveFilters ? 1 : 0}
				hasActiveFilters={hasActiveFilters}
				clearFilters={() => setStatus("all")}
				direction="right"
			>
				<FilterSelect
					options={STATUS_OPTIONS}
					value={status}
					onChange={setStatus}
					placeholder="Status"
				/>
			</FiltersWrapper>
		);
	},
};

export const DirectionLeft: Story = {
	render: () => {
		const [status, setStatus] = useState<string>("all");
		const hasActiveFilters = status !== "all";

		return (
			<FiltersWrapper
				variant="inline"
				activeFilterCount={hasActiveFilters ? 1 : 0}
				hasActiveFilters={hasActiveFilters}
				clearFilters={() => setStatus("all")}
				direction="left"
			>
				<FilterSelect
					options={STATUS_OPTIONS}
					value={status}
					onChange={setStatus}
					placeholder="Status"
				/>
			</FiltersWrapper>
		);
	},
};
