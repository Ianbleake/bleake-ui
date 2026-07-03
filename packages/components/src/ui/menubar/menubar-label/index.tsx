import { merge } from "@bleakedev/bleake-core";
import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const MenubarLabel = ({
	className,
	inset,
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
	inset?: boolean;
}): React.ReactElement => {
	return (
		<MenubarPrimitive.Label
			data-slot="menubar-label"
			data-inset={inset}
			className={merge("px-2 py-1.5 text-xs text-muted-foreground data-inset:pl-7.5", className)}
			{...props}
		/>
	);
};
