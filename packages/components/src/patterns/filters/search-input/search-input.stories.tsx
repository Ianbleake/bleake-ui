import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SearchInput } from "./index";

const meta: Meta<typeof SearchInput> = {
	title: "Design System/Patterns/Filters/SearchInput",
	component: SearchInput,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<string | undefined>(undefined);

		return (
			<SearchInput
				value={value}
				onCommit={setValue}
			/>
		);
	},
};

export const WithCustomPlaceholder: Story = {
	render: () => {
		const [value, setValue] = useState<string | undefined>(undefined);

		return (
			<SearchInput
				value={value}
				onCommit={setValue}
				placeholder="Search campaigns..."
			/>
		);
	},
};

export const WithValue: Story = {
	render: () => {
		const [value, setValue] = useState<string | undefined>("Campaign Alpha");

		return (
			<SearchInput
				value={value}
				onCommit={setValue}
				placeholder="Search..."
			/>
		);
	},
};
