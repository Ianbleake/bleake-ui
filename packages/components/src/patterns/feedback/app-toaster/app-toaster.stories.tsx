import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";
import { AppToaster } from "./index";

const meta: Meta<typeof AppToaster> = {
	title: "Design System/Patterns/Feedback/AppToaster",
	component: AppToaster,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof AppToaster>;

export const Default: Story = {
	render: () => (
		<>
			<AppToaster />
			<button
				type="button"
				className="rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
				onClick={() => toast("Notification sent")}
			>
				Show default toast
			</button>
		</>
	),
};

export const SuccessToast: Story = {
	name: "Success Toast",
	render: () => (
		<>
			<AppToaster />
			<button
				type="button"
				className="rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
				onClick={() => toast.success("Campaign published successfully")}
			>
				Show success toast
			</button>
		</>
	),
};

export const ErrorToast: Story = {
	name: "Error Toast",
	render: () => (
		<>
			<AppToaster />
			<button
				type="button"
				className="rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
				onClick={() => toast.error("Failed to save changes")}
			>
				Show error toast
			</button>
		</>
	),
};

export const WithDescription: Story = {
	name: "Toast with Description",
	render: () => (
		<>
			<AppToaster />
			<button
				type="button"
				className="rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
				onClick={() =>
					toast("Download complete", {
						description: "report_q1_2025.csv has been downloaded.",
					})
				}
			>
				Show toast with description
			</button>
		</>
	),
};

export const MultipleToasts: Story = {
	name: "Multiple Toasts",
	render: () => (
		<>
			<AppToaster />
			<div className="flex flex-col gap-2">
				<button
					type="button"
					className="rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
					onClick={() => toast.success("Campaign activated")}
				>
					Success
				</button>
				<button
					type="button"
					className="rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
					onClick={() => toast.error("Payment failed")}
				>
					Error
				</button>
				<button
					type="button"
					className="rounded-lg border bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50"
					onClick={() => toast("3 changes saved")}
				>
					Default
				</button>
			</div>
		</>
	),
};
