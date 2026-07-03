import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type React from "react";

export const DropdownMenuPortal = ({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>): React.ReactElement => {
	return (
		<DropdownMenuPrimitive.Portal
			data-slot="dropdown-menu-portal"
			{...props}
		/>
	);
};
