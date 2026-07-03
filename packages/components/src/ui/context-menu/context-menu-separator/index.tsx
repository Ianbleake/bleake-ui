import { merge } from "@bleakedev/bleake-core";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import type React from "react";

export const ContextMenuSeparator = ({
	className,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>): React.ReactElement => {
	return (
		<ContextMenuPrimitive.Separator
			data-slot="context-menu-separator"
			className={merge("-mx-1 my-1 h-px bg-border/50", className)}
			{...props}
		/>
	);
};
