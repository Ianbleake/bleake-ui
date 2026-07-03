import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type React from "react";

export const DropdownMenuSub = ({
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>): React.ReactElement => {
	return (
		<DropdownMenuPrimitive.Sub
			data-slot="dropdown-menu-sub"
			{...props}
		/>
	);
};
