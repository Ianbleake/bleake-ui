import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SearchFilterSelect } from "./index";

const meta: Meta<typeof SearchFilterSelect> = {
	title: "Design System/Patterns/Filters/SearchFilterSelect",
	component: SearchFilterSelect,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof SearchFilterSelect>;

const ALL_OPTIONS: Option[] = [
	{ value: "1", label: "Campaign Alpha" },
	{ value: "2", label: "Campaign Beta" },
	{ value: "3", label: "Campaign Gamma" },
	{ value: "4", label: "Campaign Delta" },
	{ value: "5", label: "Campaign Epsilon" },
];

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<string | undefined>(undefined);
		const [options, setOptions] = useState<Option[]>(ALL_OPTIONS);

		const handleSearch = (term: string) => {
			const filtered = ALL_OPTIONS.filter((option) =>
				option.label.toLowerCase().includes(term.toLowerCase()),
			);
			setOptions(filtered);
		};

		return (
			<SearchFilterSelect
				placeholder="Select campaign..."
				allLabel="All campaigns"
				searchPlaceholder="Search campaigns..."
				value={value}
				onChange={setValue}
				options={options}
				onSearch={handleSearch}
			/>
		);
	},
};

export const WithValueSelected: Story = {
	render: () => {
		const [value, setValue] = useState<string | undefined>("2");
		const [options, setOptions] = useState<Option[]>(ALL_OPTIONS);

		const handleSearch = (term: string) => {
			const filtered = ALL_OPTIONS.filter((option) =>
				option.label.toLowerCase().includes(term.toLowerCase()),
			);
			setOptions(filtered);
		};

		return (
			<SearchFilterSelect
				placeholder="Select campaign..."
				allLabel="All campaigns"
				searchPlaceholder="Search campaigns..."
				value={value}
				onChange={setValue}
				options={options}
				onSearch={handleSearch}
			/>
		);
	},
};

export const Loading: Story = {
	render: () => (
		<SearchFilterSelect
			placeholder="Select campaign..."
			allLabel="All campaigns"
			searchPlaceholder="Search campaigns..."
			value={undefined}
			onChange={() => undefined}
			options={[]}
			isLoading
		/>
	),
};

export const WithAsyncSearch: Story = {
	render: () => {
		const [value, setValue] = useState<string | undefined>(undefined);
		const [options, setOptions] = useState<Option[]>(ALL_OPTIONS);
		const [isLoading, setIsLoading] = useState<boolean>(false);

		const handleSearch = (term: string) => {
			setIsLoading(true);
			// Simulate async search with a short delay
			setTimeout(() => {
				const filtered = ALL_OPTIONS.filter((option) =>
					option.label.toLowerCase().includes(term.toLowerCase()),
				);
				setOptions(filtered);
				setIsLoading(false);
			}, 600);
		};

		return (
			<SearchFilterSelect
				placeholder="Select campaign..."
				allLabel="All campaigns"
				searchPlaceholder="Search campaigns..."
				value={value}
				onChange={setValue}
				options={options}
				isLoading={isLoading}
				onSearch={handleSearch}
			/>
		);
	},
};
