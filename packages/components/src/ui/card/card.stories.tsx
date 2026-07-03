import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { CardAction } from "./card-action";
import { CardContent } from "./card-content";
import { CardDescription } from "./card-description";
import { CardFooter } from "./card-footer";
import { CardHeader } from "./card-header";
import { CardTitle } from "./card-title";
import { Card } from "./index";

const meta: Meta<typeof Card> = {
	title: "UI/Card",
	component: Card,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	render: () => (
		<Card className="w-80">
			<CardHeader>
				<CardTitle>Campaign Overview</CardTitle>
				<CardDescription>Summary of the active campaign metrics.</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-xs text-muted-foreground">
					This card displays general information about the campaign without any action.
				</p>
			</CardContent>
			<CardFooter>
				<span className="text-xs text-muted-foreground">Last updated: today</span>
			</CardFooter>
		</Card>
	),
};

export const WithAction: Story = {
	render: () => (
		<Card className="w-80">
			<CardHeader>
				<CardTitle>Campaign Overview</CardTitle>
				<CardDescription>Summary of the active campaign metrics.</CardDescription>
				<CardAction>
					<Button
						size="sm"
						variant="outline"
					>
						Edit
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p className="text-xs text-muted-foreground">
					This card includes an action button in the header for quick access.
				</p>
			</CardContent>
			<CardFooter>
				<Button
					size="sm"
					variant="default"
				>
					View details
				</Button>
			</CardFooter>
		</Card>
	),
};

export const SmallSize: Story = {
	render: () => (
		<Card
			size="sm"
			className="w-72"
		>
			<CardHeader>
				<CardTitle>Small Card</CardTitle>
				<CardDescription>Compact layout with reduced padding.</CardDescription>
				<CardAction>
					<Button
						size="sm"
						variant="ghost"
					>
						More
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p className="text-xs text-muted-foreground">Content in a small card variant.</p>
			</CardContent>
		</Card>
	),
};
