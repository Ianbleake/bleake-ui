import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { FormSignaturePad } from "./index";

const meta: Meta<typeof FormSignaturePad> = {
	title: "Design System/Patterns/Forms/FormSignaturePad",
	component: FormSignaturePad,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormSignaturePad>;

// Decoupled: the consumer owns the upload + URL resolution. These no-op
// callbacks let the story render without a backend.
const noopUpload = (_file: File, _onProgress: (pct: number) => void) =>
	Promise.resolve("mock-file-id");

export const Default: Story = {
	render: () => {
		const form = useForm({ defaultValues: { signature: "" } });
		return (
			<div className="w-96">
				<FormSignaturePad
					name="signature"
					form={form}
					upload={noopUpload}
				/>
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const form = useForm({ defaultValues: { signature: "" } });
		return (
			<div className="w-96">
				<FormSignaturePad
					name="signature"
					form={form}
					required
					upload={noopUpload}
				/>
			</div>
		);
	},
};
