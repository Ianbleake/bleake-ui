import { Popover as PopoverPrimitive } from "radix-ui";
import type React from "react";

export const Popover = ({
	...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>): React.ReactElement => {
	return (
		<PopoverPrimitive.Root
			data-slot="popover"
			{...props}
		/>
	);
};
