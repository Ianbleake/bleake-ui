import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { FormSwitch } from "./index";

const meta: Meta<typeof FormSwitch> = {
	title: "Design System/Patterns/Forms/FormSwitch",
	component: FormSwitch,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormSwitch>;

export const Off: Story = {
	render: () => {
		const form = useForm({ defaultValues: { active: false } });
		return (
			<div className="w-72">
				<FormSwitch
					label="Campaign active"
					name="active"
					form={form}
				/>
			</div>
		);
	},
};

export const On: Story = {
	render: () => {
		const form = useForm({ defaultValues: { active: true } });
		return (
			<div className="w-72">
				<FormSwitch
					label="Campaign active"
					name="active"
					form={form}
				/>
			</div>
		);
	},
};

export const CustomText: Story = {
	render: () => {
		const form = useForm({ defaultValues: { published: true } });
		return (
			<div className="w-72">
				<FormSwitch
					label="Visibility"
					name="published"
					form={form}
					activeText="Published"
					inactiveText="Draft"
				/>
			</div>
		);
	},
};

export const NoLabel: Story = {
	render: () => {
		const form = useForm({ defaultValues: { active: false } });
		return (
			<div className="w-72">
				<FormSwitch
					name="active"
					form={form}
				/>
			</div>
		);
	},
};

export const WithHelperText: Story = {
	render: () => {
		const form = useForm({ defaultValues: { notifications: true } });
		return (
			<div className="w-72">
				<FormSwitch
					label="Email notifications"
					name="notifications"
					form={form}
					helperText="Receive updates about this campaign via email."
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const form = useForm({ defaultValues: { active: false } });
		return (
			<div className="w-72">
				<FormSwitch
					label="Campaign active"
					name="active"
					form={form}
					disabled
				/>
			</div>
		);
	},
};
