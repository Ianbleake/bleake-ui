import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import type React from "react";

export const ContextMenuSub = ({
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>): React.ReactElement => {
	return (
		<ContextMenuPrimitive.Sub
			data-slot="context-menu-sub"
			{...props}
		/>
	);
};
