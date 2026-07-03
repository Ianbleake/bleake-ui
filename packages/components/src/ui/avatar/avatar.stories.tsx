import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarFallback } from "./avatar-fallback";
import { AvatarImage } from "./avatar-image";
import { Avatar } from "./index";

const meta: Meta<typeof Avatar> = {
	title: "UI/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
	render: () => (
		<Avatar>
			<AvatarImage
				src="https://github.com/shadcn.png"
				alt="User avatar"
			/>
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};

export const WithFallback: Story = {
	render: () => (
		<Avatar>
			<AvatarImage
				src="/broken-image.png"
				alt="User avatar"
			/>
			<AvatarFallback>AB</AvatarFallback>
		</Avatar>
	),
};

export const SizeSmall: Story = {
	render: () => (
		<Avatar size="sm">
			<AvatarImage
				src="https://github.com/shadcn.png"
				alt="User avatar"
			/>
			<AvatarFallback>SM</AvatarFallback>
		</Avatar>
	),
};

export const SizeDefault: Story = {
	render: () => (
		<Avatar size="default">
			<AvatarImage
				src="https://github.com/shadcn.png"
				alt="User avatar"
			/>
			<AvatarFallback>MD</AvatarFallback>
		</Avatar>
	),
};

export const SizeLarge: Story = {
	render: () => (
		<Avatar size="lg">
			<AvatarImage
				src="https://github.com/shadcn.png"
				alt="User avatar"
			/>
			<AvatarFallback>LG</AvatarFallback>
		</Avatar>
	),
};

export const AllSizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Avatar size="sm">
				<AvatarFallback>SM</AvatarFallback>
			</Avatar>
			<Avatar size="default">
				<AvatarFallback>MD</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarFallback>LG</AvatarFallback>
			</Avatar>
		</div>
	),
};
