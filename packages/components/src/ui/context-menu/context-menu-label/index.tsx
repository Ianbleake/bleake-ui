import { merge } from "@bleakedev/bleake-core";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import type React from "react";

export const ContextMenuLabel = ({
	className,
	inset,
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
	inset?: boolean;
}): React.ReactElement => {
	return (
		<ContextMenuPrimitive.Label
			data-slot="context-menu-label"
			data-inset={inset}
			className={merge("px-2 py-1.5 text-xs text-muted-foreground data-inset:pl-7.5", className)}
			{...props}
		/>
	);
};
