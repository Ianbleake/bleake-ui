import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { FormField } from "./index";

const meta: Meta<typeof FormField> = {
	title: "Design System/Patterns/Forms/FormField",
	component: FormField,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Text: Story = {
	render: () => {
		const form = useForm({ defaultValues: { name: "" } });
		return (
			<div className="w-80">
				<FormField
					label="Full name"
					name="name"
					form={form}
					placeholder="Enter your name"
				/>
			</div>
		);
	},
};

export const Email: Story = {
	render: () => {
		const form = useForm({ defaultValues: { email: "" } });
		return (
			<div className="w-80">
				<FormField
					label="Email"
					name="email"
					form={form}
					type="email"
					placeholder="you@example.com"
					required
				/>
			</div>
		);
	},
};

export const Password: Story = {
	render: () => {
		const form = useForm({ defaultValues: { password: "" } });
		return (
			<div className="w-80">
				<FormField
					label="Password"
					name="password"
					form={form}
					type="password"
					placeholder="Enter password"
					required
				/>
			</div>
		);
	},
};

export const Phone: Story = {
	render: () => {
		const form = useForm({ defaultValues: { phone: "" } });
		return (
			<div className="w-80">
				<FormField
					label="Phone"
					name="phone"
					form={form}
					type="tel"
					placeholder="55 1234 5678"
				/>
			</div>
		);
	},
};

export const NumberInput: Story = {
	render: () => {
		const form = useForm({ defaultValues: { amount: 0 } });
		return (
			<div className="w-80">
				<FormField
					label="Amount"
					name="amount"
					form={form}
					type="number"
					placeholder="0"
					min={0}
					max={1000}
				/>
			</div>
		);
	},
};

export const Currency: Story = {
	render: () => {
		const form = useForm({ defaultValues: { price: 0 } });
		return (
			<div className="w-80">
				<FormField
					label="Price"
					name="price"
					form={form}
					type="currency"
					placeholder="$0.00"
					helperText="Amount in Mexican pesos"
				/>
			</div>
		);
	},
};

export const Percentage: Story = {
	render: () => {
		const form = useForm({ defaultValues: { rate: 0 } });
		return (
			<div className="w-80">
				<FormField
					label="Tax rate"
					name="rate"
					form={form}
					type="percentage"
					placeholder="0%"
				/>
			</div>
		);
	},
};

export const WithHelperText: Story = {
	render: () => {
		const form = useForm({ defaultValues: { username: "" } });
		return (
			<div className="w-80">
				<FormField
					label="Username"
					name="username"
					form={form}
					placeholder="Choose a username"
					helperText="This will be visible to other users."
				/>
			</div>
		);
	},
};

export const Optional: Story = {
	render: () => {
		const form = useForm({ defaultValues: { nickname: "" } });
		return (
			<div className="w-80">
				<FormField
					label="Nickname"
					name="nickname"
					form={form}
					placeholder="Optional nickname"
					optional
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const form = useForm({ defaultValues: { code: "ABC-123" } });
		return (
			<div className="w-80">
				<FormField
					label="Access code"
					name="code"
					form={form}
					disabled
					helperText="This field is locked."
				/>
			</div>
		);
	},
};
