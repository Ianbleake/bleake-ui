import type { Meta, StoryObj } from "@storybook/react-vite";
import { Ban, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../../ui/button";
import { ConfirmDialog } from "./index";

const meta: Meta<typeof ConfirmDialog> = {
	title: "Design System/Primitives/ConfirmDialog",
	component: ConfirmDialog,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		title: {
			control: "text",
			description: "Dialog title",
		},
		description: {
			control: "text",
			description: "Optional dialog description",
		},
		variant: {
			control: "select",
			options: ["default", "destructive"],
			description: "Confirm button variant",
		},
		confirmText: {
			control: "text",
			description: "Confirm button label",
		},
		cancelText: {
			control: "text",
			description: "Cancel button label",
		},
		loading: {
			control: "boolean",
			description: "Loading state for the confirm action",
		},
		disabled: {
			control: "boolean",
			description: "Disables the trigger",
		},
	},
};

export default meta;

type Story = StoryObj<typeof ConfirmDialog>;

export const Default: Story = {
	render: (args) => (
		<ConfirmDialog
			{...args}
			title="Delete record"
			description="This action cannot be undone. The record will be permanently removed."
			onConfirm={() => undefined}
		>
			<Button
				variant="destructive"
				size="sm"
			>
				<Trash2 />
				Delete
			</Button>
		</ConfirmDialog>
	),
};

export const WithDescription: Story = {
	render: (args) => (
		<ConfirmDialog
			{...args}
			title="Archive campaign"
			description="Archiving this campaign will hide it from the active list. You can restore it later from the archive."
			confirmText="Archive"
			cancelText="Keep active"
			variant="default"
			onConfirm={() => undefined}
		>
			<Button
				variant="outline"
				size="sm"
			>
				Archive campaign
			</Button>
		</ConfirmDialog>
	),
};

export const WithLoadingState: Story = {
	render: () => {
		const [loading, setLoading] = useState<boolean>(false);

		const handleConfirm = async () => {
			setLoading(true);
			await new Promise<void>((resolve) => setTimeout(resolve, 2000));
			setLoading(false);
		};

		return (
			<ConfirmDialog
				title="Delete record"
				description="This action cannot be undone."
				onConfirm={handleConfirm}
				loading={loading}
			>
				<Button
					variant="destructive"
					size="sm"
				>
					<Trash2 />
					Delete
				</Button>
			</ConfirmDialog>
		);
	},
};

export const CustomIcon: Story = {
	render: (args) => (
		<ConfirmDialog
			{...args}
			title="Disable feature"
			description="Users will no longer have access to this feature."
			confirmText="Disable"
			confirmIcon={Ban}
			variant="destructive"
			onConfirm={() => undefined}
		>
			<Button
				variant="outline"
				size="sm"
			>
				Disable
			</Button>
		</ConfirmDialog>
	),
};
