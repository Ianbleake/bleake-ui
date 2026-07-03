import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContextMenuContent } from "./context-menu-content";
import { ContextMenuItem } from "./context-menu-item";
import { ContextMenuSeparator } from "./context-menu-separator";
import { ContextMenuTrigger } from "./context-menu-trigger";
import { ContextMenu } from "./index";

const meta: Meta<typeof ContextMenu> = {
	title: "UI/ContextMenu",
	component: ContextMenu,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-32 w-72 items-center justify-center rounded-md border border-dashed">
				Right-click here
			</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuItem>Copy</ContextMenuItem>
				<ContextMenuItem>Cut</ContextMenuItem>
				<ContextMenuItem>Paste</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem variant="destructive">Delete</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
};
