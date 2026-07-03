import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { Popover } from "./index";
import { PopoverContent } from "./popover-content";
import { PopoverTrigger } from "./popover-trigger";

const meta: Meta<typeof Popover> = {
	title: "UI/Popover",
	component: Popover,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">Open popover</Button>
			</PopoverTrigger>
			<PopoverContent>
				<div className="flex flex-col gap-2">
					<p className="text-sm font-medium">Popover content</p>
					<p className="text-muted-foreground text-sm">This is the popover body.</p>
				</div>
			</PopoverContent>
		</Popover>
	),
};
