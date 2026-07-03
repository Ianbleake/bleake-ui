import { merge } from "@bleakedev/bleake-core";
import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const MenubarSeparator = ({
	className,
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>): React.ReactElement => {
	return (
		<MenubarPrimitive.Separator
			data-slot="menubar-separator"
			className={merge("-mx-1 my-1 h-px bg-border/50", className)}
			{...props}
		/>
	);
};
