import type { Meta, StoryObj } from "@storybook/react-vite";
import { MailIcon } from "lucide-react";
import { InputGroup } from "./index";
import { InputGroupAddon } from "./input-group-addon";
import { InputGroupButton } from "./input-group-button";
import { InputGroupInput } from "./input-group-input";
import { InputGroupText } from "./input-group-text";

const meta: Meta<typeof InputGroup> = {
	title: "UI/InputGroup",
	component: InputGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
	render: () => (
		<InputGroup className="w-72">
			<InputGroupAddon>
				<MailIcon className="size-4" />
			</InputGroupAddon>
			<InputGroupInput placeholder="Email" />
		</InputGroup>
	),
};

export const WithButton: Story = {
	render: () => (
		<InputGroup className="w-72">
			<InputGroupInput placeholder="Search..." />
			<InputGroupButton>Go</InputGroupButton>
		</InputGroup>
	),
};

export const WithText: Story = {
	render: () => (
		<InputGroup className="w-72">
			<InputGroupAddon>
				<InputGroupText>https://</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput placeholder="example.com" />
		</InputGroup>
	),
};
