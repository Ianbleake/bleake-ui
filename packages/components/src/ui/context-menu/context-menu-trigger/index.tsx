import { merge } from "@bleakedev/bleake-core";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import type React from "react";

export const ContextMenuTrigger = ({
	className,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>): React.ReactElement => {
	return (
		<ContextMenuPrimitive.Trigger
			data-slot="context-menu-trigger"
			className={merge("select-none", className)}
			{...props}
		/>
	);
};
