import { Tooltip as TooltipPrimitive } from "radix-ui";
import type React from "react";

export const TooltipTrigger = ({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>): React.ReactElement => {
	return (
		<TooltipPrimitive.Trigger
			data-slot="tooltip-trigger"
			{...props}
		/>
	);
};
