import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { FormSelect } from "./index";

const meta: Meta<typeof FormSelect> = {
	title: "Design System/Patterns/Forms/FormSelect",
	component: FormSelect,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormSelect>;

const STATUS_OPTIONS: Option[] = [
	{ value: "active", label: "Active" },
	{ value: "paused", label: "Paused" },
	{ value: "completed", label: "Completed" },
	{ value: "draft", label: "Draft" },
];

export const Default: Story = {
	render: () => {
		const form = useForm({ defaultValues: { status: "" } });
		return (
			<div className="w-72">
				<FormSelect
					label="Status"
					name="status"
					form={form}
					options={STATUS_OPTIONS}
					placeholder="Select a status"
				/>
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const form = useForm({ defaultValues: { status: "" } });
		return (
			<div className="w-72">
				<FormSelect
					label="Status"
					name="status"
					form={form}
					options={STATUS_OPTIONS}
					required
				/>
			</div>
		);
	},
};

export const Searchable: Story = {
	render: () => {
		const form = useForm({ defaultValues: { status: "" } });
		return (
			<div className="w-72">
				<FormSelect
					label="Status"
					name="status"
					form={form}
					options={STATUS_OPTIONS}
					searchable
					searchPlaceholder="Search status..."
				/>
			</div>
		);
	},
};

export const WithHelperText: Story = {
	render: () => {
		const form = useForm({ defaultValues: { status: "" } });
		return (
			<div className="w-72">
				<FormSelect
					label="Status"
					name="status"
					form={form}
					options={STATUS_OPTIONS}
					helperText="Controls the campaign visibility."
				/>
			</div>
		);
	},
};

export const Optional: Story = {
	render: () => {
		const form = useForm({ defaultValues: { status: "" } });
		return (
			<div className="w-72">
				<FormSelect
					label="Status"
					name="status"
					form={form}
					options={STATUS_OPTIONS}
					optional
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const form = useForm({ defaultValues: { status: "active" } });
		return (
			<div className="w-72">
				<FormSelect
					label="Status"
					name="status"
					form={form}
					options={STATUS_OPTIONS}
					disabled
				/>
			</div>
		);
	},
};
