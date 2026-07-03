import { Popover as PopoverPrimitive } from "radix-ui";
import type React from "react";

export const PopoverTrigger = ({
	...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>): React.ReactElement => {
	return (
		<PopoverPrimitive.Trigger
			data-slot="popover-trigger"
			{...props}
		/>
	);
};
