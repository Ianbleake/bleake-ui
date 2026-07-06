import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { FormYearSelector } from "./index";

const meta: Meta<typeof FormYearSelector> = {
	title: "Design System/Patterns/Forms/FormYearSelector",
	component: FormYearSelector,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormYearSelector>;

export const SingleYear: Story = {
	render: () => {
		const form = useForm({ defaultValues: { year: "" } });
		return (
			<div className="w-72">
				<FormYearSelector
					label="Year"
					name="year"
					mode="single"
					form={form}
				/>
			</div>
		);
	},
};

export const SingleYearRequired: Story = {
	render: () => {
		const form = useForm({ defaultValues: { year: "" } });
		return (
			<div className="w-72">
				<FormYearSelector
					label="Founding year"
					name="year"
					mode="single"
					form={form}
					required
				/>
			</div>
		);
	},
};

export const YearRange: Story = {
	render: () => {
		const form = useForm({ defaultValues: { range: "" } });
		return (
			<div className="w-72">
				<FormYearSelector
					label="Years of experience"
					name="range"
					mode="range"
					form={form}
				/>
			</div>
		);
	},
};

export const CustomYearBounds: Story = {
	render: () => {
		const form = useForm({ defaultValues: { year: "" } });
		return (
			<div className="w-72">
				<FormYearSelector
					label="Campaign year"
					name="year"
					mode="single"
					form={form}
					fromYear={2020}
					toYear={2030}
					helperText="Choose between 2020 and 2030."
				/>
			</div>
		);
	},
};

export const Optional: Story = {
	render: () => {
		const form = useForm({ defaultValues: { year: "" } });
		return (
			<div className="w-72">
				<FormYearSelector
					label="Graduation year"
					name="year"
					mode="single"
					form={form}
					optional
				/>
			</div>
		);
	},
};
