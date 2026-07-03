import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Button } from "../button";
import { ButtonGroupSeparator } from "./button-group-separator";
import { ButtonGroupText } from "./button-group-text";
import { ButtonGroup } from "./index";

const meta: Meta<typeof ButtonGroup> = {
	title: "UI/ButtonGroup",
	component: ButtonGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
	render: () => (
		<ButtonGroup orientation="horizontal">
			<Button
				variant="outline"
				size="sm"
			>
				<PlusIcon />
				Add
			</Button>
			<Button
				variant="outline"
				size="sm"
			>
				Edit
			</Button>
			<Button
				variant="outline"
				size="sm"
			>
				<TrashIcon />
				Delete
			</Button>
		</ButtonGroup>
	),
};

export const Vertical: Story = {
	render: () => (
		<ButtonGroup orientation="vertical">
			<Button
				variant="outline"
				size="sm"
			>
				First
			</Button>
			<Button
				variant="outline"
				size="sm"
			>
				Second
			</Button>
			<Button
				variant="outline"
				size="sm"
			>
				Third
			</Button>
		</ButtonGroup>
	),
};

export const WithSeparator: Story = {
	render: () => (
		<ButtonGroup orientation="horizontal">
			<Button
				variant="outline"
				size="sm"
			>
				<AlignLeftIcon />
			</Button>
			<Button
				variant="outline"
				size="sm"
			>
				<AlignCenterIcon />
			</Button>
			<ButtonGroupSeparator />
			<Button
				variant="outline"
				size="sm"
			>
				<AlignRightIcon />
			</Button>
		</ButtonGroup>
	),
};

export const WithText: Story = {
	render: () => (
		<ButtonGroup orientation="horizontal">
			<ButtonGroupText>https://</ButtonGroupText>
			<Button
				variant="outline"
				size="sm"
			>
				example.com
			</Button>
		</ButtonGroup>
	),
};
