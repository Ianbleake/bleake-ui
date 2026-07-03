import type { Meta, StoryObj } from "@storybook/react-vite";
import { Download, Edit, Trash2 } from "lucide-react";
import { DropdownMenuItem } from "../../ui/dropdown-menu/dropdown-menu-item";
import { ActionsMenu } from "./index";

const meta: Meta<typeof ActionsMenu> = {
	title: "Design System/Primitives/ActionsMenu",
	component: ActionsMenu,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		align: {
			control: "select",
			options: ["start", "center", "end"],
			description: "Alignment of the dropdown content",
		},
		triggerDirection: {
			control: "select",
			options: ["vertical", "horizontal"],
			description: "Orientation of the ellipsis trigger icon",
		},
	},
};

export default meta;

type Story = StoryObj<typeof ActionsMenu>;

export const Default: Story = {
	args: {
		align: "end",
		triggerDirection: "vertical",
	},
	render: (args) => (
		<ActionsMenu {...args}>
			<DropdownMenuItem>
				<Edit />
				Edit
			</DropdownMenuItem>
			<DropdownMenuItem>
				<Download />
				Download
			</DropdownMenuItem>
			<DropdownMenuItem variant="destructive">
				<Trash2 />
				Delete
			</DropdownMenuItem>
		</ActionsMenu>
	),
};

export const HorizontalTrigger: Story = {
	args: {
		align: "end",
		triggerDirection: "horizontal",
	},
	render: (args) => (
		<ActionsMenu {...args}>
			<DropdownMenuItem>
				<Edit />
				Edit
			</DropdownMenuItem>
			<DropdownMenuItem variant="destructive">
				<Trash2 />
				Delete
			</DropdownMenuItem>
		</ActionsMenu>
	),
};

export const AlignStart: Story = {
	args: {
		align: "start",
		triggerDirection: "vertical",
	},
	render: (args) => (
		<ActionsMenu {...args}>
			<DropdownMenuItem>
				<Edit />
				Edit
			</DropdownMenuItem>
			<DropdownMenuItem>
				<Download />
				Download
			</DropdownMenuItem>
		</ActionsMenu>
	),
};
