import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { FormMultiSelect } from "./index";

const meta: Meta<typeof FormMultiSelect> = {
	title: "Design System/Patterns/Forms/FormMultiSelect",
	component: FormMultiSelect,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormMultiSelect>;

const CHANNEL_OPTIONS: Option[] = [
	{ value: "email", label: "Email" },
	{ value: "sms", label: "SMS" },
	{ value: "whatsapp", label: "WhatsApp" },
	{ value: "push", label: "Push notification" },
	{ value: "in-app", label: "In-app" },
];

export const Default: Story = {
	render: () => {
		const form = useForm({ defaultValues: { channels: [] } });
		return (
			<div className="w-72">
				<FormMultiSelect
					label="Channels"
					name="channels"
					form={form}
					options={CHANNEL_OPTIONS}
					placeholder="Select channels"
				/>
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const form = useForm({ defaultValues: { channels: [] } });
		return (
			<div className="w-72">
				<FormMultiSelect
					label="Channels"
					name="channels"
					form={form}
					options={CHANNEL_OPTIONS}
					required
				/>
			</div>
		);
	},
};

export const WithPreselected: Story = {
	render: () => {
		const form = useForm({ defaultValues: { channels: ["email", "sms"] } });
		return (
			<div className="w-72">
				<FormMultiSelect
					label="Channels"
					name="channels"
					form={form}
					options={CHANNEL_OPTIONS}
				/>
			</div>
		);
	},
};

export const WithHelperText: Story = {
	render: () => {
		const form = useForm({ defaultValues: { channels: [] } });
		return (
			<div className="w-72">
				<FormMultiSelect
					label="Channels"
					name="channels"
					form={form}
					options={CHANNEL_OPTIONS}
					helperText="Select all channels to include in this campaign."
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const form = useForm({ defaultValues: { channels: ["email"] } });
		return (
			<div className="w-72">
				<FormMultiSelect
					label="Channels"
					name="channels"
					form={form}
					options={CHANNEL_OPTIONS}
					disabled
				/>
			</div>
		);
	},
};
