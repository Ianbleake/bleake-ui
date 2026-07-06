import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { FormDatePicker } from "./index";

const meta: Meta<typeof FormDatePicker> = {
	title: "Design System/Patterns/Forms/FormDatePicker",
	component: FormDatePicker,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormDatePicker>;

export const SingleDate: Story = {
	render: () => {
		const form = useForm({ defaultValues: { date: "" } });
		return (
			<div className="w-72">
				<FormDatePicker
					label="Date"
					name="date"
					mode="single"
					form={form}
				/>
			</div>
		);
	},
};

export const SingleDateRequired: Story = {
	render: () => {
		const form = useForm({ defaultValues: { date: "" } });
		return (
			<div className="w-72">
				<FormDatePicker
					label="Start date"
					name="date"
					mode="single"
					form={form}
					required
				/>
			</div>
		);
	},
};

export const SingleDateWithHelperText: Story = {
	render: () => {
		const form = useForm({ defaultValues: { date: "" } });
		return (
			<div className="w-72">
				<FormDatePicker
					label="Publication date"
					name="date"
					mode="single"
					form={form}
					helperText="The campaign will go live on this date."
				/>
			</div>
		);
	},
};

export const DateRange: Story = {
	render: () => {
		const form = useForm({ defaultValues: { range: "" } });
		return (
			<div className="w-72">
				<FormDatePicker
					label="Date range"
					name="range"
					mode="range"
					form={form}
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const form = useForm({ defaultValues: { date: "2026-07-01" } });
		return (
			<div className="w-72">
				<FormDatePicker
					label="Date"
					name="date"
					mode="single"
					form={form}
					disabled
				/>
			</div>
		);
	},
};

export const Optional: Story = {
	render: () => {
		const form = useForm({ defaultValues: { date: "" } });
		return (
			<div className="w-72">
				<FormDatePicker
					label="End date"
					name="date"
					mode="single"
					form={form}
					optional
				/>
			</div>
		);
	},
};
