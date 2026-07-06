import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormAsyncMultiSelect } from "./index";

const meta: Meta<typeof FormAsyncMultiSelect> = {
	title: "Design System/Patterns/Forms/FormAsyncMultiSelect",
	component: FormAsyncMultiSelect,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormAsyncMultiSelect>;

const ALL_OPTIONS: Option[] = [
	{ value: "1", label: "Alice Johnson" },
	{ value: "2", label: "Bob Smith" },
	{ value: "3", label: "Carol Davis" },
	{ value: "4", label: "David Wilson" },
	{ value: "5", label: "Eve Martinez" },
];

export const Default: Story = {
	render: () => {
		const form = useForm({ defaultValues: { users: [] } });
		const [options, setOptions] = useState<Option[]>(ALL_OPTIONS);

		const handleSearch = (value: string) => {
			const lower = value.toLowerCase();
			setOptions(ALL_OPTIONS.filter((option) => option.label.toLowerCase().includes(lower)));
		};

		return (
			<div className="w-72">
				<FormAsyncMultiSelect
					label="Team members"
					name="users"
					form={form}
					options={options}
					onSearch={handleSearch}
					onLoadMore={() => undefined}
					placeholder="Select team members"
				/>
			</div>
		);
	},
};

export const Loading: Story = {
	render: () => {
		const form = useForm({ defaultValues: { users: [] } });

		return (
			<div className="w-72">
				<FormAsyncMultiSelect
					label="Team members"
					name="users"
					form={form}
					options={[]}
					onSearch={() => undefined}
					onLoadMore={() => undefined}
					isLoading
				/>
			</div>
		);
	},
};

export const WithHasMore: Story = {
	render: () => {
		const form = useForm({ defaultValues: { users: [] } });

		return (
			<div className="w-72">
				<FormAsyncMultiSelect
					label="Team members"
					name="users"
					form={form}
					options={ALL_OPTIONS.slice(0, 3)}
					onSearch={() => undefined}
					onLoadMore={() => undefined}
					hasMore
				/>
			</div>
		);
	},
};

export const WithPreselected: Story = {
	render: () => {
		const form = useForm({ defaultValues: { users: ["1", "3"] } });

		return (
			<div className="w-72">
				<FormAsyncMultiSelect
					label="Team members"
					name="users"
					form={form}
					options={ALL_OPTIONS}
					onSearch={() => undefined}
					onLoadMore={() => undefined}
				/>
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const form = useForm({ defaultValues: { users: [] } });

		return (
			<div className="w-72">
				<FormAsyncMultiSelect
					label="Team members"
					name="users"
					form={form}
					options={ALL_OPTIONS}
					onSearch={() => undefined}
					onLoadMore={() => undefined}
					required
				/>
			</div>
		);
	},
};
