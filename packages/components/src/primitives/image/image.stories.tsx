import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageIcon } from "lucide-react";
import { Image } from "./index";

const meta: Meta<typeof Image> = {
	title: "Design System/Primitives/Image",
	component: Image,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		url: {
			control: "text",
			description: "Image URL — undefined renders the empty state",
		},
		label: {
			control: "text",
			description: "Optional label shown above the image",
		},
		className: {
			control: "text",
			description: "Additional classes for the wrapper",
		},
		imageClassName: {
			control: "text",
			description: "Additional classes for the image container",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Image>;

export const WithUrl: Story = {
	args: {
		url: "https://picsum.photos/seed/campaign/400/200",
		label: "Campaign banner",
	},
	decorators: [
		(Story) => (
			<div className="w-72">
				<Story />
			</div>
		),
	],
};

export const WithIcon: Story = {
	args: {
		url: "https://picsum.photos/seed/campaign/400/200",
		label: "Banner image",
		icon: ImageIcon,
	},
	decorators: [
		(Story) => (
			<div className="w-72">
				<Story />
			</div>
		),
	],
};

export const EmptyState: Story = {
	args: {
		url: undefined,
	},
	decorators: [
		(Story) => (
			<div className="w-72">
				<Story />
			</div>
		),
	],
};

export const NoLabel: Story = {
	args: {
		url: "https://picsum.photos/seed/banner/400/200",
	},
	decorators: [
		(Story) => (
			<div className="w-72">
				<Story />
			</div>
		),
	],
};
