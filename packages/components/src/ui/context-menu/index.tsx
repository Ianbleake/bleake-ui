import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import type React from "react";

export const ContextMenu = ({
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>): React.ReactElement => {
	return (
		<ContextMenuPrimitive.Root
			data-slot="context-menu"
			{...props}
		/>
	);
};
