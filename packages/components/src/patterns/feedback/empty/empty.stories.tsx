import type { Meta, StoryObj } from "@storybook/react-vite";
import { FolderOpen, Plus, RefreshCw, Search } from "lucide-react";
import { Empty } from "./index";

const meta: Meta<typeof Empty> = {
	title: "Design System/Patterns/Feedback/Empty",
	component: Empty,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		title: { control: "text" },
		description: { control: "text" },
	},
};

export default meta;

type Story = StoryObj<typeof Empty>;

export const Default: Story = {
	args: {},
};

export const WithIcon: Story = {
	name: "With Icon",
	args: {
		title: "No campaigns found",
		description: "You haven't created any campaigns yet.",
		icon: FolderOpen,
	},
};

export const WithAction: Story = {
	name: "With Action Button",
	args: {
		title: "No campaigns found",
		description: "Get started by creating your first campaign.",
		icon: FolderOpen,
		action: {
			label: "New campaign",
			icon: Plus,
			onClick: () => alert("Create campaign clicked"),
		},
	},
};

export const NoIcon: Story = {
	name: "No Icon",
	args: {
		title: "No results",
		description: "Try adjusting your filters.",
		action: {
			label: "Clear filters",
			icon: RefreshCw,
			onClick: () => alert("Clear filters clicked"),
		},
	},
};

export const SearchEmpty: Story = {
	name: "Search Empty State",
	args: {
		title: "No results for your search",
		description: "Try different keywords or remove some filters.",
		icon: Search,
		action: {
			label: "Clear search",
			onClick: () => alert("Clear search clicked"),
		},
	},
};

export const ActionOnly: Story = {
	name: "Action Without Icon",
	args: {
		title: "Nothing here yet",
		description: "Add your first item to get started.",
		action: {
			label: "Add item",
			icon: Plus,
			onClick: () => alert("Add item clicked"),
		},
	},
};
