import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronDownIcon } from "lucide-react";
import { CollapsibleContent } from "./collapsible-content";
import { CollapsibleTrigger } from "./collapsible-trigger";
import { Collapsible } from "./index";

const meta: Meta<typeof Collapsible> = {
	title: "UI/Collapsible",
	component: Collapsible,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
	render: () => (
		<Collapsible>
			<CollapsibleTrigger className="flex items-center gap-2 font-medium">
				Click to expand
				<ChevronDownIcon className="size-4" />
			</CollapsibleTrigger>
			<CollapsibleContent className="mt-2 text-muted-foreground">
				This content is revealed when the collapsible is open.
			</CollapsibleContent>
		</Collapsible>
	),
};
