import type { Meta, StoryObj } from "@storybook/react-vite";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { ToggleGroup } from "./index";
import { ToggleGroupItem } from "./toggle-group-item";

const meta: Meta<typeof ToggleGroup> = {
	title: "UI/ToggleGroup",
	component: ToggleGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Single: Story = {
	render: () => (
		<ToggleGroup
			type="single"
			defaultValue="bold"
		>
			<ToggleGroupItem
				value="bold"
				aria-label="Toggle bold"
			>
				<BoldIcon className="size-4" />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="italic"
				aria-label="Toggle italic"
			>
				<ItalicIcon className="size-4" />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="underline"
				aria-label="Toggle underline"
			>
				<UnderlineIcon className="size-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	),
};

export const Multiple: Story = {
	render: () => (
		<ToggleGroup
			type="multiple"
			defaultValue={["bold", "italic"]}
		>
			<ToggleGroupItem
				value="bold"
				aria-label="Toggle bold"
			>
				<BoldIcon className="size-4" />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="italic"
				aria-label="Toggle italic"
			>
				<ItalicIcon className="size-4" />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="underline"
				aria-label="Toggle underline"
			>
				<UnderlineIcon className="size-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	),
};
