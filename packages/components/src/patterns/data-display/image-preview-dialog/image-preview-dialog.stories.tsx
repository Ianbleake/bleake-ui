import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImagePreviewDialog } from "./index";

const meta: Meta<typeof ImagePreviewDialog> = {
	title: "Design System/Patterns/Data Display/ImagePreviewDialog",
	component: ImagePreviewDialog,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		src: {
			control: "text",
			description: "Image source URL",
		},
		alt: {
			control: "text",
			description: "Alt text for the image",
		},
		title: {
			control: "text",
			description: "Optional title shown in the dialog header",
		},
		mimeType: {
			control: "text",
			description: "MIME type hint for the preview content",
		},
	},
};

export default meta;

type Story = StoryObj<typeof ImagePreviewDialog>;

export const Default: Story = {
	args: {
		src: "https://picsum.photos/seed/campaign/800/600",
		alt: "Campaign image",
		title: "Campaign Banner",
	},
};

export const Portrait: Story = {
	args: {
		src: "https://picsum.photos/seed/portrait/400/600",
		alt: "Portrait image",
		title: "Profile Photo",
	},
};

export const WithoutTitle: Story = {
	args: {
		src: "https://picsum.photos/seed/landscape/800/450",
		alt: "Landscape image",
	},
};
