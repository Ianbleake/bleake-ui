import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import type React from "react";

export const ContextMenuGroup = ({
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>): React.ReactElement => {
	return (
		<ContextMenuPrimitive.Group
			data-slot="context-menu-group"
			{...props}
		/>
	);
};
