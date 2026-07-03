import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menubar } from "./index";
import { MenubarContent } from "./menubar-content";
import { MenubarItem } from "./menubar-item";
import { MenubarMenu } from "./menubar-menu";
import { MenubarSeparator } from "./menubar-separator";
import { MenubarTrigger } from "./menubar-trigger";

const meta: Meta<typeof Menubar> = {
	title: "UI/Menubar",
	component: Menubar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
	render: () => (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>New Tab</MenubarItem>
					<MenubarItem>New Window</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Exit</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>Undo</MenubarItem>
					<MenubarItem>Redo</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
};
