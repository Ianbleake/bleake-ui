import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileIcon, SettingsIcon, UserIcon } from "lucide-react";
import { CommandEmpty } from "./command-empty";
import { CommandGroup } from "./command-group";
import { CommandInput } from "./command-input";
import { CommandItem } from "./command-item";
import { CommandList } from "./command-list";
import { Command } from "./index";

const meta: Meta<typeof Command> = {
	title: "UI/Command",
	component: Command,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Default: Story = {
	render: () => (
		<Command className="rounded-lg border shadow-md">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<UserIcon /> Profile
					</CommandItem>
					<CommandItem>
						<SettingsIcon /> Settings
					</CommandItem>
					<CommandItem>
						<FileIcon /> Documents
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
};
