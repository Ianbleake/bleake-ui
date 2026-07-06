import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FormAddress } from "./index";

const meta: Meta<typeof FormAddress> = {
	title: "Design System/Patterns/Forms/FormAddress",
	component: FormAddress,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormAddress>;

// Decoupled: the consumer owns the form body. These stories render a placeholder
// body to demonstrate the dialog/sheet shell.
const FormBody = () => (
	<div className="p-6 flex flex-col gap-4">
		<p className="text-sm text-muted-foreground">
			Form fields go here. The consumer owns the form, schema, and submit handler.
		</p>
	</div>
);

export const Default: Story = {
	render: () => (
		<FormAddress>
			<FormBody />
		</FormAddress>
	),
};

export const SheetVariant: Story = {
	render: () => (
		<FormAddress variant="sheet">
			<FormBody />
		</FormAddress>
	),
};

export const Controlled: Story = {
	render: () => {
		const [open, setOpen] = useState<boolean>(false);
		return (
			<FormAddress
				open={open}
				onOpenChange={setOpen}
				onSuccess={() => undefined}
			>
				<FormBody />
			</FormAddress>
		);
	},
};
