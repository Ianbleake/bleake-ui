import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorFallback } from "./index";

const meta: Meta<typeof ErrorFallback> = {
	title: "Design System/Patterns/Feedback/ErrorBoundary",
	component: ErrorFallback,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof ErrorFallback>;

export const DefaultError: Story = {
	name: "Default Error Fallback",
	render: () => (
		<div className="w-96">
			<ErrorFallback
				error={new Error("Something went wrong in the app")}
				resetError={() => undefined}
			/>
		</div>
	),
};

export const NonErrorValue: Story = {
	name: "Non-Error Value",
	render: () => (
		<div className="w-96">
			<ErrorFallback
				error="A plain string failure"
				resetError={() => undefined}
			/>
		</div>
	),
};
