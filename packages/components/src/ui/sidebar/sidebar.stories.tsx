import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeIcon, SettingsIcon, UsersIcon } from "lucide-react";
import { Sidebar } from "./index";
import { SidebarContent } from "./sidebar-content";
import { SidebarGroup } from "./sidebar-group";
import { SidebarGroupLabel } from "./sidebar-group-label";
import { SidebarHeader } from "./sidebar-header";
import { SidebarInset } from "./sidebar-inset";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarMenuButton } from "./sidebar-menu-button";
import { SidebarMenuItem } from "./sidebar-menu-item";
import { SidebarProvider } from "./sidebar-provider";
import { SidebarTrigger } from "./sidebar-trigger";

const meta: Meta<typeof Sidebar> = {
	title: "UI/Sidebar",
	component: Sidebar,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
	render: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<p className="px-4 py-2 font-bold">Campaign Dash</p>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Navigation</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<HomeIcon /> Home
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<UsersIcon /> Candidates
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<SettingsIcon /> Settings
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarInset>
				<div className="flex items-center gap-2 p-4">
					<SidebarTrigger />
					<h1 className="text-lg font-semibold">Content area</h1>
				</div>
			</SidebarInset>
		</SidebarProvider>
	),
};
