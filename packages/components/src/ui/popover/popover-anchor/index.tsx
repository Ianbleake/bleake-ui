import { Popover as PopoverPrimitive } from "radix-ui";
import type React from "react";

export const PopoverAnchor = ({
	...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>): React.ReactElement => {
	return (
		<PopoverPrimitive.Anchor
			data-slot="popover-anchor"
			{...props}
		/>
	);
};
