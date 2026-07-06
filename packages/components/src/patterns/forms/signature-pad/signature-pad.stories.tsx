import type { Meta, StoryObj } from "@storybook/react-vite";
import { SignaturePad } from "./index";

const meta: Meta<typeof SignaturePad> = {
	title: "Design System/Patterns/Forms/SignaturePad",
	component: SignaturePad,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof SignaturePad>;

export const Default: Story = {
	render: () => (
		<div className="w-96">
			<SignaturePad onSignature={() => undefined} />
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="w-96">
			<SignaturePad
				onSignature={() => undefined}
				disabled
			/>
		</div>
	),
};

export const HideConfirm: Story = {
	render: () => (
		<div className="w-96">
			<SignaturePad
				onSignature={() => undefined}
				hideConfirm
			/>
		</div>
	),
};

export const CustomHeight: Story = {
	render: () => (
		<div className="w-96">
			<SignaturePad
				onSignature={() => undefined}
				height={300}
			/>
		</div>
	),
};
