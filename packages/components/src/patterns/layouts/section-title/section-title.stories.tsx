import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileText, Settings, Users } from "lucide-react";
import { Button } from "../../../ui/button";
import { SectionTitle } from "./index";

const meta: Meta<typeof SectionTitle> = {
	title: "Design System/Patterns/Layouts/SectionTitle",
	component: SectionTitle,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

/** Compact inline variant — small icon, no edit button. */
export const Compact: Story = {
	args: {
		icon: Users,
		title: "Team members",
	},
};

/** Compact variant with edit button. */
export const CompactWithEdit: Story = {
	args: {
		icon: FileText,
		title: "Personal information",
		onEdit: () => undefined,
		editLabel: "Edit",
	},
};

/** Compact variant with a custom action node. */
export const CompactWithAction: Story = {
	render: () => (
		<SectionTitle
			icon={FileText}
			title="Attached files"
			action={
				<Button
					size="sm"
					variant="outline"
				>
					Add file
				</Button>
			}
		/>
	),
};

/** Settings/full-height variant — large icon with description row. */
export const WithDescription: Story = {
	args: {
		icon: Settings,
		title: "General settings",
		description: "Manage your account preferences and notifications.",
	},
};

/** Settings variant with description and a right-side action. */
export const WithDescriptionAndAction: Story = {
	render: () => (
		<SectionTitle
			icon={Settings}
			title="Notifications"
			description="Control which alerts you receive and how."
			action={<Button size="sm">Save changes</Button>}
		/>
	),
};
