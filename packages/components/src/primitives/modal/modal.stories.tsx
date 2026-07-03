import type { Meta, StoryObj } from "@storybook/react-vite";
import { Settings, User } from "lucide-react";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Modal } from "./index";

const meta: Meta<typeof Modal> = {
	title: "Design System/Primitives/Modal",
	component: Modal,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		title: {
			control: "text",
			description: "Modal title",
		},
		description: {
			control: "text",
			description: "Modal description shown in the header",
		},
		iconVariant: {
			control: "select",
			options: ["orange", "neutral", "amber", "red"],
			description: "Icon badge color scheme",
		},
		showClose: {
			control: "boolean",
			description: "Show the close button in the dialog",
		},
		showCancel: {
			control: "boolean",
			description: "Show a cancel button in the footer",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const WithTrigger: Story = {
	render: (args) => (
		<Modal
			{...args}
			title="Account settings"
			description="Update your account preferences and personal information."
			icon={Settings}
			iconVariant="orange"
			content={
				<p className="text-sm text-gray-500">
					Settings content goes here. This is the body of the modal.
				</p>
			}
			actions={<Button size="sm">Save changes</Button>}
			showCancel
		>
			<Button
				variant="outline"
				size="sm"
			>
				<Settings />
				Open settings
			</Button>
		</Modal>
	),
};

export const NeutralIcon: Story = {
	render: (args) => (
		<Modal
			{...args}
			title="User profile"
			description="View and edit profile information."
			icon={User}
			iconVariant="neutral"
			content={<p className="text-sm text-gray-500">Profile content goes here.</p>}
		>
			<Button
				variant="outline"
				size="sm"
			>
				<User />
				View profile
			</Button>
		</Modal>
	),
};

export const Controlled: Story = {
	render: () => {
		const [open, setOpen] = useState<boolean>(false);

		return (
			<div className="flex flex-col gap-4 items-center">
				<Button
					size="sm"
					onClick={() => setOpen(true)}
				>
					Open modal (controlled)
				</Button>
				<Modal
					title="Controlled modal"
					description="This modal is controlled externally via state."
					openModal={open}
					setOpenModal={setOpen}
					content={
						<p className="text-sm text-gray-500">
							This modal has no trigger child — it is driven by external state.
						</p>
					}
					actions={
						<Button
							size="sm"
							onClick={() => setOpen(false)}
						>
							Confirm
						</Button>
					}
					showCancel
				/>
			</div>
		);
	},
};

export const RedVariant: Story = {
	render: (args) => (
		<Modal
			{...args}
			title="Danger zone"
			description="This action may have irreversible consequences."
			icon={Settings}
			iconVariant="red"
			content={<p className="text-sm text-gray-500">Destructive action content goes here.</p>}
		>
			<Button
				variant="destructive"
				size="sm"
			>
				Open danger zone
			</Button>
		</Modal>
	),
};
