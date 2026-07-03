import { merge } from "@bleakedev/bleake-core";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type React from "react";

export const DropdownMenuSeparator = ({
	className,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => {
	return (
		<DropdownMenuPrimitive.Separator
			data-slot="dropdown-menu-separator"
			className={merge("-mx-1 my-1 h-px bg-border/50", className)}
			{...props}
		/>
	);
};
