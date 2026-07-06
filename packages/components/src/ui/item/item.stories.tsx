import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckIcon, MailIcon, UserIcon } from "lucide-react";
import { Item } from "./index";
import { ItemActions } from "./item-actions";
import { ItemContent } from "./item-content";
import { ItemDescription } from "./item-description";
import { ItemFooter } from "./item-footer";
import { ItemGroup } from "./item-group";
import { ItemHeader } from "./item-header";
import { ItemSeparator } from "./item-separator";
import { ItemTitle } from "./item-title";

const meta: Meta<typeof Item> = {
	title: "UI/Item",
	component: Item,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
	render: () => (
		<Item className="max-w-sm">
			<ItemMedia variant="icon">
				<UserIcon className="size-5" />
			</ItemMedia>
			<ItemContent>
				<ItemHeader>
					<ItemTitle>John Doe</ItemTitle>
					<ItemDescription>john.doe@example.com</ItemDescription>
				</ItemHeader>
			</ItemContent>
			<ItemActions>
				<button type="button" className="text-sm text-primary">Edit</button>
			</ItemActions>
		</Item>
	),
};

export const OutlineVariant: Story = {
	render: () => (
		<Item variant="outline" className="max-w-sm">
			<ItemMedia variant="icon">
				<MailIcon className="size-5" />
			</ItemMedia>
			<ItemContent>
				<ItemHeader>
					<ItemTitle>Inbox</ItemTitle>
					<ItemDescription>12 unread messages</ItemDescription>
				</ItemHeader>
			</ItemContent>
		</Item>
	),
};

export const MutedVariant: Story = {
	render: () => (
		<Item variant="muted" className="max-w-sm">
			<ItemMedia variant="icon">
				<CheckIcon className="size-5" />
			</ItemMedia>
			<ItemContent>
				<ItemHeader>
					<ItemTitle>Task completed</ItemTitle>
					<ItemDescription>Updated 2 minutes ago</ItemDescription>
				</ItemHeader>
			</ItemContent>
		</Item>
	),
};

export const Small: Story = {
	render: () => (
		<Item size="sm" variant="outline" className="max-w-sm">
			<ItemMedia variant="icon">
				<UserIcon className="size-4" />
			</ItemMedia>
			<ItemContent>
				<ItemHeader>
					<ItemTitle>Small item</ItemTitle>
				</ItemHeader>
			</ItemContent>
		</Item>
	),
};

export const ExtraSmall: Story = {
	render: () => (
		<Item size="xs" variant="muted" className="max-w-sm">
			<ItemMedia variant="icon">
				<MailIcon className="size-4" />
			</ItemMedia>
			<ItemContent>
				<ItemHeader>
					<ItemTitle>XS item</ItemTitle>
				</ItemHeader>
			</ItemContent>
		</Item>
	),
};

export const WithImage: Story = {
	render: () => (
		<Item variant="outline" className="max-w-sm">
			<ItemMedia variant="image">
				<img src="https://i.pravatar.cc/100?img=1" alt="avatar" />
			</ItemMedia>
			<ItemContent>
				<ItemHeader>
					<ItemTitle>Jane Smith</ItemTitle>
					<ItemDescription>Product Designer</ItemDescription>
				</ItemHeader>
				<ItemFooter>
					<span className="text-xs text-muted-foreground">Active now</span>
				</ItemFooter>
			</ItemContent>
		</Item>
	),
};

export const AsChild: Story = {
	render: () => (
		<Item asChild variant="outline" className="max-w-sm">
			<a href="#" onClick={(e) => e.preventDefault()}>
				<ItemMedia variant="icon">
					<UserIcon className="size-5" />
				</ItemMedia>
				<ItemContent>
					<ItemHeader>
						<ItemTitle>Click me</ItemTitle>
						<ItemDescription>This item is a link</ItemDescription>
					</ItemHeader>
				</ItemContent>
			</a>
		</Item>
	),
};

export const Group: Story = {
	render: () => (
		<ItemGroup className="max-w-sm gap-1">
			<Item variant="muted">
				<ItemMedia variant="icon">
					<UserIcon className="size-5" />
				</ItemMedia>
				<ItemContent>
					<ItemHeader>
						<ItemTitle>User 1</ItemTitle>
						<ItemDescription>user1@example.com</ItemDescription>
					</ItemHeader>
				</ItemContent>
			</Item>
			<ItemSeparator />
			<Item variant="muted">
				<ItemMedia variant="icon">
					<MailIcon className="size-5" />
				</ItemMedia>
				<ItemContent>
					<ItemHeader>
						<ItemTitle>User 2</ItemTitle>
						<ItemDescription>user2@example.com</ItemDescription>
					</ItemHeader>
				</ItemContent>
			</Item>
			<ItemSeparator />
			<Item variant="muted">
				<ItemMedia variant="icon">
					<CheckIcon className="size-5" />
				</ItemMedia>
				<ItemContent>
					<ItemHeader>
						<ItemTitle>User 3</ItemTitle>
						<ItemDescription>user3@example.com</ItemDescription>
					</ItemHeader>
				</ItemContent>
			</Item>
		</ItemGroup>
	),
};