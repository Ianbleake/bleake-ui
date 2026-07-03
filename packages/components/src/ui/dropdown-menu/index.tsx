import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type React from "react";

export const DropdownMenu = ({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>): React.ReactElement => {
	return (
		<DropdownMenuPrimitive.Root
			data-slot="dropdown-menu"
			{...props}
		/>
	);
};
