import { HoverCard as HoverCardPrimitive } from "radix-ui";
import type React from "react";

export const HoverCardTrigger = ({
	...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>): React.ReactElement => {
	return (
		<HoverCardPrimitive.Trigger
			data-slot="hover-card-trigger"
			{...props}
		/>
	);
};
