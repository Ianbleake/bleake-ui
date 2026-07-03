import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import type React from "react";

export const ContextMenuPortal = ({
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>): React.ReactElement => {
	return (
		<ContextMenuPrimitive.Portal
			data-slot="context-menu-portal"
			{...props}
		/>
	);
};
