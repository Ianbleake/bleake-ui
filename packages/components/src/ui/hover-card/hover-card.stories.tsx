import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../avatar";
import { AvatarFallback } from "../avatar/avatar-fallback";
import { AvatarImage } from "../avatar/avatar-image";
import { HoverCardContent } from "./hover-card-content";
import { HoverCardTrigger } from "./hover-card-trigger";
import { HoverCard } from "./index";

const meta: Meta<typeof HoverCard> = {
	title: "UI/HoverCard",
	component: HoverCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger asChild>
				<button
					type="button"
					className="text-primary underline"
				>
					@movcid
				</button>
			</HoverCardTrigger>
			<HoverCardContent>
				<div className="flex gap-3">
					<Avatar>
						<AvatarImage src="https://picsum.photos/40/40" />
						<AvatarFallback>MC</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-1">
						<p className="text-sm font-medium">MovCid</p>
						<p className="text-muted-foreground text-sm">Campaign management dashboard</p>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
};
