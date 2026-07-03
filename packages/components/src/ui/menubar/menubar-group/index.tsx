import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const MenubarGroup = ({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>): React.ReactElement => {
	return (
		<MenubarPrimitive.Group
			data-slot="menubar-group"
			{...props}
		/>
	);
};
