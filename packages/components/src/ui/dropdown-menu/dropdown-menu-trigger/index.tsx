import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type React from "react";

export const DropdownMenuTrigger = ({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): React.ReactElement => {
	return (
		<DropdownMenuPrimitive.Trigger
			data-slot="dropdown-menu-trigger"
			{...props}
		/>
	);
};
