import { merge } from "@bleakedev/bleake-core";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type React from "react";

export const DropdownMenuLabel = ({
	className,
	inset,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
	inset?: boolean;
}): React.ReactElement => {
	return (
		<DropdownMenuPrimitive.Label
			data-slot="dropdown-menu-label"
			data-inset={inset}
			className={merge("px-2 py-1.5 text-xs text-muted-foreground data-inset:pl-7.5", className)}
			{...props}
		/>
	);
};
