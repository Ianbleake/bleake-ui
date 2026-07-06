import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { FormTimeSelector } from "./index";

const meta: Meta<typeof FormTimeSelector> = {
	title: "Design System/Patterns/Forms/FormTimeSelector",
	component: FormTimeSelector,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormTimeSelector>;

export const SingleTime: Story = {
	render: () => {
		const form = useForm({ defaultValues: { time: "" } });
		return (
			<div className="w-72">
				<FormTimeSelector
					label="Start time"
					name="time"
					mode="single"
					form={form}
				/>
			</div>
		);
	},
};

export const SingleTimeRequired: Story = {
	render: () => {
		const form = useForm({ defaultValues: { time: "" } });
		return (
			<div className="w-72">
				<FormTimeSelector
					label="Start time"
					name="time"
					mode="single"
					form={form}
					required
				/>
			</div>
		);
	},
};

export const TimeRange: Story = {
	render: () => {
		const form = useForm({ defaultValues: { range: "" } });
		return (
			<div className="w-72">
				<FormTimeSelector
					label="Operating hours"
					name="range"
					mode="range"
					form={form}
				/>
			</div>
		);
	},
};

export const WithMinuteStep: Story = {
	render: () => {
		const form = useForm({ defaultValues: { time: "" } });
		return (
			<div className="w-72">
				<FormTimeSelector
					label="Scheduled time"
					name="time"
					mode="single"
					form={form}
					minuteStep={15}
					helperText="Time slots every 15 minutes."
				/>
			</div>
		);
	},
};

export const WithTimeConstraints: Story = {
	render: () => {
		const form = useForm({ defaultValues: { time: "" } });
		return (
			<div className="w-72">
				<FormTimeSelector
					label="Business hours"
					name="time"
					mode="single"
					form={form}
					minTime="09:00"
					maxTime="18:00"
					helperText="Only times between 09:00 and 18:00."
				/>
			</div>
		);
	},
};

export const Optional: Story = {
	render: () => {
		const form = useForm({ defaultValues: { time: "" } });
		return (
			<div className="w-72">
				<FormTimeSelector
					label="Preferred time"
					name="time"
					mode="single"
					form={form}
					optional
				/>
			</div>
		);
	},
};
