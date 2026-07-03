import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChartIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../button";
import { SectionCard } from "./index";

const meta: Meta<typeof SectionCard> = {
	title: "UI/SectionCard",
	component: SectionCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof SectionCard>;

export const Default: Story = {
	render: () => (
		<SectionCard
			title="Campaign Stats"
			className="w-96"
		>
			<p className="text-xs text-muted-foreground">Section content goes here.</p>
		</SectionCard>
	),
};

export const WithIcon: Story = {
	render: () => (
		<SectionCard
			title="Performance"
			icon={BarChartIcon}
			className="w-96"
		>
			<p className="text-xs text-muted-foreground">Metrics and analytics for the current period.</p>
		</SectionCard>
	),
};

export const WithAction: Story = {
	render: () => (
		<SectionCard
			title="Recent Events"
			icon={BarChartIcon}
			action={
				<Button
					size="sm"
					variant="outline"
				>
					<PlusIcon />
					Add event
				</Button>
			}
			className="w-96"
		>
			<p className="text-xs text-muted-foreground">No recent events to display.</p>
		</SectionCard>
	),
};

export const Collapsable: Story = {
	render: () => (
		<SectionCard
			title="Collapsable Section"
			icon={BarChartIcon}
			mode="collapsable"
			className="w-96"
		>
			<p className="text-xs text-muted-foreground">
				This section can be collapsed by clicking the header.
			</p>
		</SectionCard>
	),
};

export const CollapsableControlled: Story = {
	render: () => {
		const [open, setOpen] = useState<boolean>(true);

		return (
			<div className="flex flex-col gap-4 items-center w-96">
				<Button
					size="sm"
					variant="outline"
					onClick={() => setOpen((prev) => !prev)}
				>
					{open ? "Collapse" : "Expand"}
				</Button>
				<SectionCard
					title="Controlled Section"
					icon={BarChartIcon}
					mode="collapsable"
					open={open}
					onOpenChange={setOpen}
					className="w-full"
				>
					<p className="text-xs text-muted-foreground">
						Controlled externally via the button above.
					</p>
				</SectionCard>
			</div>
		);
	},
};
