import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type React from "react";

export const DropdownMenuGroup = ({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>): React.ReactElement => {
	return (
		<DropdownMenuPrimitive.Group
			data-slot="dropdown-menu-group"
			{...props}
		/>
	);
};
