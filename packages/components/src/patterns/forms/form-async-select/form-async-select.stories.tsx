import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormAsyncSelect } from "./index";

const meta: Meta<typeof FormAsyncSelect> = {
	title: "Design System/Patterns/Forms/FormAsyncSelect",
	component: FormAsyncSelect,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormAsyncSelect>;

const ALL_OPTIONS: Option[] = [
	{ value: "1", label: "Alice Johnson" },
	{ value: "2", label: "Bob Smith" },
	{ value: "3", label: "Carol Davis" },
	{ value: "4", label: "David Wilson" },
	{ value: "5", label: "Eve Martinez" },
];

export const Default: Story = {
	render: () => {
		const form = useForm({ defaultValues: { user: "" } });
		const [options, setOptions] = useState<Option[]>(ALL_OPTIONS);

		const handleSearch = (value: string) => {
			const lower = value.toLowerCase();
			setOptions(ALL_OPTIONS.filter((option) => option.label.toLowerCase().includes(lower)));
		};

		return (
			<div className="w-72">
				<FormAsyncSelect
					label="Assigned user"
					name="user"
					form={form}
					options={options}
					onSearch={handleSearch}
					placeholder="Select a user"
				/>
			</div>
		);
	},
};

export const Loading: Story = {
	render: () => {
		const form = useForm({ defaultValues: { user: "" } });

		return (
			<div className="w-72">
				<FormAsyncSelect
					label="Assigned user"
					name="user"
					form={form}
					options={[]}
					onSearch={() => undefined}
					isLoading
					placeholder="Select a user"
				/>
			</div>
		);
	},
};

export const WithHasMore: Story = {
	render: () => {
		const form = useForm({ defaultValues: { user: "" } });
		const [options] = useState<Option[]>(ALL_OPTIONS.slice(0, 3));

		return (
			<div className="w-72">
				<FormAsyncSelect
					label="Assigned user"
					name="user"
					form={form}
					options={options}
					onSearch={() => undefined}
					onLoadMore={() => undefined}
					hasMore
					placeholder="Select a user"
				/>
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const form = useForm({ defaultValues: { user: "" } });

		return (
			<div className="w-72">
				<FormAsyncSelect
					label="Assigned user"
					name="user"
					form={form}
					options={ALL_OPTIONS}
					onSearch={() => undefined}
					required
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const form = useForm({ defaultValues: { user: "1" } });

		return (
			<div className="w-72">
				<FormAsyncSelect
					label="Assigned user"
					name="user"
					form={form}
					options={ALL_OPTIONS}
					onSearch={() => undefined}
					disabled
				/>
			</div>
		);
	},
};
