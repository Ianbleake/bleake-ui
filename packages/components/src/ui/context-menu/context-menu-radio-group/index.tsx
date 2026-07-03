import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import type React from "react";

export const ContextMenuRadioGroup = ({
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>): React.ReactElement => {
	return (
		<ContextMenuPrimitive.RadioGroup
			data-slot="context-menu-radio-group"
			{...props}
		/>
	);
};
