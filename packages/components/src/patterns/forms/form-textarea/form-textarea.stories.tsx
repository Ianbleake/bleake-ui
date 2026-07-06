import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { FormTextarea } from "./index";

const meta: Meta<typeof FormTextarea> = {
	title: "Design System/Patterns/Forms/FormTextarea",
	component: FormTextarea,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormTextarea>;

export const Default: Story = {
	render: () => {
		const form = useForm({ defaultValues: { description: "" } });
		return (
			<div className="w-80">
				<FormTextarea
					label="Description"
					name="description"
					form={form}
					placeholder="Enter a description..."
				/>
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const form = useForm({ defaultValues: { description: "" } });
		return (
			<div className="w-80">
				<FormTextarea
					label="Description"
					name="description"
					form={form}
					placeholder="Enter a description..."
					required
				/>
			</div>
		);
	},
};

export const WithHelperText: Story = {
	render: () => {
		const form = useForm({ defaultValues: { notes: "" } });
		return (
			<div className="w-80">
				<FormTextarea
					label="Internal notes"
					name="notes"
					form={form}
					placeholder="Add notes visible only to your team..."
					helperText="These notes are not visible to candidates."
				/>
			</div>
		);
	},
};

export const LargeRows: Story = {
	render: () => {
		const form = useForm({ defaultValues: { body: "" } });
		return (
			<div className="w-80">
				<FormTextarea
					label="Message body"
					name="body"
					form={form}
					placeholder="Compose your message..."
					rows={8}
				/>
			</div>
		);
	},
};

export const Optional: Story = {
	render: () => {
		const form = useForm({ defaultValues: { notes: "" } });
		return (
			<div className="w-80">
				<FormTextarea
					label="Notes"
					name="notes"
					form={form}
					optional
				/>
			</div>
		);
	},
};
