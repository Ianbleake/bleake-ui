import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputOTP } from "./index";
import { InputOTPGroup } from "./input-otp-group";
import { InputOTPSeparator } from "./input-otp-separator";
import { InputOTPSlot } from "./input-otp-slot";

const meta: Meta<typeof InputOTP> = {
	title: "UI/InputOTP",
	component: InputOTP,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
	render: () => (
		<InputOTP maxLength={6}>
			<InputOTPGroup>
				<InputOTPSlot index={0} />
				<InputOTPSlot index={1} />
				<InputOTPSlot index={2} />
			</InputOTPGroup>
			<InputOTPSeparator />
			<InputOTPGroup>
				<InputOTPSlot index={3} />
				<InputOTPSlot index={4} />
				<InputOTPSlot index={5} />
			</InputOTPGroup>
		</InputOTP>
	),
};
