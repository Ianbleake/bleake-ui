import { Tooltip as TooltipPrimitive } from "radix-ui";
import type React from "react";

export const Tooltip = ({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>): React.ReactElement => {
	return (
		<TooltipPrimitive.Root
			data-slot="tooltip"
			{...props}
		/>
	);
};
