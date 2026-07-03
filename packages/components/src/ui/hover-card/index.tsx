import { HoverCard as HoverCardPrimitive } from "radix-ui";
import type React from "react";

export const HoverCard = ({
	...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>): React.ReactElement => {
	return (
		<HoverCardPrimitive.Root
			data-slot="hover-card"
			{...props}
		/>
	);
};
